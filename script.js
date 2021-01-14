let _ = require ('lodash');
let $;

let students = ["Noah", "Ethan", "Simon", "Caden", "Michael", "Stefano", "Lucas", "Andrew"];
let newArray = _.drop ( students, 2);

console.log(students);
console.log(newArray);

students.forEach((s) => 
    $('#list').append(`<h2> ${s} </h2>`)
)
