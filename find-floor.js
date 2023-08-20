function findFloor(arr, num) {
    if(num < arr[0]){
        return -1
    }
    let leftIdx = 0
    let rightIdx = arr.length - 1
    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
        let middleVal = arr[middleIdx]
        if(num > middleVal){
            leftIdx = middleIdx + 1
            if(num < arr[leftIdx]){
                return arr[leftIdx - 1]
            }
        
        } else {
            if(num == middleVal){
                return middleVal
            } else {
                rightIdx = middleIdx - 1
                
            }
        }
    }
    
    return arr[arr.length - 1]

}

console.log(findFloor([1,2,8,10,10,12,19], 9)) // 8
console.log(findFloor([1,2,8,10,10,12,19], 18)) // 12
console.log(findFloor([1,2,8,10,10,12,19], 0)) // -1
module.exports = findFloor