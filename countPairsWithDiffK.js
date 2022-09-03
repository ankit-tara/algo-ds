//Count all distinct pairs with difference equal to k

/* Examples

Input: arr[] = { 1, 5, 3, 4, 2}, k = 3
Output: 2
There are 2 pairs with difference 3, the pairs are { 1, 4 } and { 5, 2 }

Input: arr[] = { 8, 12, 16, 4, 0, 20}, k = 4
Output: 5
There are 5 pairs with difference 4, the pairs are { 0, 4 }, { 4, 8 },
{ 8, 12 }, { 12, 16 } and { 16, 20 } 

*/

// solution 1 (Time Complexity: O(n2))

var countPairsWithDiffK = function (nums, k) {
    let Uniques = [...new Set(nums)]
    let count = 0
    for (let i = 0; i < Uniques.length; i++) {
        for (let j = i; j < Uniques.length; j++) {
            if (Uniques[i] - Uniques[j] == k || Uniques[j] - Uniques[i] == k) {
                count++
            }
        }
    }
    return count
};

// solution 2 (Use Sorting) 


function binarySearch(arr, low, high, x) {
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
        if (x == arr[mid])
            return mid;
        if (x > arr[mid])
            return binarySearch(arr, (mid + 1), high, x);
        else
            return binarySearch(arr, low, (mid - 1), x);
    }
    return -1;
}

function countPairsWithDiffK(arr, k) {
    let count = 0, i;
    // Sort array elements
    arr.sort((a, b) => a - b);
    arr = [...new Set(arr)]
    // Pick a first element point
    for (i = 0; i < arr.length - 1; i++) {
        if (binarySearch(arr, i + 1, arr.length - 1, arr[i] + k) != -1) {
            count++;
        }
    }

    return count;
}