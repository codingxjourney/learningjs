console.log("this is js tutorial 37");
// Callback functions in javascript

// Pretending that this RESPONSE is comming from the server
const students = [
    { name: "samyakt", subject: "javascript" },
    { name: "priyanka", subject: "data structure & algorithm" }
];

function enrollStudent(student) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            error = false;
            students.push(student);
            console.log("Student has been enrolled");
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 3000);
    })
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}<li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");

    }, 1000);
}

let newStudent = { name: "soumya", subject: "python" };
// enrollStudent(newStudent).then(function () {
//     getStudents();
// }).catch(function () {
//     console.log("Some error occured");
// });

// OR

enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occured!");
})

// Note: 
// function inside then() is ran as - resolve()
// function inside catch() is ran as - reject()