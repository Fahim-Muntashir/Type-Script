{

    // instance of gurard

    class Animal {
        name: string;
        species: string;
        constructor(name: string, species: string) { 
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log('I am Making sound');
        }
    }


    class Dog extends Animal{
        
        constructor(name: string, species: string){
            super(name,species)
        }
        makeBark() {
        console.log("I am Barking");
    }
    }


    class Cat extends Animal{
        
        constructor(name: string, species: string){
            super(name,species)
        }
        makeMew() {
        console.log("I am Mew");
    }
    }
    


    // smart way te handle korar jonno amara caile function use korte pari
    
    const isDog = (animal: Animal) => {
       return animal instanceof Dog
   }

    const isCat = (animal: Animal)
{
    return animal instanceof Cat

    }


    const getAnimal = (animal: Animal){

        if (idDog(animal)) {
            animal.makeBark()
        }
        else if (
            animal instanceof Cat
        ) {
            animal.makeMew()
        } else {
            animal.makeSound();
        }

    }

    const dog = new Dog('dog ', 'dog')
    const cat = new Dog('Cat ', 'cat')

    cat.


    // Learing Code 
    
{
  // instanceof guard
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am mewaing");
    }
  }

  // smart way tge handle korar jnne chaile amra function bebohar krte pari
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Dog Bhai", "dog");
  const cat = new Cat("Cat Bhai", "cat");

  getAnimal(cat);

  //
}{
    // instanceof guard
    class Animal {
      name: string;
      species: string;
  
      constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
      }
  
      makeSound() {
        console.log("I am making sound");
      }
    }
  
    class Dog extends Animal {
      constructor(name: string, species: string) {
        super(name, species);
      }
      makeBark() {
        console.log("I am barking");
      }
    }
  
    class Cat extends Animal {
      constructor(name: string, species: string) {
        super(name, species);
      }
      makeMeaw() {
        console.log("I am mewaing");
      }
    }
  
    // smart way tge handle korar jnne chaile amra function bebohar krte pari
    const isDog = (animal: Animal): animal is Dog => {
      return animal instanceof Dog;
    };
  
    const isCat = (animal: Animal): animal is Cat => {
      return animal instanceof Cat;
    };
  
    const getAnimal = (animal: Animal) => {
      if (isDog(animal)) {
        animal.makeBark();
      } else if (isCat(animal)) {
        animal.makeMeaw();
      } else {
        animal.makeSound();
      }
    };
  
    const dog = new Dog("Dog Bhai", "dog");
    const cat = new Cat("Cat Bhai", "cat");
  
    getAnimal(cat);
  
    //
  }
}