/*let x=+prompt("Number!=0?");
if (x==0 || isNaN(x)){
    console.log("Error");}
else
{
 let   y=(x+1)/x;
console.log(y)
}
//console.log(y)*/
/*let userName=prompt("Давай познакомимся");
if (!Boolean(userName))
{console.log("У вас нет имени? Буду звать вас Иван");
userName='Иван';
}
console.log(`Привет, ${userName}, рад с тобой познакомиться`);*/

/* let userName=prompt("Давай познакомимся");
userName=!Boolean(userName)?"Ivan":userName;
console.log(`Привет, ${userName}, рад с тобой познакомиться`); */

/* let  S=prompt ("Введите число от 1 до 3")
 switch (S){
 case '1' : alert("Маловато");break;
 case '2' : alert("В самый раз");break;
 case '3' : alert("Многовато");break;
 default : alert("ндааа");break;
 } */

/* let prisePriz, sumMoney, choice;
let win=false;
prisePriz=Math.round(Math.random()*10000);
sumMoney=Math.round(Math.random()*10000);
choice=prompt("1- приз, 2- деньги");
console.log(`Приз стоит  ${prisePriz}, денег положили ${sumMoney}`);
win
if (choice==1)
{
    if (prisePriz>=sumMoney) win=true;
}
else if (choice==2) {
    if (prisePriz<sumMoney) win=true;
}
else if(choice!=1 && choice!=2)
console.log("Вы удаляетесь из игры за несоблюдение правил");
if (win) console.log('Выиграл');
else console.log('Проиграл'); */
/*
let  otvet=prompt ("Введите количество правильных ответов от 1 до 10")
if (otvet>=0 && otvet<=10)
{ switch (otvet){
 case '5' : alert("Удовлетворительно, тест сдан, но оооочень слабо!");break;
 case '6' : alert("Удовлетворительно, тест сдан, но оооочень слабо!");break;
 case '7' : alert("Удовлетворительно, тест сдан, но оооочень слабо!");break;
  case '8' : alert("Хороший результат! Тест сдан.");break;
  case '9' : alert("Хороший результат! Тест сдан.");break;
  case '10' : alert("Гениально! Тест сдан на отлично!");break;
 default : alert("Ужасно, тест не сдан");break;}
}
else alert("Вы ввели не верное значение!"); */

let  a=prompt ("Введите первую сторону четырехугольника a");
let  b=prompt ("Введите вторую сторону четырехугольника b");
let  c=prompt ("Введите третью сторону четырехугольника c");
let  d=prompt ("Введите четвертую сторону четырехугольника d");
if ((a==c && b==d) || (a==b && c==d) || (a==d && b==c))
alert("Прямоугольник - паралеллограмм!!!")
else alert("Прямоугольник - не паралеллограмм!!!!");