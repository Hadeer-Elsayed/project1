 Window.alert("hello")
console.log("hadeer")
// ex1
// var number=window.prompt('enter anumber');
// window.alert(number);

// ex2
// var number=window.prompt('enter anumber');
// if(number%3==0)
// {
//     if(number % 4==0){
//         window.alert("yes");
//     }
// }
// else
// {
//     window.alert("No");
// }

// ex3
// var number1= Number( window.prompt("enter the first number"));
// var number2= Number(window.prompt("enter the second number"));
// if(number1 > number2)
// {
//     window.alert(number1);
// }
// else 
// {
//     window.alert(number2);
// }

// ex4
// var number=Number(window.prompt("enter the number"));
// if(number>0)
// {
//     window.alert("positive");
// }
// else if(number<0)
// {
//     window.alert("nagative");
// }
// else
// {
//     window.alert("not positive or negative");
// }

// ex5
// var number1= Number( window.prompt("enter the first number"));
// var number2= Number(window.prompt("enter the second number"));
// var number3= Number(window.prompt("enter the third number"));
// if(number1>number2)
// {
//     if(number1>number3)
//     {
//         if(number2>number3)
//         {
//             window.alert("Max numer=" (number1 )/n ("Min number=" )(number3));

//         }
//         else 
//         {
//             window.alert("Max numer="(number1 )/n ("Min number=") (number2));
//         }
//     }
//     else
//     {
//         if(number2>number1)
//         {
//             window.alert("Max numer=" (number3 )/n ("Min number=" )(number1));
//         }
//         else
//         {
//             window.alert("Max numer=" + number3)  ;
//             window.alert(" Min number=" + number2 );
//         }
//     }
// }
// else
//     {
//         if(number2>number3)
//         {
//             if(number1>number3)
//             {
//                 window.alert("Max numer=" +number2) ;
//                 window.alert(" Min number=" + number3 );
//             }
//             else 
//             {
//                 window.alert("Max numer=" +number2) 
//                 window.alert(" Min number=" + number1);
//             }
//         }
//         else 
//         {
//             if(number2>number1)
//         {
           
//             window.alert("Max numer=" +number3) ;
//             window.alert(" Min number=" + number1);
//         }
//             else 
//         {
//             window.alert("Max numer=" +number3) 
//             window.alert(" Min number=" + number2);
//         }
//         }
//     }


// ex6
//  var number=Number(window.prompt("enter the number"));
// if( number%2==0)
// {
//     window.alert("even");
// }
// else
// {
//     window.alert("odd");
// }

// ex8
//  var letter=window.prompt("enter the letter");
//  if(letter=="e" || letter=="o" ||letter== "a" ||letter=="u"||letter=="i")
//  {
//      window.alert("vowel")
//  }
//  else
//  {
//      window.alert("constant");
//  } 
// ex8
// var letter=window.prompt("enter the letter");
//  if(letter=="e")
//  {
//      window.alert("vowel");
//  }
//  else if(letter=="a")
//  {
//     window.alert("vowel");
//  }
//  else if(letter=="o")
//  {
//     window.alert("vowel");
//  }
//  else if(letter=="u")
//  {
//     window.alert("vowel");
//  }
//  else if(letter=="i")
//  {
//     window.alert("vowel");
//  }
//  else
//  {
//      window.alert("constant");
//  } 
// ex9
// var number= Number(window.prompt("enter the number"));
// var output = "";
// for( var i=1; i<=number; i++)
// {
//      output += i + " ";    
// }
// window.alert(output)

//  ex10
// var number= Number(window.prompt("enter the number"));
// var output=""
// for( var i=2; i<=12; i++)
// {
//     output+= (number*i)+" ";
// }
// window.alert(output)
// ex11
// var number= Number(window.prompt("enter the number"));
//  var output=""
//     for( var i=2; i<=number; i+=2)
//     {
//         output+=i+" "
//     }
//     window.alert(output) 

//  ex12
// function getPower(x,y)
// {   var result=x;
//     for(var i=y;i>1;i--)
//     {
//          result=result*x
//     }
//     window.alert(result)
// }
//   var number1=Number(window.prompt("enter the first number"));
//   var number2=Number(window.prompt("enter the second number"));
//  getPower(number1,number2)


// ex12
// function marks(x,y,z,m,n)
// {
//     var totalMarks=x+y+z+m+n;
//     var average=(x+y+z+m+n)/5;
//     var percentage=((x+y+z+m+n)/500)*100;
//      console.log("Total marks:"+totalMarks + "/n");
//      console.log("Average:"+average);
//      console.log("percentage:"+percentage);

