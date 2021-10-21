console.log("this is js tutorial 42");
// Fetch api in JavaScript

// Button with id myBtn 
let myBtn = document.getElementById('myBtn')

// Div with id content
let content = document.getElementById('content');

// function getData() {
//     console.log("Started getData");
//     url = "codingxjourney.txt";
//     fetch(url).then((response) => {
//         console.log(`Inside first 'then'`);
//         return response.text();
//     }).then((data) => {
//         console.log(`Inside second 'then'`);
//         console.log(data);
//     })
// }
// console.log("Before running getData");
// getData();
// console.log("After running getData");

function getData() {
    url = "https://api.github.com/users";
    fetch(url).then((response) => {
        // return response.text();
        return response.json();
    }).then((data) => {
        console.log(data);
    })
}
// getData();

function postData() {  
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"changeThisAfterExecutingEachTime","salary":"123","age":"23"}';
    params = {
        method: "post",
        header: {
            'Content-type': 'application/json'
        },
        // body: JSON.stringify(data); // if 'data' is in "string" then don't use JSON.stringify()
        body: data // here data is in string so there is no need of stringfy()
    };
    fetch(url, params).then(response => response.json())
    .then(data => console.log(data)
    )
}
postData();