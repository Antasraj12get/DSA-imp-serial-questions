/*
=> Merge Sort
    Merge Sort is a divide-and-conquer sorting algorithm known for its efficiency and stable sorting behavior.

    How Merge Sort Works (Step by Step)
    1. Divide (Splitting)
    The array is repeatedly divided into two halves until each subarray has one element.
    A single-element array is always sorted by definition.

    2. Conquer (Sorting + Merging)
    Merge two sorted subarrays into a single sorted array.
    This merging process is repeated recursively, step by step, until the entire array is sorted.


=>  our function using three loops for calculating whole left and right part so it takes O(n^2);tc

=>  912. Sort an Array (leetcode) best case

*/




const merge = (arr, st, mid, end) => {
    let temp = [];
    let i = st;
    let j = mid + 1;
    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i]);
            i++;
        } else {
            temp.push(arr[j]);
            j++;
        }
    }
    while (i <= mid) {
        temp.push(arr[i]);
        i++;
    }

    while (j <= end) {
        temp.push(arr[j]);
        j++;
    }

    for (let ind = 0; ind < temp.length; ind++) {
        arr[ind + st] = temp[ind];
    }
}

const mergeSort = (arr, st, end) => {
    if (st < end) {
        let mid = Math.floor(st + (end - st) / 2);
        mergeSort(arr, st, mid);
        mergeSort(arr, mid + 1, end);
        merge(arr, st, mid, end)
    }

// ---- driver code outside ----
let nums = [2, 5, 4, 9, 8, 7, 6, 1, 3, 5];
mergeSort(nums, 0, nums.length - 1);
console.log(nums);  // [1, 2, 3, 4, 5, 5, 6, 7, 8, 9]








// printed code here 
/*
const merge = (arr, st, mid, end) => {
    let temp = [];
    let i = st;
    let j = mid + 1;

    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i++]);
        } else {
            temp.push(arr[j++]);
        }
    }
    while (i <= mid) temp.push(arr[i++]);
    while (j <= end) temp.push(arr[j++]);

    for (let ind = 0; ind < temp.length; ind++) {
        arr[st + ind] = temp[ind];
    }
};

const mergeSort = (arr, st, end) => {
    if (st < end) {
        let mid = Math.floor(st + (end - st) / 2);
        mergeSort(arr, st, mid);
        mergeSort(arr, mid + 1, end);
        merge(arr, st, mid, end);
    }
};

// ---- Move test code OUTSIDE ----
let nums = [2, 5, 4, 9, 8, 7, 6, 1, 3, 5];
mergeSort(nums, 0, nums.length - 1);
console.log(nums);  // Sorted array prints here

*/









}