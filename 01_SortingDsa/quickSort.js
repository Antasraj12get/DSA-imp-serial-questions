/*
Quick Sort Overview
To summarize quickly:

Quick Sort is a divide-and-conquer sorting algorithm.

Steps:

Choose a pivot.

Partition the array → elements smaller than pivot go left, greater go right.

Recursively sort left and right subarrays.

Time Complexity:

Best & Average → O(n log n)

Worst → O(n²) (if pivot is always bad)

Space: O(log n) (due to recursion)

Type: In-place, but not stable.

*/




const partition = (arr, start, end) => {
    let ind = start-1, pivot = arr[end];
    
    for(let i=start; i<end; i++){
        if(arr[i]<= pivot){
            ind++;
            [arr[i], arr[ind]] = [arr[ind], arr[i]];
        }
    }
    
    ind++;
     [arr[end], arr[ind]] = [arr[end], arr[ind]];
     return ind;
}

const quickSort = (arr, start, end) => {
    if(start < end){
        let pivotInd = partition(arr, start, end);
        
        quickSort(arr, start, pivotInd-1);
        quickSort(arr, pivotInd+1, end);
    }
}


let arr = [7, 2, 1, 6, 8, 5, 3, 4];
console.log(quickSort(arr, 0, arr.length - 1));
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]

























