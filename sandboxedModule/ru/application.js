// Файл содержит маленький кусочек основного модуля демонстрационного
// прикладного приложения, загружаемого в песочницу демонстрационным
// кусочком фреймворка. Читайте README.md в нем задания.

// Вывод из глобального контекста модуля
console.log('From application global context');

console.log(isString('string'));
console.log(isNull('string'));

setTimeout(function () { console.log("Hello from setTimeout"); }, 1000);

setInterval(function () { console.log("Hello from setInterval"); }, 1000);


module.exports = { };

module.exports.hello = function () { 
};

module.exports.doSomething = function () {
    console.log('Do something');
};

module.exports.variableName = 'stringVariable';