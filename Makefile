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
	$Q rm -rf $(NODE_DIR)
	$Q rm -rf $(DIST_DIR)
	$Q rm -rf $(RELEASE_DIR)
	$Q rm -f openapitools.json
	$Q rm -f package.json
	$Q rm -f package-lock.json
	$Q rm -f yarn.lock
	$Q rm -f yarn-error.log

######################
# Build Dependencies #
######################

NODE_DIR = node_modules

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
SDK_RELEASE = 0.52.50
SDK_OPENAPI_SPEC = "https://raw.githubusercontent.com/kowabunga-cloud/openapi/refs/$(SDK_OPENAPI_VERSION)/openapi.yaml"
SDK_PKG_NAME = kowabunga-cloud
SDK_LICENSE = Apache-2.0
SDK_DESCRIPTION = Official Kowabunga SDK for
SDK_AUTHOR = The Kowabunga Project
SDK_KEYWORDS = "kowabunga"

.PHONY: sdk
sdk: sdk-angular sdk-node sdk-aurelia sdk-rxjs

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
          --additional-properties=npmVersion=$(SDK_RELEASE),ngVersion=$(SDK_ANGULAR_VERSION),npmName=$(SDK_ANGULAR_PKG_NAME),licenseName=$(SDK_LICENSE),supportsES6=true \
	  -p packageVersion=$(SDK_RELEASE) \
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

SDK_NODE_GENERATOR = typescript-node
SDK_NODE_PKG_NAME = @$(SDK_PKG_NAME)/node
SDK_NODE_DIR = $(PACKAGES_DIR)/node
SDK_NODE_JSON = $(SDK_NODE_DIR)/package.json
SDK_NODE_DESCRIPTION = $(SDK_DESCRIPTION) Node.JS
SDK_NODE_KEYWORDS = $(SDK_KEYWORDS), "nodejs"

.PHONY: sdk-node
sdk-node: get-openapi-generator ; $(info $(M) [OpenAPIv3] Generate Node.JS SDK client code…) @
	$Q $(GENERATOR) generate \
	  -g $(SDK_NODE_GENERATOR) \
	  --package-name $(SDK_NODE_PKG_NAME) \
	  --openapi-normalizer KEEP_ONLY_FIRST_TAG_IN_OPERATION=true \
          --additional-properties=npmVersion=$(SDK_RELEASE),npmName=$(SDK_NODE_PKG_NAME),licenseName=$(SDK_LICENSE),supportsES6=true \
	  -p packageVersion=$(SDK_RELEASE) \
	  -p packageUrl="$(PACKAGE_URL)" \
	  -i $(SDK_OPENAPI_SPEC) \
	  -o $(SDK_NODE_DIR) \
	  $(OUT)
	$Q jq '.description = "$(SDK_NODE_DESCRIPTION)"' $(SDK_NODE_JSON) | sponge $(SDK_NODE_JSON)
	$Q jq '.author = "$(SDK_AUTHOR)"' $(SDK_NODE_JSON) | sponge $(SDK_NODE_JSON)
	$Q jq '.keywords = [$(SDK_NODE_KEYWORDS)]' $(SDK_NODE_JSON) | sponge $(SDK_NODE_JSON)
	$Q jq '.repository.url = "git+$(PACKAGE_URL).git"' $(SDK_NODE_JSON) | sponge $(SDK_NODE_JSON)
	$Q rm -f $(SDK_NODE_DIR)/.gitignore
	$Q rm -rf $(SDK_NODE_DIR)/.openapi-generator
	$Q rm -f $(SDK_NODE_DIR)/.openapi-generator-ignore
	$Q rm -f $(SDK_NODE_DIR)/git_push.sh

SDK_AURELIA_GENERATOR = typescript-aurelia
SDK_AURELIA_PKG_NAME = @$(SDK_PKG_NAME)/aurelia
SDK_AURELIA_DIR = $(PACKAGES_DIR)/aurelia
SDK_AURELIA_JSON = $(SDK_AURELIA_DIR)/package.json
SDK_AURELIA_DESCRIPTION = $(SDK_DESCRIPTION) Aurelia
SDK_AURELIA_KEYWORDS = $(SDK_KEYWORDS), "aurelia"

.PHONY: sdk-aurelia
sdk-aurelia: get-openapi-generator ; $(info $(M) [OpenAPIv3] Generate Aurelia SDK client code…) @
	$Q $(GENERATOR) generate \
	  -g $(SDK_AURELIA_GENERATOR) \
	  --package-name $(SDK_AURELIA_PKG_NAME) \
	  --openapi-normalizer KEEP_ONLY_FIRST_TAG_IN_OPERATION=true \
          --additional-properties=npmVersion=$(SDK_RELEASE),npmName=$(SDK_AURELIA_PKG_NAME),licenseName=$(SDK_LICENSE),supportsES6=true \
	  -p packageVersion=$(SDK_RELEASE) \
	  -p packageUrl="$(PACKAGE_URL)" \
	  -i $(SDK_OPENAPI_SPEC) \
	  -o $(SDK_AURELIA_DIR) \
	  $(OUT)
	$Q jq '.description = "$(SDK_AURELIA_DESCRIPTION)"' $(SDK_AURELIA_JSON) | sponge $(SDK_AURELIA_JSON)
	$Q jq '.author = "$(SDK_AUTHOR)"' $(SDK_AURELIA_JSON) | sponge $(SDK_AURELIA_JSON)
	$Q jq '.keywords = [$(SDK_AURELIA_KEYWORDS)]' $(SDK_AURELIA_JSON) | sponge $(SDK_AURELIA_JSON)
	$Q jq '.repository.url = "git+$(PACKAGE_URL).git"' $(SDK_AURELIA_JSON) | sponge $(SDK_AURELIA_JSON)
	$Q rm -f $(SDK_AURELIA_DIR)/.gitignore
	$Q rm -rf $(SDK_AURELIA_DIR)/.openapi-generator
	$Q rm -f $(SDK_AURELIA_DIR)/.openapi-generator-ignore
	$Q rm -f $(SDK_AURELIA_DIR)/git_push.sh

