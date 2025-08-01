/*
=> Bubble Sort
    Bubble Sort is a sorting algorithm where adjacent elements are repeatedly compared and swapped if they are in the wrong order. This process continues for multiple passes until the entire array is sorted.
=>  our function using two loops outer and inner so it takes O(n^2)
=>  912. Sort an Array (leetcode)

*/

const bubbleSort = (arr, n) => {
    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr[j]> arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}
const arr = [ 2,3,4,5,9,8,7,6]
let n = arr.length;
console.log(bubbleSort(arr, n))

