var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "1234567895288",
        "likes": ["C", "C++", "C#"]
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": ["Python", "Swift", "R"]
    },
    {
        "firstName": "Richard",
        "lastName": "Roe",
        "number": "6938257149",
        "likes": ["React", "Angular", "Vue"]
    },
    {
        "firstName": "Jane",
        "lastName": "Roe",
        "number": "unknown",
        "likes": ["JavaScript", "Node", "HTML & CSS"]
    },
];
function lookUpProfile(name, prop){
    var nameExists = true
    var propExists = true
    for (var i=0; i<contacts.length; i++){
        if (contacts[i].hasOwnProperty(name) && contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } 
        else if (contacts[i].hasOwnProperty(name) === false) {
            nameExists = false;
        }
        else if (contacts[i].hasOwnProperty(prop) === false) {
            propExists = false;
        }
    }
    if (nameExists === false) {
        return "No such contact";
    }
    else if (propExists === false) {
        return "No such property";
    }
}
console.log(lookUpProfile("Jonh", "likes"));
module.exports = lookUpProfile;