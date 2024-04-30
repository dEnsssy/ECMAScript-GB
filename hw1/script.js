// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));
// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
function createCounter() {
    let counter = 0;
    return {
        increment: function () {
            counter++;
            console.log(counter);
        },
        decrement: function () {
            counter--;
            console.log(counter);
        },
    };
}
const count = createCounter();
count.increment();
count.increment();
count.increment();
count.increment();
count.decrement();
count.decrement();
count.decrement();
count.decrement();
count.decrement();
count.decrement();

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(rootElement, className) {
    if (rootElement.classList && rootElement.classList.contains(className)) {
        return rootElement;
    }

    for (let i = 0; i < rootElement.children.length; i++) {
        const foundElement = findElementByClass(
            rootElement.children[i],
            className
        );
        if (foundElement) {
            return foundElement;
        }
    }

    return null;
}

const rootElement = document.body;
// console.log(rootElement);
const foundElement = findElementByClass(rootElement, "example-class");
if (foundElement) {
    console.log("Найденный элемент:", foundElement);
} else {
    console.log("Элемент с указанным классом не найден.");
}

const rootElement1 = document.getElementById("root");
console.log(rootElement1);
const targetElement1 = findElementByClass(rootElement1, "my-class");
console.log(targetElement1);
