SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "app/": "app/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-typescript": "github:frankwallis/plugin-typescript@9.0.0",
      "typescript": "npm:typescript@2.7.2",
      "process": "npm:jspm-nodelibs-process@0.2.1",
      "path": "npm:jspm-nodelibs-path@0.2.3",
      "module": "npm:jspm-nodelibs-module@0.2.1",
      "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
      "fs": "npm:jspm-nodelibs-fs@0.2.1",
      "vm": "npm:jspm-nodelibs-vm@0.2.1",
      "util": "npm:jspm-nodelibs-util@0.2.2",
      "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
      "os": "npm:jspm-nodelibs-os@0.2.2",
      "assert": "npm:jspm-nodelibs-assert@0.2.1",
      "constants": "npm:jspm-nodelibs-constants@0.2.1",
      "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
      "stream": "npm:jspm-nodelibs-stream@0.2.1",
      "events": "npm:jspm-nodelibs-events@0.2.2",
      "net": "npm:jspm-nodelibs-net@0.2.1"
    },
    "packages": {
      "npm:typescript@2.7.2": {
        "map": {
          "source-map-support": "npm:source-map-support@0.5.3"
        }
      },
      "npm:source-map-support@0.5.3": {
        "map": {
          "source-map": "npm:source-map@0.6.1"
        }
      },
      "npm:jspm-nodelibs-buffer@0.2.3": {
        "map": {
          "buffer": "npm:buffer@5.1.0"
        }
      },
      "npm:buffer@5.1.0": {
        "map": {
          "ieee754": "npm:ieee754@1.1.8",
          "base64-js": "npm:base64-js@1.2.3"
        }
      },
      "npm:jspm-nodelibs-os@0.2.2": {
        "map": {
          "os-browserify": "npm:os-browserify@0.3.0"
        }
      },
      "npm:jspm-nodelibs-crypto@0.2.1": {
        "map": {
          "crypto-browserify": "npm:crypto-browserify@3.12.0"
        }
      },
      "npm:crypto-browserify@3.12.0": {
        "map": {
          "browserify-sign": "npm:browserify-sign@4.0.4",
          "create-hmac": "npm:create-hmac@1.1.6",
          "public-encrypt": "npm:public-encrypt@4.0.0",
          "randombytes": "npm:randombytes@2.0.6",
          "create-hash": "npm:create-hash@1.1.3",
          "diffie-hellman": "npm:diffie-hellman@5.0.2",
          "create-ecdh": "npm:create-ecdh@4.0.0",
          "pbkdf2": "npm:pbkdf2@3.0.14",
          "randomfill": "npm:randomfill@1.0.4",
          "browserify-cipher": "npm:browserify-cipher@1.0.0",
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:browserify-sign@4.0.4": {
        "map": {
          "create-hmac": "npm:create-hmac@1.1.6",
          "create-hash": "npm:create-hash@1.1.3",
          "inherits": "npm:inherits@2.0.3",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "bn.js": "npm:bn.js@4.11.8",
          "elliptic": "npm:elliptic@6.4.0",
          "parse-asn1": "npm:parse-asn1@5.1.0"
        }
      },
      "npm:create-hmac@1.1.6": {
        "map": {
          "create-hash": "npm:create-hash@1.1.3",
          "inherits": "npm:inherits@2.0.3",
          "cipher-base": "npm:cipher-base@1.0.4",
          "ripemd160": "npm:ripemd160@2.0.1",
          "sha.js": "npm:sha.js@2.4.10",
          "safe-buffer": "npm:safe-buffer@5.1.1"
        }
      },
      "npm:public-encrypt@4.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.3",
          "randombytes": "npm:randombytes@2.0.6",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "bn.js": "npm:bn.js@4.11.8",
          "parse-asn1": "npm:parse-asn1@5.1.0"
        }
      },
      "npm:create-hash@1.1.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "cipher-base": "npm:cipher-base@1.0.4",
          "ripemd160": "npm:ripemd160@2.0.1",
          "sha.js": "npm:sha.js@2.4.10"
        }
      },
      "npm:diffie-hellman@5.0.2": {
        "map": {
          "randombytes": "npm:randombytes@2.0.6",
          "bn.js": "npm:bn.js@4.11.8",
          "miller-rabin": "npm:miller-rabin@4.0.1"
        }
      },
      "npm:randomfill@1.0.4": {
        "map": {
          "randombytes": "npm:randombytes@2.0.6",
          "safe-buffer": "npm:safe-buffer@5.1.1"
        }
      },
      "npm:pbkdf2@3.0.14": {
        "map": {
          "create-hash": "npm:create-hash@1.1.3",
          "create-hmac": "npm:create-hmac@1.1.6",
          "ripemd160": "npm:ripemd160@2.0.1",
          "sha.js": "npm:sha.js@2.4.10",
          "safe-buffer": "npm:safe-buffer@5.1.1"
        }
      },
      "npm:browserify-rsa@4.0.1": {
        "map": {
          "randombytes": "npm:randombytes@2.0.6",
          "bn.js": "npm:bn.js@4.11.8"
        }
      },
      "npm:create-ecdh@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.8",
          "elliptic": "npm:elliptic@6.4.0"
        }
      },
      "npm:cipher-base@1.0.4": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "safe-buffer": "npm:safe-buffer@5.1.1"
        }
      },
      "npm:ripemd160@2.0.1": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "hash-base": "npm:hash-base@2.0.2"
        }
      },
      "npm:randombytes@2.0.6": {
        "map": {
          "safe-buffer": "npm:safe-buffer@5.1.1"
        }
      },
      "npm:sha.js@2.4.10": {
        "map": {
          "safe-buffer": "npm:safe-buffer@5.1.1",
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:elliptic@6.4.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.8",
          "inherits": "npm:inherits@2.0.3",
          "hmac-drbg": "npm:hmac-drbg@1.0.1",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
          "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
          "hash.js": "npm:hash.js@1.1.3",
          "brorand": "npm:brorand@1.1.0"
        }
      },
      "npm:parse-asn1@5.1.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.3",
          "pbkdf2": "npm:pbkdf2@3.0.14",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
          "browserify-aes": "npm:browserify-aes@1.1.1",
          "asn1.js": "npm:asn1.js@4.10.1"
        }
      },
      "npm:browserify-cipher@1.0.0": {
        "map": {
          "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
          "browserify-des": "npm:browserify-des@1.0.0",
          "browserify-aes": "npm:browserify-aes@1.1.1"
        }
      },
      "npm:browserify-des@1.0.0": {
        "map": {
          "cipher-base": "npm:cipher-base@1.0.4",
          "inherits": "npm:inherits@2.0.3",
          "des.js": "npm:des.js@1.0.0"
        }
      },
      "npm:evp_bytestokey@1.0.3": {
        "map": {
          "safe-buffer": "npm:safe-buffer@5.1.1",
          "md5.js": "npm:md5.js@1.3.4"
        }
      },
      "npm:miller-rabin@4.0.1": {
        "map": {
          "bn.js": "npm:bn.js@4.11.8",
          "brorand": "npm:brorand@1.1.0"
        }
      },
      "npm:browserify-aes@1.1.1": {
        "map": {
          "cipher-base": "npm:cipher-base@1.0.4",
          "create-hash": "npm:create-hash@1.1.3",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
          "inherits": "npm:inherits@2.0.3",
          "safe-buffer": "npm:safe-buffer@5.1.1",
          "buffer-xor": "npm:buffer-xor@1.0.3"
        }
      },
      "npm:hash-base@2.0.2": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:hmac-drbg@1.0.1": {
        "map": {
          "hash.js": "npm:hash.js@1.1.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
          "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
        }
      },
      "npm:hash.js@1.1.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:asn1.js@4.10.1": {
        "map": {
          "bn.js": "npm:bn.js@4.11.8",
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:md5.js@1.3.4": {
        "map": {
          "hash-base": "npm:hash-base@3.0.4",
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:des.js@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:hash-base@3.0.4": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "safe-buffer": "npm:safe-buffer@5.1.1"
        }
      },
      "npm:jspm-nodelibs-stream@0.2.1": {
        "map": {
          "stream-browserify": "npm:stream-browserify@2.0.1"
        }
      },
      "npm:jspm-nodelibs-string_decoder@0.2.2": {
        "map": {
          "string_decoder": "npm:string_decoder@0.10.31"
        }
      },
      "npm:stream-browserify@2.0.1": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "readable-stream": "npm:readable-stream@2.3.4"
        }
      },
      "npm:readable-stream@2.3.4": {
        "map": {
          "string_decoder": "npm:string_decoder@1.0.3",
          "inherits": "npm:inherits@2.0.3",
          "safe-buffer": "npm:safe-buffer@5.1.1",
          "util-deprecate": "npm:util-deprecate@1.0.2",
          "core-util-is": "npm:core-util-is@1.0.2",
          "isarray": "npm:isarray@1.0.0",
          "process-nextick-args": "npm:process-nextick-args@2.0.0"
        }
      },
      "npm:string_decoder@1.0.3": {
        "map": {
          "safe-buffer": "npm:safe-buffer@5.1.1"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  packages: {
    "app": {
      "main": "configure.ts",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "aurelia-binding": "npm:aurelia-binding@1.6.0",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.2.0",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.1.5",
    "aurelia-history": "npm:aurelia-history@1.1.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.1.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.3",
    "aurelia-logging": "npm:aurelia-logging@1.4.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-materialize-bridge": "github:aurelia-ui-toolkits/aurelia-materialize-bridge@typescript",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
    "aurelia-pal": "npm:aurelia-pal@1.5.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.4.0",
    "aurelia-path": "npm:aurelia-path@1.1.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.3.0",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.1",
    "aurelia-router": "npm:aurelia-router@1.5.0",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1",
    "aurelia-templating": "npm:aurelia-templating@1.7.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.4.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.5.4",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.3.1",
    "aurelia-ui-toolkits/aurelia-materialize-bridge": "github:aurelia-ui-toolkits/aurelia-materialize-bridge@typescript",
    "css": "github:systemjs/plugin-css@0.1.36",
    "materialize-css": "npm:materialize-css@0.100.2"
  },
  packages: {
    "npm:materialize-css@0.100.2": {
      "map": {
        "jquery": "npm:jquery@2.2.4",
        "hammerjs": "npm:hammerjs@2.0.8"
      }
    },
    "github:aurelia-ui-toolkits/aurelia-materialize-bridge@typescript": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.6.0",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
        "aurelia-pal": "npm:aurelia-pal@1.5.0",
        "aurelia-logging": "npm:aurelia-logging@1.4.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
        "aurelia-templating": "npm:aurelia-templating@1.7.0",
        "aurelia-router": "npm:aurelia-router@1.5.0",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1"
      }
    }
  }
});
