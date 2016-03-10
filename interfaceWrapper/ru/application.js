// Вывод из глобального контекста модуля
//console.log('From application global context');

// Объявляем функцию для события таймера
/*function timerEvent() {
  console.log('From application timer event');
}*/

// Устанавливаем функцию на таймер
//setTimeout(timerEvent, 1000);

// Пример использования fs API
var fileName = './README.md';
console.log('Application going to read ' + fileName);
fs.readFile(fileName, 'utf8', function (err, src) {
    if (!err) {
        console.log('File ' + fileName + ' size ' + src.length);
    } else {
        console.log('File ' + fileName + ' can\'t read');
    }
});
fs.access(fileName, function (err) {
    console.log('File ' + fileName + (err ? ' no access!' : ' can read/write'));
});