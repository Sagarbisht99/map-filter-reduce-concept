// hoisting //

// var a;

// console.log(a);

//  a = 12; 

// //-------------------------------------------------------------------------------------------------------

// const array = [1,2,3,4,5,6,7,8,9,10];
// const newArray = [];

// array.forEach((num) => {

//   if(num > 5){
//    return newArray.push(num)

//   }
// })

// console.log(newArray);

// //-------------------------------------------------------------------------------------------------------


// filter //


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];


//   const newBooks = books.filter((bks) => {

//     return bks.publish > 2000 && bks.edition > 2015

//   })

//   console.log(newBooks);




// //----------------------------------------------------------------------------------------------------


// map //

// const array = [1,2,3,4,5];

// let result = array.map((num) => {

//     return num * 10;

// }).map((num) => {

//     return num + 1;

// }).filter((num) => {

//     return num > 20

// })

// console.log(result);



// //------------------------------------------------------------------------------------------


// reduce //


// let array = [1,2,3,4,5,6,7,8,9,10];

// let result = array.reduce((acc,curr) => {
 
//     return acc + curr

// } , 0)

// console.log(result);


// //----------------------------------------------------------------------------------------------------


// let array = [1,2,3,4,5];

// let result = array.filter((num) => num%2 ==0 ).map((num) => num*2)
// console.log(result);

// let newArray = [];

// array.forEach((num) => {

//     if(num % 2 == 0){
//      newArray.push(num*2)
//     }
// })

// console.log(newArray);


// let user = prompt('give me the number till you add');

// var sum =0;

//     for(let i=0; i<=user; i++){
//         val+=i
//     }


// console.log(`sum is ${sum}`);

// //-------------------------------------------------------------------------------------------------------------------


// let shoppingCart = [
//     {
//         course : "javascript ",
//         price : 2999
//     } ,
//       {
//         course : "frontend dev",
//         price : 4999
//     } , 
//      {
//         course : "data science course",
//         price : 12999
//     } ,  
//     {
//         course : "app dev course",
//         price : 7999
//     } 
// ]

// let sum = shoppingCart.reduce((acc , curr) => {

//     return acc + curr.price


// } , 0)

// console.log(`your cart total is ${sum}`);






































 