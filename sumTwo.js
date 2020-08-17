//to sum two indices and get exact target
function twoSum(arr,target){

    for(var i=0;i<arr.length;i++){
        for( var j= 0;j<arr.length;j++){
            if(arr[i]+arr[j]==target && i!=j){
                return [i,j];
            }
        }
    }
}

console.log(twoSum([1,2,3,4,89,4],4
    ));