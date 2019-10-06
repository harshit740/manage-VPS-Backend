const fs = require('fs');
var pah = require('path');

async function getList(options) {
    var finalist = [];
    var path = options.path
    const isShowHidden = options.isHidden
    try {
        var items = await fs.readdirSync(path+"/");
        if (isShowHidden === false) {
            items = items.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
        }
        for (var i = 0; i < items.length; i++) {
            var file = path + "/"+ items[i];
            att = await fs.statSync(file)
            finalist.push({
                "name": items[i],
                "path": file,
                "lastModified":att.mtime,
                "lastAccesed":att.atime,
                "birthtime":att.birthtime,
                "isFile": await fs.statSync(file).isFile(),
                "ext": await pah.extname(file),
              //  "Attributes": await fs.statSync(file)
            });

        }
    } catch (err) {
        console.log('ERROR:', err);
    }
    return finalist

}

async function create(path, type) {

}

async function upload(path) {

}

async function download(path) {

}

async function extract(path) {

}

module.exports = getList;


