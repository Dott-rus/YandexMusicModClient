const fs = require('fs').promises;
const Patcher = require('./classes/Patcher');

const SOURCE_VERSION = '5.22.1@pure'

const PATH_TO_TARGET = '../src'
const PATH_TO_SOURCE = `../extracted/${SOURCE_VERSION}@pure`
const PATH_TO_PATCHES = `./patches`
const PATH_TO_TMP_TARGET = `./tmp/target`
const PATH_TO_TMP_SOURCE = `./tmp/source`
const PATH_TO_TMP_EXTRACTED = `./tmp/extracted`

async function init() {
    await requireUtils();
}

async function requireUtils() {
    console.log('Loading utils:');
    (await fs.readdir('./utils/')).forEach(file => {
        const path = './utils/' + file;
        console.time(path);
        require(path);
        console.timeEnd(path);
    });
}

await init();

const patcher = new Patcher(PATH_TO_TARGET, PATH_TO_SOURCE, PATH_TO_PATCHES, PATH_TO_TMP_TARGET, PATH_TO_TMP_SOURCE, PATH_TO_TMP_EXTRACTED);

patcher.patch();
