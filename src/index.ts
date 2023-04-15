// let numbers: number = [1, 2, '3'];
// let numbers: number [] =[];
// numbers[0] = 1;
// numbers[1] = '2';
// numbers.forEach(n => n.)

// let user: [number, string] = [1, 'Mosh',0];//gives error if we don't have exactly two elements with given type
// let user: [number, string] = [1, 'Mosh'];
// user.push(1);//this is a drawback of ts we shouldnt be able to do this

// const small = 1;
// const medium = 2;
// const large = 3;
// alternate is enum like below

//Pascal naming convention
// enum Size { Small = 's', Medium = 'm', Large = 'l' };//we can also use strings
// enum Size { Small = 1, Medium = 2, Large = 3 };
// enum Size { Small = 1, Medium, Large };
// let mySize: Size = Size.Medium
// console.log(mySize);
// const enum Size { Small = 1, Medium, Large };
// let mySize: Size = Size.Medium
// console.log(mySize);

// function calculateTax(income: number): number {
//     // return 0;
//     if(income < 50_000){
//         return income * 1.2;
//     }
// }
// function calculateTax(income: number, taxYear = 2022):number {
//     // return 0;
//     if(taxYear < 2022){
//         return income * 1.2;
//     }
//     return income *1.3;
// }

// calculateTax(10_000);

// let employee:{
//     readonly id:number,
//     name:string,
//     retire: (date: Date) => void
// } = { id: 1,
//     name:'Mosh',
//     retire: (date: Date) => {
//         console.log(date);
//     }    
// };
// employee.name = 'Mosh';
// employee.id = 0;

// type Employee = {
//     readonly id:number,
//     name:string,
//     retire: (date: Date) => void
// }

// function kgToLbs(weight: number | string): number {
//     //narrowing
//     if(typeof weight === 'number'){
//         return weight * 2.2
//     }
//     else{
//         return parseInt(weight) * 2.2
//     }
// }

// kgToLbs(10);
// kgToLbs('10kg')

// type Draggable = {
//     drag: () => void
// }

// type Resizable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Resizable;

// let textbox: UIWidget = {
//     drag: () =>{},
//     resize: () => {}
// }

// let quanity : number;
// let quanity : 50 | 100 = 50;
// quanity = 100

// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = 'cm' | 'inch'

// function greet(name: string | null){
//     if(name)
//         console.log(name.toUpperCase());
//     else
//         console.log('Hola!')
// }

// greet(null);

type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date()};
}

let customer = getCustomer(1);
// if(customer!== null && customer!== undefined)
// console.log(customer.birthday)
console.log(customer?.birthday?.getFullYear());
