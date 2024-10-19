require("./__farm_runtime.54245b97.cjs");require("./index_6a0c.123de9d1.js");require("./index_8848.7214a26a.js");var __farm_external_module_fs = require("fs");var __farm_external_module_handlebars = require("handlebars");(globalThis || window || global)['f081367f80fe14896375a9f8b8918ca3'].__farm_module_system__.setExternalModules({"fs": __farm_external_module_fs,"handlebars": __farm_external_module_handlebars});(function(_){for(var r in _){_[r].__farm_resource_pot__='file://'+__filename;(globalThis || window || global)['f081367f80fe14896375a9f8b8918ca3'].__farm_module_system__.register(r,_[r])}})({"33c8ed3d":function  (e,r,i,l){let t=i("fs",!0),o=i("handlebars",!0),m="./output";t.existsSync(m)||t.mkdirSync(m,{recursive:!0}),function(e,r,i){let l=`
        <html>
        <head>
            <title>Iframe Page</title>
        </head>
        <body>
            <h1>Iframe Embedding</h1>
            <iframe src="{{iframeUrl}}" width="100%" height="600px" frameborder="0" allowfullscreen></iframe>
        </body>
        </html>
    `,m=o.compile(l)({iframeUrl:i}),c=`${e}/${r}.html`;t.writeFile(c,m,e=>{if(e)return console.error(`Error writing file: ${e}`);console.log(`File successfully created at: ${c}`);});}(m,"iframePage","https://blog.pragmaticengineer.com");},});(globalThis || window || global)['f081367f80fe14896375a9f8b8918ca3'].__farm_module_system__.setInitialLoadedResources(['index_6a0c.123de9d1.js','index_8848.7214a26a.js']);(globalThis || window || global)['f081367f80fe14896375a9f8b8918ca3'].__farm_module_system__.setDynamicModuleResourcesMap({  });var farmModuleSystem = (globalThis || window || global)['f081367f80fe14896375a9f8b8918ca3'].__farm_module_system__;farmModuleSystem.bootstrap();var entry = farmModuleSystem.require("33c8ed3d");module.exports = entry;
//# sourceMappingURL=index.js.map