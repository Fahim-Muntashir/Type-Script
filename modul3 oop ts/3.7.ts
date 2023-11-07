{
    // getter and setter

    // static 
    class Counter {
       static count: number = 0;
        increment() {
           return this.count = this.count + 1;
        }
        decrement() {
            return this.count = this.count - 1;
        }
    }

    const instance1 = new Counter();
    console.log(instance1.increment()) //1->different mamory
    const instance2 = new Counter();
    console.log(instance2.increment()) //2->diffent mamory

    
}