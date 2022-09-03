var containsDuplicate = function (nums) {
    if (nums.length == 1) return false
    nums.sort((a, b) => a - b)
    return nums.some((item, index, arr) => item === arr[index + 1])
};


var containsDuplicate = function (nums) {
    return nums.length != (new Set(nums)).size
};

