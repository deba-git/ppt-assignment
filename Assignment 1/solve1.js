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


// Q5. Answer
function mergeSortedArray(nums1, m, nums2, n) {
    let i = m - 1; // Pointer for nums1
    let j = n - 1; // Pointer for nums2
    let k = m + n - 1; // Pointer for the merged array
    
    while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
      } else {
        nums1[k] = nums2[j];
        j--;
      }
      k--;
    }
    
    while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
 
//   Q 6. Answer
var containsDuplicate = function(nums) {
    const map = {}
    for(const num of nums) {
        // If we have seen this num before return true
        if(map[num]) return true
        map[num] = true
    }
    return false
};

// Q7. Answer
function moveZeroes(nums) {
    let nonZeroIndex = 0; // Pointer for non-zero elements
  
    // Move non-zero elements to the beginning of the array
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[nonZeroIndex] = nums[i];
        nonZeroIndex++;
      }
    }
  
    // Fill the remaining elements with zeros
    for (let i = nonZeroIndex; i < nums.length; i++) {
      nums[i] = 0;
    }
  }

//   Q 8. Answer