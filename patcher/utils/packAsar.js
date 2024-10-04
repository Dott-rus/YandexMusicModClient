const asar = require('@electron/asar');

/**
 * Функция упаковки проекта в app.asar

 * @param {String} target Путь для распакованного архива
 * @param {String} dest Путь до целевого файла app.asar
 * @return {Promise}
 */
global.packAsar = async (target, dest) => {
    await asar.extractAll(target, dest);
};
