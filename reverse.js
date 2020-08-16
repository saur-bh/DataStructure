function reverseStr(str){
    //if the str length is less or is not string or no str
    if(str.length<2 || typeof str !="string"|| !str){
        return str;
    }
    //first convert to array from string 
    var strArr=[];
    for(var i =str.length;i>=0 ; i--){

        strArr.push(str.charAt(i));
    }

    return strArr.join(""); // this will return string
    
}

//Other way 
 function otherWayReverse(str){
    //get one outStr
    oytStr="";
    for( var i = str.length; i>=0 ; i--){

        oytStr += str.charAt(i);
    }
    
    return oytStr;
 }

 //other way 
 function getReverse(str){

    return str.split('').reverse().join('');
 }


 str = "saurabh is good boy!";

 console.log(reverseStr(str));  // with use of array

 console.log(otherWayReverse(str));

 console.log(getReverse(str));
