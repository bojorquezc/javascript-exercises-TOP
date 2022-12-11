const removeFromArray = function(toArray, ...toRemove) {
    const loadedArray = Array.from(toArray);

    if (toRemove.length == 1) {
        const indexToRemove = loadedArray.indexOf(toRemove);
        loadedArray.splice(indexToRemove, 1);
    } else if (toRemove.length > 1) {
        for (let i = 1; i < toRemove.length; i++) {
            for(const item of toRemove) {
                const indexToRemove = loadedArray.indexOf(item);
                loadedArray.splice(indexToRemove, 1);
            }
        }
    }
    return loadedArray;
    //console.log(loadedArray);
}
// Do not edit below this line
module.exports = removeFromArray;
