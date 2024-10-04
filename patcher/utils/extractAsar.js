const asar = require('@electron/asar');

/**
 * Функция распаковки app.asar

 * @param {String} target Путь до целевого файла app.asar
 * @param {String} dest Путь для распакованного архива
 * @return {Promise}
 */
global.extractAsar = async (target, dest) => {
    await asar.extractAll(target, dest);
};
