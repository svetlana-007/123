/*Задание 1 */
//Написать функцию, которая принимает пол человека ('М','Ж') 
//в виде строки, результат функции возвращает строку 
//"Ваш пол мужской" (или женский) или же "Ваш пол не определён"
/* let pol, str;
function PolDefine(pol1) {
    let str1;
    if (pol1=="М")
       str1="Пол мужской";
         else { 
       if (pol1=="Ж") 
        str1='Пол женский'
        else str1='Пол не определен';}
           return str1;
    }
            
pol=prompt('Введите пол человека (М или Ж)');   
str=PolDefine(pol);
console.log(str); */

/*Задание 2 */
// Написать функцию isDec(), которая возвращает true, 
// если число принадлежит диапазону [0,10], и false в противном случае
/* let str, number;
    function isDec(num) {
     if (num>=0 && num<=10)
       return true
         else 
         return false;
    }
            
number=prompt("Введите число");
if (isNaN(number) || !Boolean(number)) 
    console.log('Вы ввели не числовое значение')
else {
str=isDec(number);
console.log(str);
} *//*Задание 3 */
// Написать функцию, которая принимает параметром число от 1 до 7, 
// а возвращает день недели на русском языке.
/* let dayNumber, str;
function weekDay(day1) {
    switch (day1){
        case '1' : 
            {alert("Понедельник");
            break;}
        case '2' : 
            {alert("Вторник");
            break;}
        case '3' : 
            {alert("Среда");
            break;}
        case '4' : 
            {alert("Четверг");
            break;}
        case '5' : 
            {alert("Пятница");
            break;}
        case '6' : 
            {alert("Суббота");
            break;}
        case '7' : 
            {alert("Воскресенье");
            break;}
       }
    } 

dayNumber=prompt("Введите номер дня недели");
if (isNaN(dayNumber) || !Boolean(dayNumber)) 
console.log('Вы ввели не числовое значение')
else { 
if (dayNumber>=1 && dayNumber<=7)
    {str=weekDay(dayNumber);
    console.log(str)}
    else console.log('Вы ввели не верный номер дня недели')
}
*/ 
/* -------------------------------------------------------------------------------
/*Задание 3 */
// Написать функцию, которая принимает параметром число от 1 до 7, 
// а возвращает день недели на русском языке.
/* let dayNumber, str;
    function weekDay(day1) {
            switch (day1){
                case '1' : 
                    {str="Понедельник";
                    break;}
                case '2' : 
                    {str="Вторник";
                    break;}
                case '3' : 
                    {str="Среда";
                    break;}
                case '4' : 
                    {str="Четверг";
                    break;}
                case '5' : 
                    {str="Пятница";
                    break;}
                case '6' : 
                    {str="Суббота";
                    break;}
                case '7' : 
                    {str="Воскресенье";
                    break;}
             } 
         return str;
    }
dayNumber=prompt("Введите номер дня недели");
if (isNaN(dayNumber) || !Boolean(dayNumber)) 
console.log('Вы ввели не числовое значение')
else { 
    if (dayNumber>=1 && dayNumber<=7)
        {str=weekDay(dayNumber);
        console.log(str)}
        else console.log('Вы ввели не верный номер дня недели')
        }
 */
//-------------------------------------------------------------------------------------------
/*Задание 4 */
// Написать функции поиска минимума и максимума из трех чисел. 
// Числа передаются в функции как параметры, 
// возвращается соответственно минимальное и максимальное значения
/* let x1, x2, x3;
function minimum(x11, x12, x13) {
    let min;
        if (x11<x12 && x11<x13)
        min=x11;
        if (x12<x11 && x12<x13)
        min=x12;
        if (x13<x11 && x13<x12)
        min=x13;
             return min;
}
function maximum(x21, x22, x23) {
    let max;
        if (x21>x22 && x21>x23)
        max=x21;
        if (x22>x21 && x22>x23)
        max=x22;
        if (x23>x21 && x23>x22)
        max=x23;
             return max;
}
x1=prompt("Введите первое число");
x2=prompt("Введите второе число");
x3=prompt("Введите третье число");
if (isNaN(x1) || !Boolean(x1) || isNaN(x2) || !Boolean(x2) || isNaN(x3) || !Boolean(x3) ) 
console.log('Вы ввели не числовое значение')
else { 
console.log(`Максимальное из трех чисел: ${maximum(x1,x2,x3)}`);
console.log(`Минимальное из трех чисел: ${minimum(x1,x2,x3)}`)
}
} */
// -----------------------------------------------------------------------------------
/* /*     /*Задание 5*/
// Создай функциональные выражения (function expression)
// принимает два параметра, в которых ожидаются имя и возраст пользователя, 
// возвращает сообщение, если пользователю меньше 18 лет, то: `${name}, вы еще очень молоды!`,
// если от 18 до 50 лет включительно, то: `${name}, добро пожаловать в личный кабинет!`, 
// если  старше 50 лет: `${name}, моё почтение!`, 
// в противном случае, если невозможно определить возраст по полученному значению, 
// вернуть сообщение: "Укажите корректные данные!" . 
// Далее строка, которую вернула функция выводится в консоль.
/* let say=function(name1, age1) {
    let textt;
    if (age1<18)
    textt=`${name1}, вы еще очень молоды!`;
    else {
        if (age1>=18 && age1<=50)
        textt=`${name1}, добро пожаловать в личный кабинет!`;
        else {
        if (age1>50)
            textt=`${name1}, моё почтение!`;
            else 
                textt=`Укажите корректные данные!`;
              }
        }
    return textt}
  let name=prompt('Ввведите имя');
  let age=prompt('Ввведите возраст');
  console.log(say(name,age));  */ 
//--------------------------------------------------------------------------------
/*   /*Задание 6*/
// принимает один параметр, проверяет и выводит в консоль его тип данных. 
/* let typeDate=function(n1) 
{
    let textt;
      if (!isNaN(n1))
        textt="number"
            else {
                if (Boolean(n1)) 
                    textt="Boolean" 
                        else textt="string"}
       return textt;
}
  let n=prompt('Ввведите параметр');
  console.log(`Тип данных введенного параметра ${typeDate(n)}`);
  console.log(typeof n);
*/
  /*Задание 7*/
// Напишите математический тренажер. 
// Числа для операций генерируйте случайным образом в стрелочных функциях. 
// Вывод примера и запрос результата организуйте с помощью окна Prompt. 
// При загрузке страницы должно открываться окно со случайно сгенерированным 
// примером на сложение и запрос ответа. 
// Проверьте ответ пользователя на правильность. 
let summ;
let rand1=(a)=>Math.round(Math.random()*(a)+23/a);
let rand2=(b)=>Math.round(Math.random()*(b)+3/b);
let x1=rand1(Math.round(Math.random()*100));
let x2=rand2(Math.round(Math.random()*100));
summ=prompt(`Вычислите сумму двух чисел: ${x1} и ${x2} = `)        
if (summ==x1+x2) 
console.log('Результат верный')
    else
    console.log(`Результат не верный, сумма равна: ${x1+x2}`)
