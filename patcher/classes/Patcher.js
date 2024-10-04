class Patcher {
    constructor (targetPath, sourcePath, patchesPath, tmpTarget, tmpSource, tmpExtracted) {
        this.targetPath = targetPath;
        this.sourcePath = sourcePath;
        this.patchesPath = patchesPath;
        this.tmpTarget = tmpTarget;
        this.tmpSource = tmpSource;
        this.tmpExtracted = tmpExtracted;
    }

    async patch(chosenPatchesList=undefined) {
        await this.copyTargetAndSource();
        const manifests = await this.loadPatchManifests(chosenPatchesList);
        const chunksMap = await this.getChunksMap()
        const calculatedPatchIDs = this.getCalculatedPatches(manifests);
        const patches = await this.loadPatches(calculatedPatchIDs);

        for (const patch of patches) {
            patch.apply()
        }
    }

    async extract(path, dest){
        await extractAsar(path, dest);
    };

    async pack(path, dest){
        await packAsar(path, dest);
    };

    async copyTargetAndSource() {
        await Promise.all([copyFileOrDir(this.targetPath, this.tmpTarget), copyFileOrDir(this.sourcePath, this.tmpSource)]) ;
    }

    async loadPatches(patchIDs){
        const patches = []
        for (const id of patchIDs) {
            patches.push(await Patch.loadFromID(id))
        }
        return patches;
    };
}

module.exports = Patcher;
