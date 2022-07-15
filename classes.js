class Students{
    constructor(name, age, school){
        this.name = name
        this.age = age
        this.school = school
        this.hobby=function(){
            return "I love my baby"
        }

    }
}
Students.prototype.country = function(){
    return "I love Kenya"
}



var firstStudent = new Students("Grace", 34, "AkiraChix");
console.log(firstStudent);
console.log(firstStudent.hobby);
console.log(firstStudent.country);

function Students(name,age,school){
    this.name = name
            this.age = age
            this.school = school
            this.hobby=function(){
                return "I love my baby"
            }
    
        }
var secondStudent = new Students("Mary", 17, "AkiraChix");
console.log(secondStudent);
    
var names = ["chiri", "zibobo", "shamim"]
var [conslate, Grace, ...others] = names
console.log(conslate);
console.log(Grace);