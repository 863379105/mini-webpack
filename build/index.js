
      (function(modulesInfo){
        function require(modulePath) {

          function fixPath(relativePath) {
            return require(modulesInfo[modulePath].dependencies[relativePath]);
          }

          const exports = {}

          (function(require, code){
            eval(code);
          })(fixPath, modulesInfo[modulePath].code)

          return exports;
        }

        require('./src/index.js');

      })({"./src/index.js":{"dependencies":{"./a.js":"./src/a.js"},"code":"\"use strict\";\n\nvar _a = require(\"./a.js\");\n\nconsole.log(_a.a);"},"./src/a.js":{"dependencies":{"./b.js":"./src/b.js"},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.a = void 0;\n\nvar _b = require(\"./b.js\");\n\nvar a = 'this is a' + \" \" + _b.b;\nexports.a = a;"},"./src/b.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.b = void 0;\nvar b = 'this is b';\nexports.b = b;"}})
    