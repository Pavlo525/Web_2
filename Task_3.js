//Написати функцію, яка порахує перші n числа Фібоначі
function fib(n) {

    const result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i-2] + result[i-1]);
        //result [i-2] і result [i-1] для генерації нового числа Фібоначчі і вставив його в масив.
    }
    return result; //або результат [n-1], якщо ви хочете отримати n-й доданок

}

console.log(fib(8));
//expected output: [0,1,1,2,3,5,8,13]