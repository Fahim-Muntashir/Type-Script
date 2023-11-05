{
    // interface
    // interface diyeao type declare kora jay

    type User1 = {
        name: string;
        age: number;
    };

    type UserWithRole1 = User1 & { role: string };


    interface User2{
        name: string;
        age: number;
    }
    interface UserWithRole2 extends User2 {
        role: string;
    }
    const user1: UserWithRole1 = {
        name: 'Persian',
        age: 100,
        role:"tty"
    }

    interface User2{
        name: string;
        age: number;
    }

    // js--> object , array ->object function ->object;

    interface Roll2{
        [index: number]: number;
    }

    const rollNumber: Roll2 = [1, 2, 4];

    const rollNumber1:Roll1=[]

    type Add;
    

    interface Add2{
        (num1: number, num2: number): Roll2;
    }

    const add = (num1, num2) => num1 + num2;


  
}