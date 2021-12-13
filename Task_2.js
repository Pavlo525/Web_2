//Написати функцію, яка першу літеру кожного слова речення переведе у верхній
//регістр
function Capitalize(str){
    let arr = str.split(" ");
    for(let i = 0; i< arr.length; i++)
    {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let result = arr.join(" ");
    console.log(result);
}

Capitalize("Написати функцію, яка першу літеру кожного слова речення переведе у верхній регістр");
//expected output: Написати Функцію, Яка Першу Літеру Кожного Слова Речення Переведе У Верхній Регістр