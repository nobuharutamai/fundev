let str: string = ""
for( let j = 1; j <= 100; j++){
  if( j > 1){
    str += " "
  }
  str += fizzbuzz(j)
}
console.log(str)

function fizzbuzz(i:number):string{
  if( i % 3 === 0 && i % 5 === 0){
    return "FizzBuzz";
  }
  else if( i % 3 === 0 ){
    return "Fizz";
  }
  else if( i % 5 === 0 ){
    return "Buzz";
  }
  else{
    return i.toString();
  }
}