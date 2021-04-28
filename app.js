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
        case 3:
            lab3()
            break
        case 4:
            lab4()
            break
        case 5:
            lab5()
            break
        case 6:
            lab6()
            break
        case 8:
            lab8()
            break
        case 9:
            lab9()
            break
        case 10:
            lab10()
            break
        case 11:
            lab11()
            break
        case 14:
            lab14()
            break
        case 19:
            lab19()
            break
        case 21:
            lab21()
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
    var a = ((1 + Math.pow(Math.sin(x + y), 2)) / (2 + Math.abs(x - (2 * x) / (1 + (Math.pow(x, 2) * Math.pow(y, 2)))))) + x
    var b = Math.pow(Math.cos(Math.atan(1 / z)), 2)
    alert('Переменная a = ' + a + '\nПеременная b = ' + b)
}

function lab3() {
    var a = Number(prompt('Введите значение a:'))
    var b = Number(prompt('Введите значение b:'))
    var c = Number(prompt('Введите значение c:'))
    var la = Math.sqrt((a * b * (a + b + c) * (a + b + c)) / (a + b))
    var lb = Math.sqrt((a * c * (a + b + c) * (a + b + c)) / (a + c))
    var lc = Math.sqrt((c * b * (a + b + c) * (a + b + c)) / (c + b))
    alert('Длинна биссектрисы a = ' + la + '\nДлинна биссектрисы b = ' + lb + '\nДлинна биссектрисы c = ' + lc)
}

function lab4() {
    var a = Number(prompt('Введите первое число:'))
    var b = Number(prompt('Введите второе число:'))
    if (a > b)
        alert(a)
    else
        alert(a + '' + b)
}

function lab5() {
    var x = Number(prompt('Введите значение x:'))
    var a = Math.pow(x, 2) + 4 * x + 5
    if (x <= 2)
        alert(a)
    else
        alert(1 / a)
}

function lab6() {
    var x = Number(prompt('Введите значение x:'))
    var y = Number(prompt('Введите значение y:'))
    var r = Math.sqrt(x * x + y * y)
    if (r <= 1 && r >= 0.5)
        alert('Точка принадлежит заштрихованной области')
    else
        alert('Точка не принадлежит заштрихованной области')
}

function lab8() {
    var k = Number(prompt('Введите значение k:'))
    var l = Number(prompt('Введите значение l:'))
    var m = Number(prompt('Введите значение m:'))
    var n = Number(prompt('Введите значение n:'))
    if (((k == m) && (l == n)) && ((k == m) || (l == n) || (Math.abs(k - m) == Math.abs(l - n))))
        alert('Ферзь угрожает')
    else
        alert('Ферзь не угрожает')
}

function lab9() {
    var n = Number(prompt('Введите натуральное число <= 100:'))
    if (n < 100 && n >= 10)
        alert('Последняя цифра числа ' + n + '-> ' + (n % 10))
    else if (n < 9 && n >= 1)
        alert('Последняя цифра числа ' + n + '-> ' + n)
    else if (n == 100)
        alert('Последняя цифра числа ' + n + '-> ' + 0)
    else
        alert('Число не соответствует условию')
}

function lab10() {
    var n = Number(prompt('Введите натуральное число <= 9999:'))
    var nl = String(n).length
    var n1 = Math.floor(n / 1000)
    var n2 = Math.floor((n % 1000) / 100)
    var n3 = Math.floor((n % 100) / 10)
    var n4 = Math.floor(n % 10)
    switch (nl) {
        case 4:
            if (n1 == n2 && n3 && n4)
                alert('Все 4 цифры числа одинаковы')
            else
                alert('Все 4 цифры числа различны')
            break
        case 3:
            if (n2 == n3 && n4)
                alert('Все 3 цифры числа одинаковы')
            else
                alert('Все 3 цифры числа различны')
            break
        case 2:
            if (n3 == n4)
                alert('Все 2 цифры числа одинаковы')
            else
                alert('Все 2 цифры числа различны')
            break
        case 1:
            alert('Вы ввели одно число. Оно одинаково')
            break
        default:
            alert('Введено неверное значение')
            break
    }
}

function lab11() {
    var n = Number(prompt('Введите натуральное число:'))
    var x = (Math.cos(1) / Math.sin(1))
    for (var i = 2; i < n; i++) {
        var y = ((Math.cos(1) + Math.cos(n)) / (Math.sin(1) + Math.sin(n)))
        x *= y
    }
    alert('Результат: ' + x)
}

function lab14() {
    var y = 1 - 1 / 2
    for (var i = 3; i < 9999; i++) {
        x = 1 / i
        y += x
    }
    y -= 1 / 10000
    alert('Результат: ' + y)
}

function lab19() {
    var n = Number(prompt('Введите натуральное число:'))
    var arr = new Array((n + 1))
    for (var i = 0; i < (n + 1); i++) {
        arr[i] = Math.floor(Math.random() * 100)
    }
    var a
    var b = ''
    for (var i = 0; i < n; i++) {
        if (i % 2 && arr[i] % 3) {
            a = arr[i]
            b += a + ' '
        }
    }
    alert(b)
}


function lab21() {
    var n = Number(prompt('Введите натуральное число:'))
    var arr = new Array(n)
    var max = 0
    for (var i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * (-1000))
        arr[i] = Math.abs(arr[i])
        if (arr[i] > max)
            max = arr[i]
        console.log(arr[i])
    }
    console.log('')
    console.log(max)
}
