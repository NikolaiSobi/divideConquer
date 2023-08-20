function findRotatedIndex(arr, num) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
        if(num == arr[middleIdx]){
            return middleIdx
        }
        if(arr[leftIdx] <= arr[middleIdx]){
            if(num > arr[middleIdx] || num < arr[leftIdx]){
                leftIdx = middleIdx + 1
            } else {
                rightIdx = middleIdx - 1
            }
        } else {
            if(num < arr[middleIdx]){
                rightIdx = middleIdx - 1
            } else {
                if(num > arr[rightIdx] || num < arr[middleIdx]){
                    rightIdx = middleIdx - 1
                } else {
                    leftIdx = middleIdx + 1
                }
            }
        }
    }   
    return -1
}



module.exports = findRotatedIndex