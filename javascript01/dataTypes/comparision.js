/* Talking about comparison and boolean operations on BigInt, it works fine.
 */

//Example:
alert(8n > 2n); // true

alert(4n > 2); // true

/* Even though numbers and BigINts belong to different types, they can be equal ==, but not strictly equal ===. */

//Example:
alert( 5 == 5n );// true

alert( 5 === 5n ); // false

/* When inside if or other boolean operations, BigInts behave like numbers. */

//Example:
if(0n) {
    //never executes 
}
/* BigInt 0n is falsy,other values are considered to be truthy. */

/* Boolean operators, such as ||, && and others also work perfectly with Bigints similar to numbers. */
//Example:
alert(1n || 2);// 1, here 1n is considered truthy

alert(0n || 2);// 2, here 0n is considered falsy
