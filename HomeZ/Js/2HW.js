/* Задание 1 */
/* Запросите у пользователя число с помощью окна prompt. 
Проверьте, является ли введенное пользователем значение числом или нет. 
Используйте функцию проверки isNaN(). */
    /*let  a=prompt ("Введите число a");
    if (isNaN(a)==true)
    alert(`Вы ввели не числовое значение: ${a}`);
    else
    alert(`Вы ввели  число: ${a}`); */
/*-------------------------------------------------------------------------------------*/ 
/* Задание 2 */
/* Дано число. Проверьте, отрицательное оно, положительное или ноль. 
Выведите об этом информацию в консоль в формате «Введенное число {ЧИСЛО} отрицательно» 
или «Введенное число {ЧИСЛО} положительное», 
где {ЧИСЛО} – выводится значение пользователя, например, 
«Введенное число 5 положительное». Не забудьте проверить ноль. */
/*let  a=prompt ("Введите число a");
if (isNaN(a)==true)
    alert(`Вы ввели не числовое значение: ${a}`);
else
{
    if (a<0)
        console.log(`Введенное число ${a} отрицательно`);
        if (a>0)
        console.log(`Введенное число ${a} положительно`);
        if (a==0)
        console.log(`Вы ввели ${a}`);
}*/
/*-------------------------------------------------------------------------------------*/ 
/* Задание 3 */   
/*Дано число. Проверьте, четное оно или нет. 
Выведите информацию в консоль по аналогии с предыдущим заданием.*/
/* let  a=prompt ("Введите число a");
if (isNaN(a)==true)
    alert(`Вы ввели не числовое значение: ${a}`);
else
{
    if (a==0)
    console.log(`Вы ввели ${a}`);
        else
         { if (a%2==0)
          console.log(`Введенное число ${a} четное`);
          else
          console.log(`Введенное число ${a} не четное`);
   }
} */
/*-------------------------------------------------------------------------------------*/ 
/* Задание 4 */   
/* Даны два целых числа. 
Проверьте, что первое число без остатка делится на второе. 
Выведите информацию в консоль по аналогии с предыдущим заданием..*/
/* let  b=prompt ("Введите число b");
let  c=prompt ("Введите число c");
if ((isNaN(b)==true) || (isNaN(c)==true))
    alert(`Вы ввели не числовое значение: ${b},  ${c}`);
else
{
    if (c==0)
    console.log(`Вы ввели ${c}, на 0 делить нельзя`);
        else
         { if (b%c==0)
          console.log(`Число ${b} без остатка делится на ${c}`);
          else
          console.log(`Число ${b} делится на ${c} с остатком`);
   }
} */
/*-------------------------------------------------------------------------------------*/ 
/* Задание 5 */   
/* Запросите у пользователя три числа – коэффициенты квадратного уравнения. 
Сообщите пользователю, имеет ли такое уравнение решение и сколько.*/
/*let  a=prompt ("Введите коэффициент а");
let  b=prompt ("Введите коэффициент b");
let  c=prompt ("Введите коэффициент c");
let  d;
if ((isNaN(a)==true) || (isNaN(b)==true) || (isNaN(c)==true))
    alert(`Вы ввели не числовое значение: ${a},  ${b},  ${c}`);
else
{ d=b*b-4*a*c;
    if (d==0)
    console.log(`Уравнение имеет решение с одним корнем`);
        else
         { if (d>0)
          console.log(`Уравнение имеет решение с двумя вещественными корнями`);
          else
          console.log(`Уравнение имеет решение с двумя комплексными корнями`);
   }
}*/
/*-------------------------------------------------------------------------------------*/ 
/* Задание 6 */   
/* 6.	Запросите у пользователя два угла в градусах. 
Проверьте, может ли существовать такой треугольник. 
Если да, сообщите его тип – прямоугольный, остроугольный или тупоугольный*/
/*let  cornerA=prompt ("Введите угол а (в градусах)");
let  cornerB=prompt ("Введите угол b в градусах");
let  cornerC;
if ((isNaN(cornerA)==true) || (isNaN(cornerB)==true))
    alert(`Вы ввели не числовое значение: ${cornerA},  ${cornerB}`);
else
{  alert(`Вы ввели значения углов: ${cornerA},  ${cornerB}`);
    if (((+cornerA + +cornerB)>=180) || ((cornerA==0) || (cornerB==0)))
    console.log(`C такими значениями углов треугольников не бывает. Сумма двух углов треугольника должна быть меньше 180 градусов  и не должно быть углов с нулевым значением`);
    else
    {
     cornerC=180-cornerA-cornerB;
        if ((cornerA==90) || (cornerB==90) || (cornerC==90))
        console.log(`Треугольник является прямоугольным`);
        else
         { if ((cornerA<90) && (cornerB<90) && (cornerC<90))
          console.log(`Треугольник является остроугольным`);
          else
          console.log(`Треугольник является тупоугольным`);
        }
    }
}*/
/*-------------------------------------------------------------------------------------*/ 
/* Задание 7  */
/*	Даны три целых числа. Проверьте, могут ли они быть длинами сторон треугольника. 
Выведите соответствующее сообщение. 
Если стороны не могут быть длинами сторон треугольника, сообщите пользователю почему.*/
/*let  a=prompt ("Введите сторону треугольника a");
let  b=prompt ("Введите сторону треугольника b");
let  c=prompt ("Введите сторону треугольника c");
if ((isNaN(a)==true) || (isNaN(b)==true) || (isNaN(c)==true))
    alert(`Вы ввели не числовое значение: ${a},  ${b},  ${c}`);
else
{  alert(`Вы ввели  значения: a= ${a},  b=${b},  c=${c}`);
    if (a>(+b + +c) || (b>(+a + +c)) || (c>=(+a + +b)))
    console.log(`Введенные значения не могут быть длинами сторон треугольника, т.к. сумма длин двух сторон не должна превышать длину третьей стороны`);
        else
         console.log(`Введенные значения являются сторонами треугольника`);
}*/
/*-------------------------------------------------------------------------------------*/ 
/* Задание 8  */
/*	Запросите у пользователя год. Определите, 
является ли введенный год високосным. 
Признаки високосного года найдите в интернете.*/
/* В григорианском календаре високосный год происходит каждые 4 года,
 с некоторыми исключениями. 
 Точнее, каждый год, который делится на 4 без остатка, 
 является високосным годом, за исключением тех годов, которые делятся на 100 без остатка. 
Однако, если год делится на 400 без остатка, то он все равно считается високосным.*/
/* let  year=prompt ("Введите год");
if (isNaN(year)==true) 
    alert(`Вы ввели не числовое значение: ${year}`);
else
{  console.log(`Вы ввели год: ${year}`);
    if (((year%4==0) && (year%100!=0) ) || (year%400==0))
    console.log(`Год является високосным`);
        else
         console.log(`Год не является високосным`);
} */ 
/*-------------------------------------------------------------------------------------*/ 
/* Задание 9.	
Даны четыре вещественных числа. Найдите пару с максимальной суммой.*/
/*
let  Number1=prompt ("Введите число 1");
let  Number2=prompt ("Введите число 2");
let  Number3=prompt ("Введите число 3");
let  Number4=prompt ("Введите число 4");
let  Number12, Number13, Number14, Number23, Number24, Number34;
if ((isNaN(Number1)==true) || (isNaN(Number2)==true) || (isNaN(Number3)==true) || (isNaN(Number4)==true))
    alert(`Вы ввели не числовое значение: ${Number1},  ${Number2},  ${Number3}, ${Number4}. Для повторного запуска программы обновите страницу`);
else
{ MetodNumber=prompt ("Введите номер метода для решения задачи: 1 или 2");
    if ((MetodNumber<0) && (MetodNumber>2))
    console.log(`Вы ввели не верный номер метода, попробуйте еще раз`);
        else
         {  Number12=+Number1 + +Number2;
            Number13=+Number1 + +Number2;
            Number14=+Number1 + +Number4;
            Number23=+Number2 + +Number3;
            Number24=+Number2 + +Number4;
            Number34=+Number3 + +Number4;
            console.log(`Вы ввели число 1: ${Number1}; число 2: ${Number2}; число 3: ${Number3}; число 4: ${Number4}`);
            switch (MetodNumber) {
            case '1' : 
            {   if ((Number12>Number13) && (Number12>Number14) && (Number12>Number23) && (Number12>Number24) && (Number12>Number34))
                console.log(`Сумма чисел ${Number1} и ${Number2} является наибольшей, сумма= ${Number12}`);
                if ((Number13>Number12) && (Number13>Number14) && (Number13>Number23) && (Number13>Number24) && (Number13>Number34))
                console.log(`Сумма чисел ${Number1} и ${Number3} является наибольшей, сумма= ${Number13}`);
                if ((Number14>Number12) && (Number14>Number13) && (Number14>Number23) && (Number14>Number24) && (Number14>Number34))
                console.log(`Сумма чисел ${Number1} и ${Number4} является наибольшей, сумма= ${Number14}`);
                if ((Number23>Number12) && (Number23>Number13) && (Number23>Number14) && (Number23>Number24) && (Number23>Number34))
                console.log(`Сумма чисел ${Number2} и ${Number3} является наибольшей, сумма= ${Number23}`);
                if ((Number24>Number12) && (Number24>Number13) && (Number24>Number14) && (Number24>Number23) && (Number24>Number34))
                console.log(`Сумма чисел ${Number2} и ${Number4} является наибольшей, сумма= ${Number24}`);
                if ((Number34>Number12) && (Number34>Number13) && (Number34>Number14) && (Number34>Number23) && (Number34>Number24))
                console.log(`Сумма чисел ${Number3} и ${Number4} является наибольшей, сумма= ${Number34}`);
             } break;

            case '2' : 
                {max=Math.max(Number12, Number13,Number14,Number23,Number24,Number34);
                console.log(`Максимальная сумма двух чисел: ${max}`);
                if (max==Number13) 
                console.log(`Сумма чисел ${Number1} и ${Number3} является наибольшей`);
                if (max==Number14) 
                console.log(`Сумма чисел ${Number1} и ${Number4} является наибольшей`);
                if (max==Number23) 
                console.log(`Сумма чисел ${Number2} и ${Number3} является наибольшей`);
                if (max==Number24) 
                console.log(`Сумма чисел ${Number2} и ${Number4} является наибольшей`);
                if (max==Number34) 
                console.log(`Сумма чисел ${Number3} и ${Number4} является наибольшей`);
                if (max==Number12) 
                console.log(`Сумма чисел ${Number1} и ${Number2} является наибольшей`);
                }
        }
 };
} */
/*-------------------------------------------------------------------------------------*/ 
/* Задание 10.	
9.	Создайте программу-тренажер, позволяющую вычислить площади основных геометрических
 фигур – круга, квадрата, параллелограмма, ромба. 
 Используйте конструкцию switch для организации меню и выбора действия. 
 Необходимые для вычислений данные должны запрашиваться после выбора действия пользователем. */