SDK_RXJS_GENERATOR = typescript-rxjs
SDK_RXJS_PKG_NAME = @$(SDK_PKG_NAME)/rxjs
SDK_RXJS_DIR = $(PACKAGES_DIR)/rxjs
SDK_RXJS_JSON = $(SDK_RXJS_DIR)/package.json
SDK_RXJS_DESCRIPTION = $(SDK_DESCRIPTION) RxJS
SDK_RXJS_KEYWORDS = $(SDK_KEYWORDS), "rxjs"

.PHONY: sdk-rxjs
sdk-rxjs: get-openapi-generator ; $(info $(M) [OpenAPIv3] Generate RxJS SDK client code…) @
	$Q $(GENERATOR) generate \
	  -g $(SDK_RXJS_GENERATOR) \
	  --package-name $(SDK_RXJS_PKG_NAME) \
	  --openapi-normalizer KEEP_ONLY_FIRST_TAG_IN_OPERATION=true \
          --additional-properties=npmVersion=$(SDK_RELEASE),npmName=$(SDK_RXJS_PKG_NAME),licenseName=$(SDK_LICENSE),supportsES6=true \
	  -p packageVersion=$(SDK_RELEASE) \
	  -p packageUrl="$(PACKAGE_URL)" \
	  -i $(SDK_OPENAPI_SPEC) \
	  -o $(SDK_RXJS_DIR) \
	  $(OUT)
	$Q jq '.description = "$(SDK_RXJS_DESCRIPTION)"' $(SDK_RXJS_JSON) | sponge $(SDK_RXJS_JSON)
	$Q jq '.author = "$(SDK_AUTHOR)"' $(SDK_RXJS_JSON) | sponge $(SDK_RXJS_JSON)
	$Q jq '.keywords = [$(SDK_RXJS_KEYWORDS)]' $(SDK_RXJS_JSON) | sponge $(SDK_RXJS_JSON)
	$Q jq '.repository.url = "git+$(PACKAGE_URL).git"' $(SDK_RXJS_JSON) | sponge $(SDK_RXJS_JSON)
	$Q rm -f $(SDK_RXJS_DIR)/.gitignore
	$Q rm -rf $(SDK_RXJS_DIR)/.openapi-generator
	$Q rm -f $(SDK_RXJS_DIR)/.openapi-generator-ignore
	$Q rm -f $(SDK_RXJS_DIR)/git_push.sh

################
# Distribution #
################

DIST_DIR = dist
RELEASE_DIR = release

.PHONY: dist
dist: dist-angular dist-node dist-aurelia dist-rxjs
	$Q rm -rf $(DIST_DIR)
	$Q mkdir -p $(DIST_DIR)
	$Q cp -rf $(SDK_ANGULAR_DIR)/dist $(DIST_DIR)/angular
	$Q cp -rf $(SDK_NODE_DIR)/dist $(DIST_DIR)/node
	$Q cp -rf $(SDK_AURELIA_DIR)/dist $(DIST_DIR)/aurelia
	$Q cp -rf $(SDK_RXJS_DIR)/dist $(DIST_DIR)/rxjs

.PHONY: dist-angular
dist-angular: ; $(info $(M) [Npm] Building distributable AngularJS SDK client code…) @
	$Q cd $(SDK_ANGULAR_DIR) && \
	  npm install && \
	  npm ci && \
	  npm run build

.PHONY: dist-node
dist-node: ; $(info $(M) [Npm] Building distributable Node.JS SDK client code…) @
	$Q cd $(SDK_NODE_DIR) && \
	  npm install && \
	  npm ci && \
	  npm run build

.PHONY: dist-aurelia
dist-aurelia: ; $(info $(M) [Npm] Building distributable Aurelia SDK client code…) @
	$Q cd $(SDK_AURELIA_DIR) && \
	  npm install && \
	  npm ci && \
	  npm run build

.PHONY: dist-rxjs
dist-rxjs: ; $(info $(M) [Npm] Building distributable RxJS SDK client code…) @
	$Q cd $(SDK_RXJS_DIR) && \
	  npm install && \
	  npm ci && \
	  npm run build

.PHONY: release
release:  ; $(info $(M) [Dist] Creating release tarballs…) @
	$Q rm -rf $(RELEASE_DIR)
	$Q mkdir -p $(RELEASE_DIR)
	$Q tar cjf $(RELEASE_DIR)/$(SDK_PKG_NAME)-angular-$(SDK_RELEASE).tgz dist/angular
	$Q tar cjf $(RELEASE_DIR)/$(SDK_PKG_NAME)-node-$(SDK_RELEASE).tgz dist/node
	$Q tar cjf $(RELEASE_DIR)/$(SDK_PKG_NAME)-aurelia-$(SDK_RELEASE).tgz dist/aurelia
	$Q tar cjf $(RELEASE_DIR)/$(SDK_PKG_NAME)-rxjs-$(SDK_RELEASE).tgz dist/rxjs
