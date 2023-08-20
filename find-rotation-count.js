function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
 
    while (leftIdx <= rightIdx) {
        let middleIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2);
        if (middleIdx < rightIdx && arr[middleIdx] > arr[middleIdx + 1]) {
            return middleIdx + 1;
        }
        if (middleIdx > leftIdx && arr[middleIdx - 1] > arr[middleIdx]) {
            return middleIdx;
        }
        if (arr[leftIdx] > arr[middleIdx]) {
            rightIdx = middleIdx - 1;
        } else {
            leftIdx = middleIdx + 1;
        }
    }
    return 0;
}

console.log(findRotationCount([15, 18, 2, 3, 6, 12]))
console.log((findRotationCount([7, 9, 11, 12, 5])))
console.log((findRotationCount([7, 9, 11, 12, 15])))

module.exports = findRotationCount