// {
//     // generic constraint with keyopf operator

//     type Vehicle = {
//         bike: string;
//         car: string;
//         ship: string
//     }

//     type Owner = 'bike' | 'car' | 'ship'; //manually

//     type Owner2 = keyof Vehicle;

//     const person1: Owner2 = '';

//     const user = {
//         name: 'Mr.Persian',
//         age: 26,
//         address:'ctg'    }
//     // 
// // }

// user['name'];

const  getPropertyValue =>(obj: object, key: string) {
    return obj[key];
}


const user = {
    name: 'Mr.Persian',
    age: 26,
    address: 'ctg'
}

const result1 = getPropertyValue(user, name);
    
