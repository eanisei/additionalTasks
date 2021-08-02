let num = 266219 ;


console.log(num.toString().split(""));




function multiplyEachDigit(num) {
    numString = num.toString();
    let sum = 1;
    for (var i = 0; i < numString.length; i++) {
      sum = sum * numString[i];
    }

    console.log(sum);

    return sum;
  };

// Нужен ли был return, чтобы дальше использовать результат из функции ?
// Значит функцию как ниже, я могу не вызывать ?

//   multiplyEachDigit(num);



let toPower3 = multiplyEachDigit(num) ** 3;
console.log(toPower3.toString().substring(0, 2));




  

// Правильно ли было пытаться сделать циклом (потратил много времени на это..)

// function toPower(num) {
//     let result = multiplyEachDigit();
//     let power = 3;
//     for (let i = 0; i < power; i++) {
//         result *= result;
//     }
//     console.log(result);
// }



// хотел бы все проработь варианты, чтобы знать, что неправильно. Хотя варианты ниже кажуться не очень важными. Хочу их обсудить тоже.




    // for (let num = 0; i < 3; i++) {
    //   result *= num;
    // }

    // console.log(num);




//   function toPower(multiplyEachDigit) {
//     for (var i = 0; i < 3; i++) {
//         result *= result;
//   }
//   console.log(num);
// }

// toPower(multiplyEachDigit);