let  MetodNumber;
MetodNumber=prompt ("Введите номер фигуры, площадь которой необходимо вычислить: 1 - круг; 2 - квадрат; 3 - прямоугольник; 4 - ромб.");
    if ((MetodNumber<=0) || (MetodNumber>4) || (isNaN(MetodNumber)==true))
    console.log(`Вы ввели не верный номер фигуры, попробуйте еще раз`);
else
{ switch (MetodNumber){
    case '1' : {
        alert("Вы выбрали вычисление площади круга.");
        let r=prompt ("Введите радиус круга");
        S=3.14*r**2;
        console.log(`Площадь круга с радиусом ${r} равна ${S}`);
        break; }
    case '2' : {
        alert("Вы выбрали вычисление площади квадрата.");
        let a=prompt ("Введите сторону квадрата");
        S=a**2;
        console.log(`Площадь квадрата со стороной ${a} равна ${S}`);
        break; }
    case '3' : {
        alert("Вы выбрали вычисление площади прямоугольника.");
        let c=prompt ("Введите значение первой стороны прямоугольника");
        let d=prompt ("Введите значение второй стороны прямоугольника");
        S=c*d;
        console.log(`Площадь прямоугольника со сторонами ${c} и ${d} равна ${S}`);
        break; }
    case '4' : {
        alert("Вы выбрали вычисление площади ромба.");
        let e=prompt ("Введите значение стороны ромба");
        let h=prompt ("Введите значение высоты ромба");
        S=e*h;
        console.log(`Площадь прямоугольника со стороной ${e} и высотой ${h} равна ${S}`);
        break; }
     }
    }