/**
 * Created by Administrator on 2015/5/12.
 */
({
    //the directory to be copy entirely.
    appDir: "./app"
    //relative to appDir
    ,baseUrl: "."
    //output directory relative to build.js
    ,dir: "../../bin/html/"//

    ,fileExclusionRegExp: /^((r|build)\.js|build\.bat)|.*\.(css|txt)$/
    ,keepBuildDir:true
})