// Q1.  answer:

function twoSum(nums, target) {
  const numMap = {};
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    
    numMap[nums[i]] = i;
  }
  
  return []; // Return an empty array if there's no solution
}

// Q2. answer :

var removeElement = function (nums, val) {
    // Counter for keeping track of elements other than val
    let count = 0;
    // Loop through all the elements of the array
    for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
};

// Q3. Answer
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return left;
  }

//   Q4.


// Q5.