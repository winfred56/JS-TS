var userInfo = {
    'firstname': 'Winfred',
    'lastname': 'Adu-Acheampong',
    'email': 'winfred242002@gmail.com'
};
console.log(userInfo);
var addition = function (numberToAdd) {
    console.log(numberToAdd * 15);
    return (numberToAdd) * 15;
};
console.log(addition(23));
var students = ['winfred', 'kwame', 'james', 'adu'];
console.log(students);
function listAllStudents(listOfStudents) {
    listOfStudents.map(function (student) { return console.log(student); });
    return 'done';
}
console.log(listAllStudents(students));
function shop(_a) {
    var string = _a.product, number = _a.price;
}
var details = {
    'product': 'nike',
    'price': 332,
    'inStock': true
}
shop(details);
function optionalParams(num, num2) {
    if (num2) {
        return num * num2;
    }
    else {
        return num;
    }
}
console.log(optionalParams(34, 2));
