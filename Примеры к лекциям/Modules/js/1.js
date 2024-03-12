import {people} from '../data/object.js';
let key,value;
people.forEach(function(elem){
    for ([key,value] of Object.entries(elem))
        alert(`${key}:${value}`);
})