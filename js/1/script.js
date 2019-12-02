// 1 Task
function WordCount(str) {
    return str.split(" ").length;
}
let str = "Первое задание и его текст"
document.write(str, '<br>');
document.write('Кол-во слов и букв в предложении выше: ', WordCount(str),' и ', str.length, '<br>');
document.write('URL: ', document.URL,'<br>');
document.write('Имя протокола: ', document.location.protocol,'<br>');
document.write('Имя файла: ', document.location.pathname.split('.')[0],'<br>');
document.write('Расширение: ', document.location.pathname.split('.')[1],'<br>');
// Шестой вопрос
// 2 Task

document.write('<a href="#top">Верх</a><br>')
document.write('<a href="#bot">Низ</a><br>')

document.write('<a href="https://vk.com" id="vk">ВК</a><br>')
document.write('<a href="http://www.ifmo.ru/ru/" id="ifmo">ИТМО</a><br>')

document.write('<img src="Pic1.jpg" style="width: 200px; height: 100px" id="pic1">')
document.write('<img src="Pic2.jpg" style="width: 100px; height: 200px" id="pic2"><br>')

document.write('Кол-во анкоров: ', document.anchors.length,'<br>');
document.write('Кол-во ссылок: ', document.links.length,'<br>');
document.write('Вывод имеющегося анкора: ', document.anchors[0].innerHTML, '<br>')
document.write('Кол-во картинок: ', document.images.length,'<br>');
document.write('Ширина первой картинки: ', document.images[0].width,'<br>');
document.write('Ширина самой широкой картинки: ', Math.max.apply(Math, Array.from(document.images).map(function(o) { return o.width; })), '<br>');
const reducer = (accumulator, currentValue) => accumulator + currentValue;
document.write('Cумма всех высот картинок: ', Array.from(document.images).map(function(o) { return o.height; }).reduce(reducer),'<br>');

for (let i = 1; i<document.forms.length; i = i + 2) {
    document.write(document.forms[i].name + ', ');
}

function showName() {
    alert(event.parentNode.name);
}

function showId() {
    alert(event.parentNode.Id);
}

function reset() {
    document.getElementsById(event.currentTarget.parentNode.id).reset();
}

