// learning function
// Normal FUnction
// Arrow FUnction

function add(num1:number, num2:number):number {
    return num1 + num2;
}

add(2, true);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object --- function method

const user poorUser = {
    name: 'Fahim',
    balance: 0,
    addBalance(balance: number):string {
        return `my new is:${this.balance + balance}`;
    }
}

const arr: number[] = [1, 3, 4];
const newArray = arr.map((element:number ):number=> element * element);