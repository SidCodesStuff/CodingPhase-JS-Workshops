const sum = (num1: number, num2: number): number => num1 + num2;
function sum2(num1: number, num2: number): number {
    return num1 + num2;
}

let element: HTMLElement;
let link: HTMLAnchorElement;

let value: number = sum(2, 2);
let value2 = sum2(2, 2);
if( typeof value === 'string' ) {
    value = +(value)
}
// sum(1, 2) // 3
// sum(2, 2) // 4
// sum(1, 'Sid') //1Sid