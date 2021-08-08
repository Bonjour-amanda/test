# Task 2

#### 1. Make the code below cleaner, better and reusable

```php
# Add leading 0 number
# ex: 5 => 0005
private function convertNumber($number) {
    if (strlen($number) === 1) {
        $number = '000' + $number;
    }

    if (strlen($number) === 2) {
        $number = '00' + $number;
    }

    if (strlen($number) === 3) {
        $number = '0' + $number;
    }

    return $number;
}

convertNumber(5);

/* My answer using Javascript */

// if without ternary operator
// convertNumber = (number) => {
//     if (number.toString().length === 1) {
//         number = '000' + number;
//     } else if (number.toString().length === 2) {
//         number = '00' + number;
//     } else if (number.toString().length === 3) {
//         number = '0' + number;
//     } else number;

//     return number;
// }

// if using ternary operator 
// I prefer to use ternary operator, because it is better and cleaner 
const convertNum = (num) => {
    const result = num.toString().length === 1 ? 
    num = '000' + num : (num.toString().length === 2 ? 
    num = '00' + num : (num.toString().length === 3 ? 
    num = '0' + num : num
    ));

    return result;
}
// test case
console.log(convertNum(5))
console.log(convertNum(51))
console.log(convertNum(512))
console.log(convertNum(5123))


```

#### 2. After change the code, make a pull request