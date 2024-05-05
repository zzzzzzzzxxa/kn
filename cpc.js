// 6. Напишите программу, который принимает с клавиатуры целое
//    положительное трехзначное число. Затем следует построить новое
//    значение, составленное
//    из цифр числа, введенного с клавиатуры, но в обратном
//    порядке. После этого новое значение следует уменьшить на 20, и
//    окончательный результат вывести на экран.

let number = prompt("Введите трехзначное число:");
if (number.length === 3 && !isNaN(number)) {
    let digits = number.split('').map(Number);
    let reversedNumber = parseInt(digits.reverse().join(''));
    let result = reversedNumber - 20;
    console.log("Output:", result);
} else {
    console.log("Пожалуйста, введите трехзначное число.");
}


// 7. Программа принимает с клавиатуры целое
//    положительное трехзначное число. Затем она выводит
//    сумму цифр этого числа.

let number = prompt("Введите трехзначное число:");
if (number.length === 3 && !isNaN(number)) {
    let digits = number.split('').map(Number);
    let sum = digits.reduce((acc, curr) => acc + curr, 0);
    console.log(`Output: ${digits.join(' + ')} = ${sum}`);
} else {
    console.log("Пожалуйста, введите трехзначное число.");
}

// 8. Программа принимает с клавиатуры целое число и, если оно
//    положительное, увеличивает его вдвое. Класс должен выводить на
//    экран новое значение.

let number = prompt("Введите целое число:");
number = parseInt(number);

if (!isNaN(number)) {
    if (number > 0) {
        number *= 2;
    }
    console.log("Output:", number);
} else {
    console.log("Пожалуйста, введите целое число.");
}

// 9. Программа принимает с клавиатуры целое число и выводит на экран
//    одно из следующих сообщений: “Положительное”, или “Отрицательное”,
//    или “Ноль”, - в зависимости от значения числа.

let number = prompt("Введите целое число:");
number = parseInt(number);

if (!isNaN(number)) {
    if (number > 0) {
        console.log("Положительное");
    } else if (number < 0) {
        console.log("Отрицательное");
    } else {
        console.log("Ноль");
    }
} else {
    console.log("Пожалуйста, введите целое число.");
}


// 10. Программа принимает с клавиатуры целое положительное число и,
//     если оно как минимум трехзначное и положительное, уменьшает его на 1.

let number = prompt("Введите целое положительное число:");
number = parseInt(number);

if (!isNaN(number)) {
    if (number >= 100) {
        number -= 1;
        console.log("Output:", number);
    } else {
        console.log("Число должно быть как минимум трехзначным.");
    }
} else {
    console.log("Пожалуйста, введите целое число.");
}


// 11. Программа принимает с клавиатуры два целых числа и, если первое
//     больше второго, выводит на экран их сумму, если же наоборот -
//     выводит на экран их произведение. В случае же, если числа одинаковы,
//     программа выводит на экран сообщение "Числа равны".

let firstNumber = prompt("Введите первое целое число:");
let secondNumber = prompt("Введите второе целое число:");

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    if (firstNumber > secondNumber) {
        console.log("Сумма:", firstNumber + secondNumber);
    } else if (firstNumber < secondNumber) {
        console.log("Произведение:", firstNumber * secondNumber);
    } else {
        console.log("Числа равны");
    }
} else {
    console.log("Пожалуйста, введите два целых числа.");
}

// 12. Трехзначное положительное число называется «четнокрасивым», если
//     каждая из его цифр - четная. Программа принимает с клавиатуры
//     трехзначное число и проверяет, является ли оно «четнокрасивым».
//     В соответствии с результатом проверки надо вывести на экран
//     соответствующее текстовое сообщение. Обратите внимание: задание
//     имеет решение с использованием одного оператора if и без составного
//     условия!

let number = prompt("Введите трехзначное число:");
number = parseInt(number);

if (!isNaN(number) && number >= 100 && number <= 999 && number % 2 === 0 && (number % 100) / 10 % 2 === 0 && number / 100 % 2 === 0) {
    console.log("Число является четнокрасивым");
} else {
    console.log("Число не является четнокрасивым");
}


// 13. Программа принимает с клавиатуры целое число и выводит на экран
//     результат сравнения числа с произведением его цифр.

let number = prompt("Введите целое число:");
number = parseInt(number);

if (!isNaN(number) && number > 0) {
    let digits = String(number).split('').map(Number);
    let product = digits.reduce((acc, curr) => acc * curr, 1);
    if (number > product) {
        console.log(`${number} > ${product}`);
    } else if (number < product) {
        console.log(`${number} < ${product}`);
    } else {
        console.log(`${number} = ${product}`);
    }
} else {
    console.log("Пожалуйста, введите положительное целое число.");
}


