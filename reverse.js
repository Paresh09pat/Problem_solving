// Reverse a Number.
// Write a program which takes a numebr N as input from the user and You need to reverse the number.

var Reverse_Number = (N) => 
{
  N = N.toString()
    let newNum = 0;
    let rem = 0;
    for (let i of N) {
      rem = N % 10;
      N = Math.floor(N / 10);
      newNum = newNum * 10 + rem;
    }
     return(newNum) ;

};