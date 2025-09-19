const userEmail = []; //"prajwal@123"; // if we write it will consider true value or if we dont write it will return false.
if (userEmail) {
  console.log("got usr email...");
} else {
  console.log("dont have user email..");
}

// falsy values
//false , 0 , -0, BigInt 0n, "", null, undefined, NaN

//truty values
// "0" , 'false' , " " , [] , {} , function(){} ,

if (userEmail.length === 0) {
  console.log("array is empty ");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("obejct is empty");
}

// nullish coalescing operator (??) : null undefined

let val;
//val = 10 ?? 20; // print 20
//val = null ?? 50;// print 50
//val = undefined ?? 100 // print 100
//val = null ?? undefined ?? 55 // print 55
val = null ?? 500 ?? 1000; // print 500

console.log(val);


//terniary operator

// condition ? true : false
 const iceTeaprice = 100 
 iceTeaprice >= 80 ? console.log("less than 80") : console.log("more than ");
 
 