// 14. Программа принимает с клавиатуры количество учеников и количество
//     стульев, а затем проверяет, хватит ли стульев для учеников.
//     Если стульев достаточно, программа выводит на экран сообщение "Хватит стульев",
//     иначе выводит "Не хватит стульев".

let students = prompt("Введите количество учеников:");
let chairs = prompt("Введите количество стульев:");

students = parseInt(students);
chairs = parseInt(chairs);

if (!isNaN(students) && !isNaN(chairs) && students > 0 && chairs > 0) {
    if (chairs >= students) {
        console.log("Хватит стульев");
    } else {
        console.log("Не хватит стульев");
    }
} else {
    console.log("Пожалуйста, введите положительные целые числа.");
}


// 15. Программа принимает с клавиатуры три целых числа и выводит их на
//     экран в отсортированном порядке.

let input = prompt("Введите три целых числа, разделенных пробелом:");
let numbers = input.split(' ').map(Number);

if (numbers.length === 3 && !numbers.includes(NaN)) {
    numbers.sort((a, b) => a - b);
    console.log("Output:", numbers.join(', '));
} else {
    console.log("Пожалуйста, введите три целых числа.");
}


// 16. Программа принимает с клавиатуры целое число и выводит на экран его
//     квадрат, но только в случае, если введенное число отрицательно.
//     В противном случае - на экран выводится сообщение "Ошибка".

let number = prompt("Введите целое число:");
number = parseInt(number);

if (!isNaN(number)) {
    if (number < 0) {
        console.log("Квадрат числа:", number * number);
    } else {
        console.log("Ошибка");
    }
} else {
    console.log("Пожалуйста, введите целое число.");
}

// 17. Программа принимает с клавиатуры два числа: первое - количество
//     учеников в классе, второе - количество стульев в классной комнате.
//     Программа проверяет соответствие между этими двумя значениями и
//     выводит на экран соответствующую информацию (например, для значений
//     35 и 39 на экран выводится "4 стула лишних").

let students = prompt("Введите количество учеников в классе:");
let chairs = prompt("Введите количество стульев в классной комнате:");

students = parseInt(students);
chairs = parseInt(chairs);

if (!isNaN(students) && !isNaN(chairs) && students >= 0 && chairs >= 0) {
    if (students > chairs) {
        console.log(students - chairs + " стула(ов) не хватает");
    } else if (students < chairs) {
        console.log(chairs - students + " стула(ов) лишних");
    } else {
        console.log("Количество учеников и стульев совпадает");
    }
} else {
    console.log("Пожалуйста, введите неотрицательные целые числа.");
}


// 19. Трехзначное число называется «дважды четным», если и оно
//     само, и сумма его цифр - четные. Программа принимает с
//     клавиатуры трехзначное положительное число и проверяет,
//     является ли оно «дважды четным». В соответствии с результатом
//     проверки надо вывести на экран соответствующее текстовое сообщение.

let number = prompt("Введите трехзначное положительное число:");
number = parseInt(number);

if (!isNaN(number) && number >= 100 && number <= 999) {
    let digits = String(number).split('').map(Number);
    let sum = digits.reduce((acc, curr) => acc + curr, 0);
    
    if (number % 2 === 0 && sum % 2 === 0) {
        console.log("Число является дважды четным");
    } else {
        console.log("Число не является дважды четным");
    }
} else {
    console.log("Пожалуйста, введите трехзначное положительное число.");
}


// 20. Программа принимает с клавиатуры трехзначное положительное число
//     и проверяет, содержится ли в нем хотя бы один ноль. По результатам
//     проверки надо вывести количество нулей в числе.

let number = prompt("Введите трехзначное положительное число:");
number = parseInt(number);

if (!isNaN(number) && number >= 100 && number <= 999) {
    let count = 0;
    let digits = String(number).split('').map(Number);
    
    for (let digit of digits) {
        if (digit === 0) {
            count++;
        }
    }
    
    console.log("Количество нулей в числе:", count);
} else {
    console.log("Пожалуйста, введите трехзначное положительное число.");
}

// 21. Программа принимает с клавиатуры положительное целое число
//     и выводит на экран ближайшее к нему «крутлое число».

let number = prompt("Введите положительное целое число:");
number = parseInt(number);

if (!isNaN(number) && number >= 0) {
    let nearestRoundNumber = Math.round(number / 10) * 10;
    console.log("Ближайшее к числу крутлое число:", nearestRoundNumber);
} else {
    console.log("Пожалуйста, введите положительное целое число.");
}

// 22. Программа принимает с клавиатуры шестизначный номер билета и
//     проверяет, является ли он «счастливым» или не является.

