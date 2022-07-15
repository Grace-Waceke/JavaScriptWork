var people ={
    name:20,
    country: "Kenya"
};

console.log(people["country"]);
console.log(people.country);

var person = new Object(people);
console.log(person.name);
person["age"] =25;
console.log(person);

for([keys,values] of Object.entries(person)){
    console.log('${keys}: ${values}');
}

// object.freeze(person)
person['school'] = "AkiraChix";
console.log(person);
Object.seal(person)
person.name = "Grace";
person["Dylan"] = "Dancing";



var student = {
    name: "Maimbo",
    country: "Kenya",
    hobby: function(){
        // console.log("my favourite hobby is baking");
        return "my favourite hobby is baking"
    },
    friends:{
        name: "Tamara",
        age:20,
        hobby: {
            first: "playing",
            play:function(){
                return"I love playing"

            }
    }
}

}
console.log(student.country);
console.log(student.hobby());
console.log(student.friends.name);
console.log(student.friends.hobby);