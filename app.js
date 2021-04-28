var variants = 'Введите номер варианта лабораторной работы:\n 1 - Найти гипотенузу и площадь прямоугольного треугольника\n 2 - Вычисление a и b по заданной формуле\n 3 - Найти длины биссектрис треугольника\n 4 - Среди двух действительных чисел выести первое, если оно больше второго, иначе оба числа\n 5 - Вычисление f(a) по заданной формуле\n 6 - Определить, принадлежит ли точка заштрихованной части плоскости\n 8 - Выяснить, угрожает ли ферзь на одном поле другому\n 9 - Вывести последнюю цифру натурального числа меньше или равного 100\n 10 - Выяснить, все ли 4 цифры числа различны\n 11 - Вычислить по заданной формуле\n 14 - Вычислить по формуле последовательно слева направо\n 19 - Вывести числа массива заданного размера, имеющие четные номера в массиве и нечетные значения\n 21 - Вывести самое большое число массива по модулю\n 0 - Выход из программы'
var variant = Number(prompt(variants))

while (variant != 0) {
    switch (variant) {
        case 1:
            lab1()
            break
        case 2:
            lab2()
            break
        default:
            alert('Введен неверный номер варианта')
            break
    }
    variant = Number(prompt(variants))
}

function lab1() {
    var a = Number(prompt('Введите значение a:'))
    var b = Number(prompt('Введите значение b:'))
    var c = Math.sqrt(Math.sqrt(a) + Math.sqrt(b))
    var s = 0.5 * a * b
    alert('Гипотенуза равна - ' + c + '\nПлощадь равна - ' + s)
}

function lab2() {
    var x = Number(prompt('Введите значение x:'))
    var y = Number(prompt('Введите значение y:'))
    var z = Number(prompt('Введите значение z:'))
    var a = (Math.abs(Math.sqrt(x - 1)) - Math.pow(Math.abs(y), (1 / 3))) / ((1 + (Math.pow(x, 2) / 2)) + (Math.pow(y, 2) /4))
    var b = x * (Math.atan(z) + Math.exp(-(x + 3)))
    alert('Переменная a = ' + a + '\nПеременная b = ' + b)
}