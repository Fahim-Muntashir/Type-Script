{
    // oop - class

    class Animal{
    //    public name: string;
    //    public species: string;
        // public sound: string;
        
        // paramete properties are here is public its awesome make code smplifier

        constructor(public name: string,public species: string,public sound: string) {
            // // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal("German Shepart DOg", "Gog", "Ghew Ghew");
    const cat = new Animal('Rodi Catr', "cat", "meaw meaw");

    cat.makeSound();
    dog.



}