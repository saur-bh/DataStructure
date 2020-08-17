/*
given two sorted array - perform merge sort 

 */
function mergeSort(arr1,arr2){
 // check for empty array 
  if(arr1.length==0){
      console.log(arr2);
  }
 
  if(arr2.length==0){
    console.log(arr1);

}

if(arr1.length==0 && arr2.length==0){
    console.log([]);
}

//counter for both array
var i = 0;
var j = 0;

var outArr =[] ;

//keep pushing till end of array of one is not met.
while(i<arr1.length && j<arr2.length){

    if(arr1[i]<arr2[j]){
        outArr.push(arr1[i]);
        i++;
    }else{
        outArr.push(arr2[j]);
        j++;
    }
}

 // check for any leftout 
 console.log(i,j);
 while(i<arr1.length){

    outArr.push(arr1[i]);
    i++;
 }

 while(j<arr2.length){

    outArr.push(arr2[j]);
    j++;
 }

 console.log(outArr);
}

mergeSort([],[]);