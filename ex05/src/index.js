var myPetsArray = [
    animal1 = {
        animalType: "Dog",
        name: "Pujdo"
    },
    animal2 = {
        animalType: "Cat",
        name: "Maca"
    },
    animal3 = {
        animalType: "Bird",
        name: "Tweety"
    },
]
function myPetsFunction(pets){
    return pets[pets.indexOf(animal2)].name;
}
console.log(myPetsFunction(myPetsArray));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;