let ticketNumber = prompt("Введите шестизначный номер билета:");
if (ticketNumber.length === 6 && !isNaN(ticketNumber)) {
    let digits = ticketNumber.split('').map(Number);
    let sumFirstHalf = digits.slice(0, 3).reduce((acc, curr) => acc + curr, 0);
    let sumSecondHalf = digits.slice(3).reduce((acc, curr) => acc + curr, 0);

    if (sumFirstHalf === sumSecondHalf && sumFirstHalf % 2 === 0) {
        console.log("Билет является счастливым!");
    } else {
        console.log("Билет не является счастливым.");
    }
} else {
    console.log("Пожалуйста, введите шестизначный номер билета.");
}

// 23. Программа принимает с клавиатуры целое число, которое
//     должно означать порядковый номер месяца. В случае если
//     полученное значение действительно соответствует порядковому
//     номеру одного из месяцев, выводит сезон (лето, осень, зима,
//     весна), к которому относится месяц. В случае если введенное
//     значение не является порядковым номером месяца, выводит на
//     экран соответствующее текстовое сообщение.

let monthNumber = parseInt(prompt("Введите порядковый номер месяца:"));

if (!isNaN(monthNumber) && monthNumber >= 1 && monthNumber <= 12) {
    if (monthNumber >= 3 && monthNumber <= 5) {
        console.log("Весна");
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        console.log("Лето");
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        console.log("Осень");
    } else {
        console.log("Зима");
    }
} else {
    console.log("Введено неверное значение.");
}

// 24. Программа принимает с клавиатуры положительное трехзначное
//     число и проверяет, сколько разных цифр оно содержит.

let number = parseInt(prompt("Введите положительное трехзначное число:"));

if (!isNaN(number) && number >= 100 && number <= 999) {
    let digits = String(number).split('');
    let uniqueDigits = [...new Set(digits)];
    console.log("Количество разных цифр:", uniqueDigits.length);
} else {
    console.log("Введено неверное значение.");
}

// 25. Программа читает с клавиатуры символ и проверяет, является ли
//     введенный символ буквой латинского алфавита.

let symbol = prompt("Введите символ:");

if (symbol.length === 1 && symbol.match(/[a-zA-Z]/)) {
    console.log("Введенный символ является буквой латинского алфавита.");
} else {
    console.log("Введенный символ не является буквой латинского алфавита.");
}


// 26. Программа принимает с клавиатуры два строковых значения, каждое
//     из которых содержит имя человека, и проверяет, являются ли эти
//     люди тезками.

let name1 = prompt("Введите имя первого человека:");
let name2 = prompt("Введите имя второго человека:");

if (name1.toLowerCase() === name2.toLowerCase()) {
    console.log("Эти люди тезки.");
} else {
    console.log("Эти люди не тезки.");
}

// 27. Программа генерирует и выводит на экран случайное целое число
//     из диапазона положительных двузначных чисел.

let randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10;
console.log("Случайное двузначное число:", randomTwoDigitNumber);

// 28. Программа генерирует случайное положительное двузначное число,
//     а затем генерирует три целых положительных числа, меньших первого.

let randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10;
console.log("Первое двузначное число:", randomTwoDigitNumber);

let smallerNumbers = [];
for (let i = 0; i < 3; i++) {
    let smallerNumber = Math.floor(Math.random() * randomTwoDigitNumber);
    smallerNumbers.push(smallerNumber);
}

console.log("Три числа, меньших первого:", smallerNumbers);


// Генерация случайного числа от 1 до 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Запрос у пользователя на ввод числа
let guess = parseInt(prompt("Угадайте число от 1 до 10:"));

// Проверка введенного числа и вывод соответствующего сообщения
if (!isNaN(guess) && guess >= 1 && guess <= 10) {
    if (guess === randomNumber) {
        console.log("Поздравляем! Вы угадали число!");
    } else {
        console.log(`К сожалению, правильное число было ${randomNumber}. Попробуйте еще раз!`);
    }
} else {
    console.log("Пожалуйста, введите число от 1 до 10.");
}


// Генерация случайного числа от 1 до 3, где каждое число представляет определенный объект
const randomNumber = Math.floor(Math.random() * 3) + 1;

// Запрос у пользователя на ввод числа
let userInput = parseInt(prompt("Введите число от 1 до 3:"));

// Проверка введенного числа и сравнение сгенерированного числа
if (!isNaN(userInput) && userInput >= 1 && userInput <= 3) {
    let result;
    if (randomNumber === userInput) {
        result = "Ничья!";
    } else if (
        (randomNumber === 1 && userInput === 2) ||
        (randomNumber === 2 && userInput === 3) ||
        (randomNumber === 3 && userInput === 1)
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }
    console.log(`Компьютер выбрал: ${randomNumber}`);
    console.log(result);
} else {
    console.log("Пожалуйста, введите число от 1 до 3.");
}
