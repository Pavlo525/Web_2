//Написати функцію, яка видалить усі дублі із масиву стрічок
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
let a = [1, 1, 3, 2,4,4,5,6,7,7];
let unique = a.filter( onlyUnique ); // returns ['a', 1, 2, '1']
console.log(unique)
//expected output: [1,3,2,4,5,6,7]