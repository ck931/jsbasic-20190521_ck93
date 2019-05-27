/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
// var pow = function (x, n) {
//     x = +prompt('Введите число x', '');
//     do {
//         n = +prompt('Введите степень n, от 1 и выше', '');
//     } while (n < 1);
//     var result = x;
//     for (i = 1; i < n; i++) {
//         result = result * x;
//     }
//     return result;
// }

var pow = function (x, n) {
    if (n < 1) {
        return alert('Функция поддерживает только натуральные значения n');
    }
    var result = x;
    for (i = 1; i < n; i++) {
        result = result * x;
    }
    return result;
}