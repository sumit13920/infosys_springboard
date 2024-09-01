let firstName = "kevin";
let lastName= "Patrick";

// console.log("Name: "+firstName+" "+lastName+"\n Email:"+firstName+"_"+lastName+"@abc.com");

//Using Literals:
console.log(`Name:${firstName} ${lastName} \nEmail: ${firstName}_${lastName}@abc.com`);

/* 
Boolean 

When a variable is used to store a logical value that can always be true or false then, primitive data type Boolean is used. Thus, Boolean is a data type which represents only two values: true and false. 

Values such as 100, -5, “Cat”, 10<20, 1, 10*20+30, etc. evaluates to true whereas 0, “”, NaN, undefined, null, etc. evaluates to false.   

*/

/*
Undefined 

When the variable is used to store "no value", primitive data type undefined is used. 

Any variable that has not been assigned a value has the value undefined and such variable is of type undefined. The undefined value represents "no value".
 
*/
// Example 1:
//let custName;//here value and the data type are undefined

//Example 2:
let custName = "John"; //here value is John and the data type is String
custName = undefined; //here value and the data type are undefined

