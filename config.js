System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "es7.decorators",
      "es7.classProperties",
      "runtime"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.1.0",
    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.1.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.2",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.1.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.1",
    "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.1.1",
    "aurelia-http-client": "github:aurelia/http-client@0.13.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.1.1",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.3",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.3",
    "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.1.2",
    "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.1.0",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.0",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.0",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.1.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.1.0",
    "aurelia/fetch-client": "github:aurelia/fetch-client@0.1.1",
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "clean-css": "npm:clean-css@3.4.9",
    "core-js": "npm:core-js@0.9.18",
    "css": "github:systemjs/plugin-css@0.1.20",
    "fetch": "github:github/fetch@0.9.0",
    "font-awesome": "npm:font-awesome@4.5.0",
    "text": "github:systemjs/plugin-text@0.0.4",
    "github:aurelia/fetch-client@0.1.1": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/http-client@0.13.0": {
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-path": "github:aurelia/path@0.11.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.0"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.1.2": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.3",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.0.3"
    },
    "npm:aurelia-fetch-client@1.0.0-beta.1.1.0": {
      "core-js": "npm:core-js@2.0.3"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.1.3": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.0.3"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.1.2": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.0.3"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:clean-css@3.4.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@2.0.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  },
  bundles: {
    "bouncer.js": [
      "components/bouncer.js"
    ],
    "app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.4.js"
    ],
    "vendor-build.js": [
      "github:components/jquery@2.2.0.js",
      "github:components/jquery@2.2.0/jquery.js",
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "github:jspm/nodelibs-buffer@0.1.0/index.js",
      "github:jspm/nodelibs-events@0.1.1.js",
      "github:jspm/nodelibs-events@0.1.1/index.js",
      "github:jspm/nodelibs-fs@0.1.2.js",
      "github:jspm/nodelibs-fs@0.1.2/index.js",
      "github:jspm/nodelibs-http@1.7.1.js",
      "github:jspm/nodelibs-http@1.7.1/index.js",
      "github:jspm/nodelibs-http@1.7.1/lib/request.js",
      "github:jspm/nodelibs-http@1.7.1/lib/response.js",
      "github:jspm/nodelibs-https@0.1.0.js",
      "github:jspm/nodelibs-https@0.1.0/index.js",
      "github:jspm/nodelibs-os@0.1.0.js",
      "github:jspm/nodelibs-os@0.1.0/index.js",
      "github:jspm/nodelibs-path@0.1.0.js",
      "github:jspm/nodelibs-path@0.1.0/index.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:jspm/nodelibs-stream@0.1.0.js",
      "github:jspm/nodelibs-stream@0.1.0/index.js",
      "github:jspm/nodelibs-url@0.1.0.js",
      "github:jspm/nodelibs-url@0.1.0/index.js",
      "github:jspm/nodelibs-util@0.1.0.js",
      "github:jspm/nodelibs-util@0.1.0/index.js",
      "github:systemjs/plugin-css@0.1.20.js",
      "github:systemjs/plugin-css@0.1.20/css.js",
      "github:twbs/bootstrap@3.3.6.js",
      "github:twbs/bootstrap@3.3.6/js/bootstrap.js",
      "npm:Base64@0.2.1.js",
      "npm:Base64@0.2.1/base64.js",
      "npm:amdefine@1.0.0.js",
      "npm:amdefine@1.0.0/amdefine.js",
      "npm:aurelia-binding@1.0.0-beta.1.1.1.js",
      "npm:aurelia-binding@1.0.0-beta.1.1.1/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.1.1.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.1.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.1.2.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.1.2/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.1.0.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.1.0/aurelia-event-aggregator.js",
      "npm:aurelia-framework@1.0.0-beta.1.1.1.js",
      "npm:aurelia-framework@1.0.0-beta.1.1.1/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.1.1.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.1.1/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.1.1.1.js",
      "npm:aurelia-history@1.0.0-beta.1.1.1/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.1.1.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.1.1/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.1.1.0.js",
      "npm:aurelia-loader@1.0.0-beta.1.1.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.1.3.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.1.3/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.1.1.1.js",
      "npm:aurelia-logging@1.0.0-beta.1.1.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.1.1.3.js",
      "npm:aurelia-metadata@1.0.0-beta.1.1.3/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.1.2.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.1.2/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.1.1.js",
      "npm:aurelia-pal@1.0.0-beta.1.1.1/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.1.1.0.js",
      "npm:aurelia-path@1.0.0-beta.1.1.0/aurelia-path.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.1.0.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.1.1.0.js",
      "npm:aurelia-router@1.0.0-beta.1.1.0/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.0.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.1.0.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.1.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.0/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.0.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.0/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.1.1.0.js",
      "npm:aurelia-templating@1.0.0-beta.1.1.0/aurelia-templating.js",
      "npm:base64-js@0.0.8.js",
      "npm:base64-js@0.0.8/lib/b64.js",
      "npm:buffer@3.6.0.js",
      "npm:buffer@3.6.0/index.js",
      "npm:clean-css@3.4.9.js",
      "npm:clean-css@3.4.9/index.js",
      "npm:clean-css@3.4.9/lib/clean.js",
      "npm:clean-css@3.4.9/lib/colors/hex-name-shortener.js",
      "npm:clean-css@3.4.9/lib/colors/hsl.js",
      "npm:clean-css@3.4.9/lib/colors/rgb.js",
      "npm:clean-css@3.4.9/lib/imports/inliner.js",
      "npm:clean-css@3.4.9/lib/properties/break-up.js",
      "npm:clean-css@3.4.9/lib/properties/can-override.js",
      "npm:clean-css@3.4.9/lib/properties/clone.js",
      "npm:clean-css@3.4.9/lib/properties/compactable.js",
      "npm:clean-css@3.4.9/lib/properties/every-combination.js",
      "npm:clean-css@3.4.9/lib/properties/has-inherit.js",
      "npm:clean-css@3.4.9/lib/properties/optimizer.js",
      "npm:clean-css@3.4.9/lib/properties/override-compactor.js",
      "npm:clean-css@3.4.9/lib/properties/populate-components.js",
      "npm:clean-css@3.4.9/lib/properties/remove-unused.js",
      "npm:clean-css@3.4.9/lib/properties/restore-from-optimizing.js",
      "npm:clean-css@3.4.9/lib/properties/restore.js",
      "npm:clean-css@3.4.9/lib/properties/shorthand-compactor.js",
      "npm:clean-css@3.4.9/lib/properties/validator.js",
      "npm:clean-css@3.4.9/lib/properties/vendor-prefixes.js",
      "npm:clean-css@3.4.9/lib/properties/wrap-for-optimizing.js",
      "npm:clean-css@3.4.9/lib/selectors/advanced.js",
      "npm:clean-css@3.4.9/lib/selectors/clean-up.js",
      "npm:clean-css@3.4.9/lib/selectors/extractor.js",
      "npm:clean-css@3.4.9/lib/selectors/is-special.js",
      "npm:clean-css@3.4.9/lib/selectors/merge-adjacent.js",
      "npm:clean-css@3.4.9/lib/selectors/merge-media-queries.js",
      "npm:clean-css@3.4.9/lib/selectors/merge-non-adjacent-by-body.js",
      "npm:clean-css@3.4.9/lib/selectors/merge-non-adjacent-by-selector.js",
      "npm:clean-css@3.4.9/lib/selectors/reduce-non-adjacent.js",
      "npm:clean-css@3.4.9/lib/selectors/remove-duplicate-media-queries.js",
      "npm:clean-css@3.4.9/lib/selectors/remove-duplicates.js",
      "npm:clean-css@3.4.9/lib/selectors/reorderable.js",
      "npm:clean-css@3.4.9/lib/selectors/restructure.js",
      "npm:clean-css@3.4.9/lib/selectors/simple.js",
      "npm:clean-css@3.4.9/lib/source-maps/track.js",
      "npm:clean-css@3.4.9/lib/stringifier/helpers.js",
      "npm:clean-css@3.4.9/lib/stringifier/one-time.js",
      "npm:clean-css@3.4.9/lib/stringifier/simple.js",
      "npm:clean-css@3.4.9/lib/stringifier/source-maps.js",
      "npm:clean-css@3.4.9/lib/text/comments-processor.js",
      "npm:clean-css@3.4.9/lib/text/escape-store.js",
      "npm:clean-css@3.4.9/lib/text/expressions-processor.js",
      "npm:clean-css@3.4.9/lib/text/free-text-processor.js",
      "npm:clean-css@3.4.9/lib/text/urls-processor.js",
      "npm:clean-css@3.4.9/lib/tokenizer/extract-properties.js",
      "npm:clean-css@3.4.9/lib/tokenizer/extract-selectors.js",
      "npm:clean-css@3.4.9/lib/tokenizer/tokenize.js",
      "npm:clean-css@3.4.9/lib/urls/rebase.js",
      "npm:clean-css@3.4.9/lib/urls/reduce.js",
      "npm:clean-css@3.4.9/lib/urls/rewrite.js",
      "npm:clean-css@3.4.9/lib/utils/clone-array.js",
      "npm:clean-css@3.4.9/lib/utils/compatibility.js",
      "npm:clean-css@3.4.9/lib/utils/input-source-map-tracker.js",
      "npm:clean-css@3.4.9/lib/utils/object.js",
      "npm:clean-css@3.4.9/lib/utils/quote-scanner.js",
      "npm:clean-css@3.4.9/lib/utils/source-reader.js",
      "npm:clean-css@3.4.9/lib/utils/source-tracker.js",
      "npm:clean-css@3.4.9/lib/utils/split.js",
      "npm:core-js@0.9.18.js",
      "npm:core-js@0.9.18/client/shim.min.js",
      "npm:core-js@2.0.3.js",
      "npm:core-js@2.0.3/index.js",
      "npm:core-js@2.0.3/modules/_.js",
      "npm:core-js@2.0.3/modules/_a-function.js",
      "npm:core-js@2.0.3/modules/_add-to-unscopables.js",
      "npm:core-js@2.0.3/modules/_an-instance.js",
      "npm:core-js@2.0.3/modules/_an-object.js",
      "npm:core-js@2.0.3/modules/_array-copy-within.js",
      "npm:core-js@2.0.3/modules/_array-fill.js",
      "npm:core-js@2.0.3/modules/_array-from-iterable.js",
      "npm:core-js@2.0.3/modules/_array-includes.js",
      "npm:core-js@2.0.3/modules/_array-methods.js",
      "npm:core-js@2.0.3/modules/_array-species-create.js",
      "npm:core-js@2.0.3/modules/_bind.js",
      "npm:core-js@2.0.3/modules/_classof.js",
      "npm:core-js@2.0.3/modules/_cof.js",
      "npm:core-js@2.0.3/modules/_collection-strong.js",
      "npm:core-js@2.0.3/modules/_collection-to-json.js",
      "npm:core-js@2.0.3/modules/_collection-weak.js",
      "npm:core-js@2.0.3/modules/_collection.js",
      "npm:core-js@2.0.3/modules/_core.js",
      "npm:core-js@2.0.3/modules/_ctx.js",
      "npm:core-js@2.0.3/modules/_defined.js",
      "npm:core-js@2.0.3/modules/_descriptors.js",
      "npm:core-js@2.0.3/modules/_dom-create.js",
      "npm:core-js@2.0.3/modules/_enum-keys.js",
      "npm:core-js@2.0.3/modules/_export.js",
      "npm:core-js@2.0.3/modules/_fails-is-regexp.js",
      "npm:core-js@2.0.3/modules/_fails.js",
      "npm:core-js@2.0.3/modules/_fix-re-wks.js",
      "npm:core-js@2.0.3/modules/_flags.js",
      "npm:core-js@2.0.3/modules/_for-of.js",
      "npm:core-js@2.0.3/modules/_get-names.js",
      "npm:core-js@2.0.3/modules/_global.js",
      "npm:core-js@2.0.3/modules/_has.js",
      "npm:core-js@2.0.3/modules/_hide.js",
      "npm:core-js@2.0.3/modules/_html.js",
      "npm:core-js@2.0.3/modules/_invoke.js",
      "npm:core-js@2.0.3/modules/_iobject.js",
      "npm:core-js@2.0.3/modules/_is-array-iter.js",
      "npm:core-js@2.0.3/modules/_is-array.js",
      "npm:core-js@2.0.3/modules/_is-integer.js",
      "npm:core-js@2.0.3/modules/_is-object.js",
      "npm:core-js@2.0.3/modules/_is-regexp.js",
      "npm:core-js@2.0.3/modules/_iter-call.js",
      "npm:core-js@2.0.3/modules/_iter-create.js",
      "npm:core-js@2.0.3/modules/_iter-define.js",
      "npm:core-js@2.0.3/modules/_iter-detect.js",
      "npm:core-js@2.0.3/modules/_iter-step.js",
      "npm:core-js@2.0.3/modules/_iterators.js",
      "npm:core-js@2.0.3/modules/_keyof.js",
      "npm:core-js@2.0.3/modules/_library.js",
      "npm:core-js@2.0.3/modules/_math-expm1.js",
      "npm:core-js@2.0.3/modules/_math-log1p.js",
      "npm:core-js@2.0.3/modules/_math-sign.js",
      "npm:core-js@2.0.3/modules/_meta.js",
      "npm:core-js@2.0.3/modules/_microtask.js",
      "npm:core-js@2.0.3/modules/_object-assign.js",
      "npm:core-js@2.0.3/modules/_object-define.js",
      "npm:core-js@2.0.3/modules/_object-sap.js",
      "npm:core-js@2.0.3/modules/_object-to-array.js",
      "npm:core-js@2.0.3/modules/_own-keys.js",
      "npm:core-js@2.0.3/modules/_partial.js",
      "npm:core-js@2.0.3/modules/_path.js",
      "npm:core-js@2.0.3/modules/_property-desc.js",
      "npm:core-js@2.0.3/modules/_redefine-all.js",
      "npm:core-js@2.0.3/modules/_redefine.js",
      "npm:core-js@2.0.3/modules/_replacer.js",
      "npm:core-js@2.0.3/modules/_same-value.js",
      "npm:core-js@2.0.3/modules/_set-proto.js",
      "npm:core-js@2.0.3/modules/_set-species.js",
      "npm:core-js@2.0.3/modules/_set-to-string-tag.js",
      "npm:core-js@2.0.3/modules/_shared.js",
      "npm:core-js@2.0.3/modules/_species-constructor.js",
      "npm:core-js@2.0.3/modules/_string-at.js",
      "npm:core-js@2.0.3/modules/_string-context.js",
      "npm:core-js@2.0.3/modules/_string-html.js",
      "npm:core-js@2.0.3/modules/_string-pad.js",
      "npm:core-js@2.0.3/modules/_string-repeat.js",
      "npm:core-js@2.0.3/modules/_string-trim.js",
      "npm:core-js@2.0.3/modules/_task.js",
      "npm:core-js@2.0.3/modules/_to-index.js",
      "npm:core-js@2.0.3/modules/_to-integer.js",
      "npm:core-js@2.0.3/modules/_to-iobject.js",
      "npm:core-js@2.0.3/modules/_to-length.js",
      "npm:core-js@2.0.3/modules/_to-object.js",
      "npm:core-js@2.0.3/modules/_to-primitive.js",
      "npm:core-js@2.0.3/modules/_typed-array.js",
      "npm:core-js@2.0.3/modules/_typed-buffer.js",
      "npm:core-js@2.0.3/modules/_typed.js",
      "npm:core-js@2.0.3/modules/_uid.js",
      "npm:core-js@2.0.3/modules/_wks.js",
      "npm:core-js@2.0.3/modules/core.delay.js",
      "npm:core-js@2.0.3/modules/core.dict.js",
      "npm:core-js@2.0.3/modules/core.function.part.js",
      "npm:core-js@2.0.3/modules/core.get-iterator-method.js",
      "npm:core-js@2.0.3/modules/core.get-iterator.js",
      "npm:core-js@2.0.3/modules/core.is-iterable.js",
      "npm:core-js@2.0.3/modules/core.number.iterator.js",
      "npm:core-js@2.0.3/modules/core.object.classof.js",
      "npm:core-js@2.0.3/modules/core.object.define.js",
      "npm:core-js@2.0.3/modules/core.object.is-object.js",
      "npm:core-js@2.0.3/modules/core.object.make.js",
      "npm:core-js@2.0.3/modules/core.regexp.escape.js",
      "npm:core-js@2.0.3/modules/core.string.escape-html.js",
      "npm:core-js@2.0.3/modules/core.string.unescape-html.js",
      "npm:core-js@2.0.3/modules/es5.js",
      "npm:core-js@2.0.3/modules/es6.array.copy-within.js",
      "npm:core-js@2.0.3/modules/es6.array.fill.js",
      "npm:core-js@2.0.3/modules/es6.array.find-index.js",
      "npm:core-js@2.0.3/modules/es6.array.find.js",
      "npm:core-js@2.0.3/modules/es6.array.from.js",
      "npm:core-js@2.0.3/modules/es6.array.iterator.js",
      "npm:core-js@2.0.3/modules/es6.array.of.js",
      "npm:core-js@2.0.3/modules/es6.array.species.js",
      "npm:core-js@2.0.3/modules/es6.date.to-string.js",
      "npm:core-js@2.0.3/modules/es6.function.has-instance.js",
      "npm:core-js@2.0.3/modules/es6.function.name.js",
      "npm:core-js@2.0.3/modules/es6.map.js",
      "npm:core-js@2.0.3/modules/es6.math.acosh.js",
      "npm:core-js@2.0.3/modules/es6.math.asinh.js",
      "npm:core-js@2.0.3/modules/es6.math.atanh.js",
      "npm:core-js@2.0.3/modules/es6.math.cbrt.js",
      "npm:core-js@2.0.3/modules/es6.math.clz32.js",
      "npm:core-js@2.0.3/modules/es6.math.cosh.js",
      "npm:core-js@2.0.3/modules/es6.math.expm1.js",
      "npm:core-js@2.0.3/modules/es6.math.fround.js",
      "npm:core-js@2.0.3/modules/es6.math.hypot.js",
      "npm:core-js@2.0.3/modules/es6.math.imul.js",
      "npm:core-js@2.0.3/modules/es6.math.log10.js",
      "npm:core-js@2.0.3/modules/es6.math.log1p.js",
      "npm:core-js@2.0.3/modules/es6.math.log2.js",
      "npm:core-js@2.0.3/modules/es6.math.sign.js",
      "npm:core-js@2.0.3/modules/es6.math.sinh.js",
      "npm:core-js@2.0.3/modules/es6.math.tanh.js",
      "npm:core-js@2.0.3/modules/es6.math.trunc.js",
      "npm:core-js@2.0.3/modules/es6.number.constructor.js",
      "npm:core-js@2.0.3/modules/es6.number.epsilon.js",
      "npm:core-js@2.0.3/modules/es6.number.is-finite.js",
      "npm:core-js@2.0.3/modules/es6.number.is-integer.js",
      "npm:core-js@2.0.3/modules/es6.number.is-nan.js",
      "npm:core-js@2.0.3/modules/es6.number.is-safe-integer.js",
      "npm:core-js@2.0.3/modules/es6.number.max-safe-integer.js",
      "npm:core-js@2.0.3/modules/es6.number.min-safe-integer.js",
      "npm:core-js@2.0.3/modules/es6.number.parse-float.js",
      "npm:core-js@2.0.3/modules/es6.number.parse-int.js",
      "npm:core-js@2.0.3/modules/es6.object.assign.js",
      "npm:core-js@2.0.3/modules/es6.object.freeze.js",
      "npm:core-js@2.0.3/modules/es6.object.get-own-property-descriptor.js",
      "npm:core-js@2.0.3/modules/es6.object.get-own-property-names.js",
      "npm:core-js@2.0.3/modules/es6.object.get-prototype-of.js",
      "npm:core-js@2.0.3/modules/es6.object.is-extensible.js",
      "npm:core-js@2.0.3/modules/es6.object.is-frozen.js",
      "npm:core-js@2.0.3/modules/es6.object.is-sealed.js",
      "npm:core-js@2.0.3/modules/es6.object.is.js",
      "npm:core-js@2.0.3/modules/es6.object.keys.js",
      "npm:core-js@2.0.3/modules/es6.object.prevent-extensions.js",
      "npm:core-js@2.0.3/modules/es6.object.seal.js",
      "npm:core-js@2.0.3/modules/es6.object.set-prototype-of.js",
      "npm:core-js@2.0.3/modules/es6.object.to-string.js",
      "npm:core-js@2.0.3/modules/es6.promise.js",
      "npm:core-js@2.0.3/modules/es6.reflect.apply.js",
      "npm:core-js@2.0.3/modules/es6.reflect.construct.js",
      "npm:core-js@2.0.3/modules/es6.reflect.define-property.js",
      "npm:core-js@2.0.3/modules/es6.reflect.delete-property.js",
      "npm:core-js@2.0.3/modules/es6.reflect.enumerate.js",
      "npm:core-js@2.0.3/modules/es6.reflect.get-own-property-descriptor.js",
      "npm:core-js@2.0.3/modules/es6.reflect.get-prototype-of.js",
      "npm:core-js@2.0.3/modules/es6.reflect.get.js",
      "npm:core-js@2.0.3/modules/es6.reflect.has.js",
      "npm:core-js@2.0.3/modules/es6.reflect.is-extensible.js",
      "npm:core-js@2.0.3/modules/es6.reflect.own-keys.js",
      "npm:core-js@2.0.3/modules/es6.reflect.prevent-extensions.js",
      "npm:core-js@2.0.3/modules/es6.reflect.set-prototype-of.js",
      "npm:core-js@2.0.3/modules/es6.reflect.set.js",
      "npm:core-js@2.0.3/modules/es6.regexp.constructor.js",
      "npm:core-js@2.0.3/modules/es6.regexp.flags.js",
      "npm:core-js@2.0.3/modules/es6.regexp.match.js",
      "npm:core-js@2.0.3/modules/es6.regexp.replace.js",
      "npm:core-js@2.0.3/modules/es6.regexp.search.js",
      "npm:core-js@2.0.3/modules/es6.regexp.split.js",
      "npm:core-js@2.0.3/modules/es6.set.js",
      "npm:core-js@2.0.3/modules/es6.string.anchor.js",
      "npm:core-js@2.0.3/modules/es6.string.big.js",
      "npm:core-js@2.0.3/modules/es6.string.blink.js",
      "npm:core-js@2.0.3/modules/es6.string.bold.js",
      "npm:core-js@2.0.3/modules/es6.string.code-point-at.js",
      "npm:core-js@2.0.3/modules/es6.string.ends-with.js",
      "npm:core-js@2.0.3/modules/es6.string.fixed.js",
      "npm:core-js@2.0.3/modules/es6.string.fontcolor.js",
      "npm:core-js@2.0.3/modules/es6.string.fontsize.js",
      "npm:core-js@2.0.3/modules/es6.string.from-code-point.js",
      "npm:core-js@2.0.3/modules/es6.string.includes.js",
      "npm:core-js@2.0.3/modules/es6.string.italics.js",
      "npm:core-js@2.0.3/modules/es6.string.iterator.js",
      "npm:core-js@2.0.3/modules/es6.string.link.js",
      "npm:core-js@2.0.3/modules/es6.string.raw.js",
      "npm:core-js@2.0.3/modules/es6.string.repeat.js",
      "npm:core-js@2.0.3/modules/es6.string.small.js",
      "npm:core-js@2.0.3/modules/es6.string.starts-with.js",
      "npm:core-js@2.0.3/modules/es6.string.strike.js",
      "npm:core-js@2.0.3/modules/es6.string.sub.js",
      "npm:core-js@2.0.3/modules/es6.string.sup.js",
      "npm:core-js@2.0.3/modules/es6.string.trim.js",
      "npm:core-js@2.0.3/modules/es6.symbol.js",
      "npm:core-js@2.0.3/modules/es6.typed.array-buffer.js",
      "npm:core-js@2.0.3/modules/es6.typed.data-view.js",
      "npm:core-js@2.0.3/modules/es6.typed.float32-array.js",
      "npm:core-js@2.0.3/modules/es6.typed.float64-array.js",
      "npm:core-js@2.0.3/modules/es6.typed.int16-array.js",
      "npm:core-js@2.0.3/modules/es6.typed.int32-array.js",
      "npm:core-js@2.0.3/modules/es6.typed.int8-array.js",
      "npm:core-js@2.0.3/modules/es6.typed.uint16-array.js",
      "npm:core-js@2.0.3/modules/es6.typed.uint32-array.js",
      "npm:core-js@2.0.3/modules/es6.typed.uint8-array.js",
      "npm:core-js@2.0.3/modules/es6.typed.uint8-clamped-array.js",
      "npm:core-js@2.0.3/modules/es6.weak-map.js",
      "npm:core-js@2.0.3/modules/es6.weak-set.js",
      "npm:core-js@2.0.3/modules/es7.array.includes.js",
      "npm:core-js@2.0.3/modules/es7.error.is-error.js",
      "npm:core-js@2.0.3/modules/es7.map.to-json.js",
      "npm:core-js@2.0.3/modules/es7.math.iaddh.js",
      "npm:core-js@2.0.3/modules/es7.math.imulh.js",
      "npm:core-js@2.0.3/modules/es7.math.isubh.js",
      "npm:core-js@2.0.3/modules/es7.math.umulh.js",
      "npm:core-js@2.0.3/modules/es7.object.entries.js",
      "npm:core-js@2.0.3/modules/es7.object.get-own-property-descriptors.js",
      "npm:core-js@2.0.3/modules/es7.object.values.js",
      "npm:core-js@2.0.3/modules/es7.set.to-json.js",
      "npm:core-js@2.0.3/modules/es7.string.at.js",
      "npm:core-js@2.0.3/modules/es7.string.pad-end.js",
      "npm:core-js@2.0.3/modules/es7.string.pad-start.js",
      "npm:core-js@2.0.3/modules/es7.string.trim-left.js",
      "npm:core-js@2.0.3/modules/es7.string.trim-right.js",
      "npm:core-js@2.0.3/modules/es7.system.global.js",
      "npm:core-js@2.0.3/modules/web.dom.iterable.js",
      "npm:core-js@2.0.3/modules/web.immediate.js",
      "npm:core-js@2.0.3/modules/web.timers.js",
      "npm:core-js@2.0.3/shim.js",
      "npm:core-util-is@1.0.2.js",
      "npm:core-util-is@1.0.2/lib/util.js",
      "npm:events@1.0.2.js",
      "npm:events@1.0.2/events.js",
      "npm:font-awesome@4.5.0.js",
      "npm:font-awesome@4.5.0/css/font-awesome.css!github:systemjs/plugin-css@0.1.20.js",
      "npm:https-browserify@0.0.0.js",
      "npm:https-browserify@0.0.0/index.js",
      "npm:ieee754@1.1.6.js",
      "npm:ieee754@1.1.6/index.js",
      "npm:inherits@2.0.1.js",
      "npm:inherits@2.0.1/inherits_browser.js",
      "npm:isarray@0.0.1.js",
      "npm:isarray@0.0.1/index.js",
      "npm:isarray@1.0.0.js",
      "npm:isarray@1.0.0/index.js",
      "npm:os-browserify@0.1.2.js",
      "npm:os-browserify@0.1.2/browser.js",
      "npm:path-browserify@0.0.0.js",
      "npm:path-browserify@0.0.0/index.js",
      "npm:process@0.11.2.js",
      "npm:process@0.11.2/browser.js",
      "npm:punycode@1.3.2.js",
      "npm:punycode@1.3.2/punycode.js",
      "npm:querystring@0.2.0.js",
      "npm:querystring@0.2.0/decode.js",
      "npm:querystring@0.2.0/encode.js",
      "npm:querystring@0.2.0/index.js",
      "npm:readable-stream@1.1.13/duplex.js",
      "npm:readable-stream@1.1.13/lib/_stream_duplex.js",
      "npm:readable-stream@1.1.13/lib/_stream_passthrough.js",
      "npm:readable-stream@1.1.13/lib/_stream_readable.js",
      "npm:readable-stream@1.1.13/lib/_stream_transform.js",
      "npm:readable-stream@1.1.13/lib/_stream_writable.js",
      "npm:readable-stream@1.1.13/passthrough.js",
      "npm:readable-stream@1.1.13/readable.js",
      "npm:readable-stream@1.1.13/transform.js",
      "npm:readable-stream@1.1.13/writable.js",
      "npm:source-map@0.4.4.js",
      "npm:source-map@0.4.4/lib/source-map.js",
      "npm:source-map@0.4.4/lib/source-map/array-set.js",
      "npm:source-map@0.4.4/lib/source-map/base64-vlq.js",
      "npm:source-map@0.4.4/lib/source-map/base64.js",
      "npm:source-map@0.4.4/lib/source-map/binary-search.js",
      "npm:source-map@0.4.4/lib/source-map/mapping-list.js",
      "npm:source-map@0.4.4/lib/source-map/quick-sort.js",
      "npm:source-map@0.4.4/lib/source-map/source-map-consumer.js",
      "npm:source-map@0.4.4/lib/source-map/source-map-generator.js",
      "npm:source-map@0.4.4/lib/source-map/source-node.js",
      "npm:source-map@0.4.4/lib/source-map/util.js",
      "npm:stream-browserify@1.0.0.js",
      "npm:stream-browserify@1.0.0/index.js",
      "npm:string_decoder@0.10.31.js",
      "npm:string_decoder@0.10.31/index.js",
      "npm:url@0.10.3.js",
      "npm:url@0.10.3/url.js",
      "npm:util@0.10.3.js",
      "npm:util@0.10.3/support/isBufferBrowser.js",
      "npm:util@0.10.3/util.js"
    ]
  }
})