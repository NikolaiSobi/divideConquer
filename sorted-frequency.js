function sortedFrequency(arr, num) {
    let left = 0;
    let right = arr.length - 1
    let numFrequency = 0
    let side;
    while(left <= right){
        let midIdx = Math.floor((left + right) / 2)
        if(arr[midIdx] == num){
            numFrequency += 1
            if(arr[midIdx + 1] == num){
                numFrequency += 1
                left = midIdx += 1
            } else {
                if(arr[Math.floor((right - 1) / 2)] == num){
                    
                    numFrequency += 1
                    right = arr[Math.floor((right - 1) / 2) - 1] - 1
                } else {
                    return numFrequency
                }
            }
            if(arr[midIdx - 1]){

            }

        }
        if(arr[midIdx] > num){
            right = midIdx - 1;
            side = "left"
        }
        if(arr[midIdx] < num){
            left = midIdx + 1;
            side = "right"
        }
    }
    if(numFrequency == 0){
        return -1
    }
    return numFrequency

}


module.exports = sortedFrequency