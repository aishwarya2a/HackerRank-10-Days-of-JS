'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    //var a =nums.sort(); 
   // var max=a[a.length-1]; //Assign the last number in the sorted array, which is the maximum value of the array to a variable called 'max'.
   // a=a.reverse(); //Reverse the array
   nums.sort(function(x, y) {
    return x - y;
});
    var max=nums[nums.length-1];
    var i=nums.length-1;
    
    while(i>0) {

        if(nums[i]<max){
            max=nums[i];
           break;
        }
        i--;
    }
   
    return max;

}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}