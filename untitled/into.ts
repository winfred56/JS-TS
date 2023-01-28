let userInfo: object = {
    'firstname': 'Winfred',
    'lastname': 'Adu-Acheampong',
    'email': 'winfred242002@gmail.com'
}
console.log(userInfo);

let addition = (numberToAdd: number) : number => {
    console.log(numberToAdd * 15);
    return (numberToAdd) * 15;
}
console.log(addition(23));

let students: string[] = ['winfred', 'kwame', 'james', 'adu'];
console.log(students);
function listAllStudents(listOfStudents: string[]) : string {
    listOfStudents.map((student: string)  => console.log(student));
    return 'done';
}
console.log(listAllStudents(students));

function shop({product: string, price: number}){

}

let details = {
    'product': 'nike',
    'price': 332,
    'inStock': true
}

shop(details);
function optionalParams(num: number, num2?: number):number {
    if(num2) {
        return num * num2;
    }
    else{
        return num;
    }
}

console.log(optionalParams(34, 2));