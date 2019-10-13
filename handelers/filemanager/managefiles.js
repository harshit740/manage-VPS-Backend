const fs = require('fs');
var pah = require('path');

async function getList(options) {
    var finalist = [];
    var path = options.path;
    const isShowHidden = options.isHidden;
    let att;
    try {
        var items = await fs.readdirSync(path + "/");

        for (let i = 0; i < items.length; i++) {
            if (isShowHidden === false) {
                if ((/(^|\/)\.[^\/\.]/g).test(items[i])){
                    continue
                }
            }
            const file = path + "/" + items[i];
            att = await fs.statSync(file);
            finalist.push({
                "name": items[i],
                "path": file,
                "lastModified": att.mtime.toString(),
                "lastAccesed": att.atime.toString(),
                "birthtime": att.birthtime.toString(),
                "isFile": att.isFile(),
                "ext": await pah.extname(file),
                // "Attributes": att
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


