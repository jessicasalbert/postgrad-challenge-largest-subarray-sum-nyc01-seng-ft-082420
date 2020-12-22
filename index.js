let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
 
function largestSubarraySum(array){
    let sum = -Infinity;
    //let temp = 0;
    for (let i = 0; i < array.length; i++) {
        
        let temp = 0;
        for (let j = i; j < array.length; j++) {
            temp += array[j]
            //console.log(temp)
            if (temp > sum) {
            sum = temp
        }
        }
        //console.log(temp)
        
    }
    return sum 
}
 
 
console.log(largestSubayaySum(array))
// 16