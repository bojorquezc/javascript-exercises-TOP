const removeFromArray = function(toArray, ...toRemove) {
    const loadedArray = Array.from(toArray);

    for(const item of toRemove) {
        if (loadedArray.indexOf(item) === -1) {
            continue;
        }
        const indexToRemove = loadedArray.indexOf(item);
        loadedArray.splice(indexToRemove, 1);
    }
    return loadedArray;
}
// Do not edit below this line
module.exports = removeFromArray;
