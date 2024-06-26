// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// *Подсказка *
// Пример использования функции
// const user = {
// name: 'John Smith',
// age: 30,
// email: 'john@example.com'
// };

// saveUserData(user)
// .then(() => {
// console.log('User data saved successfully');
// })
// .catch(error => {
// console.log(error.message);
// });

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени

function saveUserData(user) {
    const formData = new FormData();
    formData.append("data",JSON.stringify(user));
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://httpbin.org/post");
    xhr.send(formData);
    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log(`Error ${xhr.status} ${xhr.statusText}`);
        } else {
            console.log(`user ${xhr.response}`);
        }
    };
    xhr.onprogress = function (event) {
        console.log(`used ${event.loaded} bytes`);
    };
    xhr.onerror = function () {
        console.log(`BIG ERROR`);
    };
}
const user = {
    name: "John Smith",
    age: 30,
    email: "john@example.com",
};
saveUserData(user)
