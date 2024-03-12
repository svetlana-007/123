//let a;
//let b;
//a=(prompt("введите число"));
//b=prompt("введите число");
//console.log(`Summa ${++a + b++}`);
//console.log(`a=${a}, b=${b}`);
//a=-1;
//b=0;
//console.log(a/b);
//alert(parseInt("123jhjhjj"));
//s=h*a*a
let a, h, S;
a=(prompt("введите cторону a"));
h=(prompt("введите высотуе h"));
S=h*a*a;
console.log(`Площадь прямоугольной пирамиды с высотой ${h} и стороной основания ${a} равна ${S}`);
//console.log(`a=${a}, b=${b}`);
//
//let c=5;
//let d='5';
//console.log(c==d);
//console.log(c===d);    
let c=20;
let d=30;
console.log(c>d);
console.log(c*4>d);
console.log(c>100 || d<50);
let year=2100;
console.log(` Високосный год`, (year%4==0 || year%100==0));