/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    const arr = [];
    arr[0] = 0;
    for (let i = 0; i <= preferences.length; i++) {
        arr[i + 1] = preferences[i];
    }
    for (let i = 1; i <= (arr.length - 2); i++) {
        if (arr[arr[arr[i]]] == i && arr[i] != i) { count++; }
    }
    return count / 3;

};
