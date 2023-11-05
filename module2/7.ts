{
    // generic constraint with keyog operator
    type Vehicle = {
        bike: string;
        car: string;
        ship: string:
    }

    type Owner = "bike" | "car" | "ship"; //manually

    type Owner2 = keyof Vehicle;

    const person1 :Owner2=""

    const user = {
        name: 'Mr.Persian',
        age: 26,
        address:'ctg'
    }
    user['name']


    function getPropertyValue(obj:object,key:string) {
        return obj;
    }

    const result= getPropertyValue()

}