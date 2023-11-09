let numberOne = Number(prompt("Type the first number: "))
let numberTwo = Number(prompt("Type the second number: "))


function calc(n1=0, n2=0) {
  alert(`You typed the numbers ${n1} and ${n2}.
  The sum between ${n1} and ${n2} equals ${n1+n2} 
  ${n1} minus ${n2} equals ${n1-n2} 
  The multiplication between ${n1} and ${n2} equals ${n1*n2} 
  ${n1} divided by ${n2} equals ${(n1/n2).toFixed(2)} 
  The quocient between ${n1} and ${n2} equals ${n1%n2}`)
  if ((n1+n2)%2 == 0) {
    alert(`The result of the sum between ${n1} and ${n2} is even`)
  } else {
    alert(`The result of the sum between ${n1} and ${n2} is odd`)
  }
  if (n1 == n2) {
    alert(`The numbers that you typed are the same!`)
  } else {
    alert(`The numbers that you typed are not the same!`)
  } 
}

alert(calc(numberOne, numberTwo))