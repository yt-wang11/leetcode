function binarySearch(target,arr) {
  var start = 0;
  var end = arr.length-1;
  while (start<=end){
      var mid = parseInt(start+(end-start)/2);
      if(target==arr[mid]){
          return mid;
      }else if(target>arr[mid]){
          start = mid+1;
      }else{
          end = mid-1;
      }
  }
  return -1;
}