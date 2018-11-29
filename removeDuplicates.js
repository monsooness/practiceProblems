function removeDuplicates(arr) {
    const uniques = new Set();
    for (let i = 0; i < arr.length; i++) {
        uniques.add(arr[i]);
    }
    return [...uniques];
}