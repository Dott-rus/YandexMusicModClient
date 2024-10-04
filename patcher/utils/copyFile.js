const fs = require('fs').promises;

/**
 * Функция копирования файла из target в dist

 * @param {String} target Путь до целевого файла копирования
 * @param {String} dest Путь для нового файла
 * @return {Promise}
 */
global.copyFileOrDir = async (target, dest) => {
    await fs.cp(target, dest, { recursive: true, force: true });
};
