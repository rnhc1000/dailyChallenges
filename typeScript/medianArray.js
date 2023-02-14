/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function(nums1, nums2) {
  let mat = [...nums1, ...nums2];
  console.log(mat)
  let uniqueMat = [...mat];
  console.log(uniqueMat)
  let sortedMat = uniqueMat.sort(function(a,b) {return a-b});
  console.log(sortedMat)
  let lenSorted = sortedMat.length;
  let response = 0;
  let midPosition = 0;
  let midPartner = 0;
  // if (lenSorted === 2 ) {
  //       //return ((sortedMat[0] + sortedMat[1])/2).toFixed(5);
  //       return sortedMat.reduce((acc,el) => acc+=el/2,0);
  // } else 
  // if (lenSorted < 3 ) {
  //     response = sortedMat[0];
  //     return response;
  // } else
   if (lenSorted % 2 == 0) {
      midPosition = lenSorted/2;
      midPartner = midPosition-1;
      console.log(midPartner, midPosition)
      response=((sortedMat[midPartner] + sortedMat[midPosition])/2);
      return response.toFixed(5);
  } else {
      midPosition = Math.floor(lenSorted/2);
      console.log(midPartner, midPosition)

      response = (sortedMat[midPosition-1]+ sortedMat[midPosition])/2;
      return response.toFixed(5);
  } 
};



let arr1 = [27,31,17,10,6,2];
let arr2 = [57,37,34,64,78,96];

console.log(findMedianSortedArrays(arr1,arr2))
arr1 = [1,2];
arr2 = [3,4];

console.log(findMedianSortedArrays(arr1,arr2))
arr1 = [2,3];
arr2 = [];

console.log(findMedianSortedArrays(arr1,arr2))

arr1 = [1,2];
arr2 = [1];

console.log(findMedianSortedArrays(arr1,arr2))