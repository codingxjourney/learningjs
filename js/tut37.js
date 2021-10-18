console.log("this is js tutorial 37");
// Callback functions in javascript

// Pretending that this RESPONSE is comming from the server
const students = [
    { name: "samyakt", subject: "javascript" },
    { name: "priyanka", subject: "data structure & algorithm" }
];

function enrollStudent(student, callback) {
    setTimeout(function () {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 1000);
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}<li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");

    }, 5000);
}

let newStudent = { name: "soumya", subject: "python" };
enrollStudent(newStudent, getStudents);
// getStudents();