// }
// var subject1=Number(window.prompt("enter the degree of the first subject"));
// var subject2=Number(window.prompt("enter the degree of the second subject"));
// var subject3=Number(window.prompt("enter the degree of the third subject"));
// var subject4=Number(window.prompt("enter the degree of the fourth subject"));
// var subject5=Number(window.prompt("enter the degree of the fifth subject"));

// marks(subject1,subject2,subject3,subject4,subject5);



 


// // ex12
// function marks(x,y,z,m,n)
// {
//     var totalMarks=x+y+z+m+n;
//     var average=(x+y+z+m+n)/5;
//     var percentage=((x+y+z+m+n)/500)*100;
//      alert(
//          `
//         Total marks:${totalMarks}
//         Average:${+average}
//         percentage:${percentage}
//      `);
//     //  alert("Average:"average);
//     //  alert("percentage:"+percentage);

// }
// var subject1=Number(window.prompt("enter the degree of the first subject"));
// var subject2=Number(window.prompt("enter the degree of the second subject"));
// var subject3=Number(window.prompt("enter the degree of the third subject"));
// var subject4=Number(window.prompt("enter the degree of the fourth subject"));
// var subject5=Number(window.prompt("enter the degree of the fifth subject"));

// marks(subject1,subject2,subject3,subject4,subject5);




// ex13
// var month=Number(window.prompt('Enter the number of the momth'));
// if(month==1 || month==3 ||month==5 || month==7|| month==8 || month==10 || month==12 ){
//     window.alert("Days in Month:31");
// }
// else if(month==2){
//     window.alert("Days in Month:28");
// }
// else
// {
//     window.alert("Days in Month:30");
// }



// ex14


// function getdegree(x,y,z,m,n)
// {
//    toalResult=((x+y+z+m+n)/500)*100;
//    if (toalResult>=90)
//    {
//        window.alert(`percentage:${toalResult}
// Grad A`);
//    }
//   else if (toalResult>=80)
//    {
//        window.alert(`percentage:${toalResult}
// Grad B`);
//    }
//    else if (toalResult>=70)
//    {
//        window.alert(`percentage:${toalResult}
// Grad C`);
//    }
//    else if (toalResult>=60)
//    {
//        window.alert(`percentage:${toalResult}
// Grad D`);
//    }
//    else if (toalResult>=40)
//    {
//        window.alert(`percentage:${toalResult}
// Grad E`);
//    }
//    else
//    {
//     window.alert(`percentage:${toalResult}
//     Grad F`);
       
//    }
// }
// var physics=Number(window.prompt('Enter the Marks of physics'));
// var chemistry=Number(window.prompt('Enter the Marks of chemistry'));
// var biology=Number(window.prompt('Enter the Marks of biology'));
// var mathematics=Number(window.prompt('Enter the Marks of mathematics'));
// var computer=Number(window.prompt('Enter the Marks of computer'));
// getdegree(physics,chemistry,biology,mathematics,computer);


// ex15
// var month=Number(window.prompt('Enter the number of the momth'));
// switch(month)
// {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         window.alert("Days in Month:31");
//         break;
//     case 2:
//         window.alert("Days in Month:28 or 29");
//         break;
//     default:
//         window.alert("Days in Month:30");


// }

// ex16
// var letter=window.prompt("Enter the letter");
// switch(letter)
// {
//     case"e":
//     case"o":
//     case"a":
//     case"u":
//     case"i":
//     window.alert("vowel");
//     break;
//     default:
//         window.alert("constant");

// }

// ex17
// 
// ex18
// var number=Number(window.prompt("Enter the number"));
// switch(number%2==0)
// {
//     case true:
//     window.alert("even");
//     break;
//     default:
//         window.alert("odd");
// }

// ex19
// var number=Number(window.prompt("Enter the number"));
// switch(true)
// {
//     case number>0:
//         window.alert("positive");
//         break;
//     case number<0:
//         window.alert("negative");
//         break;
//     default:
//         window.alert("Zero")

// }


// ex20
// var number1=Number(window.prompt("enter the first number"));
// var number2=Number(window.prompt("enter the second number"));
// var operator=window.prompt("Enter operator(+ or - or * or /)")
// switch(operator)
// {
//     case "+":
//         window.alert(number1+number2);
//         break;
//     case "-":
//         window.alert(number1-number2);
//         break;
//     case "*":
//         window.alert(number1*number2);
//         break;
//      case "/":
//             window.alert(number1/number2);
//             break;
    
// }