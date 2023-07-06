/** Same keys and values ES2015 */

function createInstructor(firstName, lastName){
    return {
        firstName, 
        lastName
    }

}

/** Computed Property Names */

let favoriteNumber = 42;
var instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}



/** Object Methods  */

const instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

  /** Create Animal Function */
  const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}


  