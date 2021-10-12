/**
    У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
    Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
 */

const hamster = {
    stomach: [],
    eat(food) {
        this.stomach.push(food);
    }
};

function getSpeedy() {
    const speedy = Object.create(hamster);
    speedy.stomach = [];

    return speedy;
}

function getLazy() {
    const lazy = Object.create(hamster)
    lazy.stomach = [];

    return lazy;
}
// Этот хомяк нашёл еду
const a = getSpeedy();
const b = getLazy();
a.eat("apple"); // apple
b.eat('banana')
// У этого хомяка теперь нету еды
console.log(a.stomach);
console.log(b.stomach); // он пустой
console.log(hamster.stomach) //У родителя тоже ничего нету

module.exports.getSpeedy = getSpeedy;
module.exports.getLazy = getLazy;