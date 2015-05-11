/**
 * Created by Administrator on 2015/5/11.
 */
({
    appDir: "../",
//    dir:"../",
    baseUrl: "./main"
    ,dir: "../../../bin/js"//,
    ,name:"main"
    ,path: {
        "base": "empty:",
        "document": "empty:",
        "http": "empty:",
        "logger": "empty:",
        "model": "empty:",
        "thread": "empty:",
        "settings": "empty:",
        "ui": "empty:",
        "utils": "empty:",
        "build": "empty:"
    }
//    ,modules:[
//        {
//            name:'main',
//            exclude:[
////                'base/ArrayBase',
////                'base/ObjectBase',
////                'base/FunctionBase',
////                'base/Base',
//                'document/DocumentFactory',
//                'document/TreeImpl',
//                'document/TreeType',
//                'http/HttpRequestProxy',
//                'logger/Logger',
//                'logger/ProtocolLogger',
//                'model/ChatMessageTemplate',
//                'model/GroupChatMessage',
//                'model/UserTemplate',
//                'model/CollectionPrototype',
//                'model/CollectionProxy',
//                'model/ConstructorProxy',
//                'settings/CoreSettings',
//                'thread/ThreadProxy',
//                'thread/Worker',
//                'ui/Layout',
//                'ui/$',
//                'utils/CommonUtils',
//                'utils/CookieUtil',
//                'utils/CSSUtil',
//                'utils/EventUtil',
//                'utils/MathUtil',
//                'utils/TypeCheck',
//                'utils/TypeCheckExtender',
////                'build.bat',
//                'build'
////                'build.json',
////                'r'
//            ]
//        }
//    ]
//    baseUrl:'.',
//    ,name: 'main'
//    ,out:'../../../bin/js/main.js'
    ,optimize:"uglify2"
    ,generateSourceMaps:true
    ,preserveLicenseComments:false
})