/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, 
 * return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 * 
 * Example 1:
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 * 
 * Example 2:
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    let uniqueMat = [...nums1, ...nums2];
    let sortedMat = uniqueMat.sort((a,b) => a-b);
    let lenSorted = sortedMat.length;
    let response = 0;
    let midPosition = 0;
    let midPartner = 0;

if (lenSorted % 2 === 0) {
        midPosition = lenSorted/2;
        midPartner = midPosition-1;
        response=((sortedMat[midPartner] + sortedMat[midPosition])/2);
        return response.toFixed(5);
    } else {
        midPosition = Math.floor(lenSorted/2);
        response = sortedMat[midPosition];
        return response.toFixed(5);
    }

}

let nums1 = [1,2];
let nums2 = [3,4];

console.log(findMedianSortedArrays(nums1,nums2));