# Copyright (c) The Kowabunga Project
# Apache License, Version 2.0 (see LICENSE or https://www.apache.org/licenses/LICENSE-2.0.txt)
# SPDX-License-Identifier: Apache-2.0

.DEFAULT_GOAL := all

##########
# Common #
##########

PACKAGE_NAMESPACE = kowabunga-cloud
PACKAGE_NAME = kowabunga-javascript
PACKAGE_URL = https://github.com/$(PACKAGE_NAMESPACE)/$(PACKAGE_NAME)

V = 0
Q = $(if $(filter 1,$V),,@)
M = $(shell printf "\033[34;1m▶\033[0m")

ifeq ($(V), 1)
  OUT = ""
else
  OUT = ">/dev/null"
endif

.PHONY: all
all: sdk ; @
	$Q echo "done"

.PHONY: clean
clean: ; $(info $(M) Cleaning build residues…) @
	$Q rm -rf $(PACKAGES_DIR)
	$Q rm -rf $(NODE_DIR)
	$Q rm -rf $(RUNTIME_DIR)
	$Q rm -f openapitools.json
	$Q rm -f package.json
	$Q rm -f package-lock.json
	$Q rm -f yarn.lock
	$Q rm -f yarn-error.log

######################
# Build Dependencies #
######################

NODE_DIR = node_modules
RUNTIME_DIR = runtime

YARN = $(NODE_DIR)/.bin/yarn
GENERATOR = $(NODE_DIR)/.bin/openapi-generator-cli

.PHONY: get-yarn
get-yarn: ; $(info $(M) [Npm] Installing yarn…) @
	$Q test -x $(YARN) || npm install --silent yarn

.PHONY: get-openapi-generator
get-openapi-generator: get-yarn ;$(info $(M) [Yarn] Installing openapi-generator-cli…) @
	$Q test -x $(GENERATOR) || $(YARN) add --silent @openapitools/openapi-generator-cli
	$Q chmod a+x $(GENERATOR)

#######
# SDK #
#######

PACKAGES_DIR = packages

# use "heads/master" to build from latest
SDK_OPENAPI_VERSION = tags/v0.52.5
SDK_OPENAPI_SPEC = "https://raw.githubusercontent.com/kowabunga-cloud/openapi/refs/$(SDK_OPENAPI_VERSION)/openapi.yaml"
SDK_PKG_NAME = kowabunga-cloud
SDK_LICENSE = Apache-2.0
SDK_DESCRIPTION = Official Kowabunga SDK for
SDK_AUTHOR = The Kowabunga Project
SDK_KEYWORDS = "kowabunga"

.PHONY: sdk
sdk: sdk-angular

SDK_ANGULAR_GENERATOR = typescript-angular
SDK_ANGULAR_PKG_NAME = @$(SDK_PKG_NAME)/angular
SDK_ANGULAR_VERSION = 18.2.13
SDK_ANGULAR_DIR = $(PACKAGES_DIR)/angular
SDK_ANGULAR_JSON = $(SDK_ANGULAR_DIR)/package.json
SDK_ANGULAR_DESCRIPTION = $(SDK_DESCRIPTION) Angular
SDK_ANGULAR_KEYWORDS = $(SDK_KEYWORDS), "angular"

.PHONY: sdk-angular
sdk-angular: get-openapi-generator ; $(info $(M) [OpenAPIv3] Generate AngularJS SDK client code…) @
	$Q $(GENERATOR) generate \
	  -g $(SDK_ANGULAR_GENERATOR) \
	  --package-name $(SDK_ANGULAR_PKG_NAME) \
	  --openapi-normalizer KEEP_ONLY_FIRST_TAG_IN_OPERATION=true \
          --additional-properties=ngVersion=$(SDK_ANGULAR_VERSION),npmName=$(SDK_ANGULAR_PKG_NAME),licenseName=$(SDK_LICENSE),supportsES6=true \
	  -p packageVersion=$(SDK_OPENAPI_VERSION:tags/v%=%) \
	  -p packageUrl="$(PACKAGE_URL)" \
	  -i $(SDK_OPENAPI_SPEC) \
	  -o $(SDK_ANGULAR_DIR) \
	  $(OUT)
	$Q jq '.description = "$(SDK_ANGULAR_DESCRIPTION)"' $(SDK_ANGULAR_JSON) | sponge $(SDK_ANGULAR_JSON)
	$Q jq '.author = "$(SDK_AUTHOR)"' $(SDK_ANGULAR_JSON) | sponge $(SDK_ANGULAR_JSON)
	$Q jq '.keywords = [$(SDK_ANGULAR_KEYWORDS)]' $(SDK_ANGULAR_JSON) | sponge $(SDK_ANGULAR_JSON)
	$Q jq '.repository.url = "git+$(PACKAGE_URL).git"' $(SDK_ANGULAR_JSON) | sponge $(SDK_ANGULAR_JSON)
	$Q rm -f $(SDK_ANGULAR_DIR)/.gitignore
	$Q rm -rf $(SDK_ANGULAR_DIR)/.openapi-generator
	$Q rm -f $(SDK_ANGULAR_DIR)/.openapi-generator-ignore
	$Q rm -f $(SDK_ANGULAR_DIR)/git_push.sh

################
# Distribution #
################

.PHONY: dist
dist: dist-angular

.PHONY: dist-angular
dist-angular: ; $(info $(M) [Npm] Building distributable AngularJS SDK client code…) @
	$Q cd $(SDK_ANGULAR_DIR) && \
	  npm install && \
	  npm ci && \
	  npm run build
