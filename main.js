async function fetchTry () {
    try {
   return await fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
//   .then(json => console.log(json))
    }
    catch (err){
    return err ;
    }
};

fetchTry()
.then((res)=>{console.log(res);})
.catch((rej) => {console.log(rej);})

// !exe.1
async function potsFetch (){
    try {
    return await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    }
    catch (err) {
        return err ;
    }
}

potsFetch()
.then((res)=>{console.log(res);})
.catch((rej) => {console.log(rej);})

// !exe.2
async function reactions() {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
    }
    catch (err) {
     return err ;
    }
}
reactions()
.then((res) => {console.log(res);})
.catch((rej) => {console.log(rej);})

// !exe.3
async function printFifthPost () {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/posts/5')
        .then(response => response.json())
    }
    catch (err) {
        return err ;
    }
};

printFifthPost()
.then((res) => {console.log(res);})
.catch((rej) => {console.log(rej);})

// !exe.4
async function printninethComment () {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/comments/9')
        .then(response => response.json())
    }
    catch (err) {
     return err ;
    }
}

printninethComment()
.then((res) => {console.log(res);})
.catch((rej) => {console.log(rej);})

// !exe.5
async function printAllAlbums () {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
    }
    catch (err) {
    return err ;
    }
};

printAllAlbums()
.then((res) => {console.log(res);})
.catch((rej) => {console.log(rej);})

// !exe.6
async function printSecondAlbum () {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/albums/2')
        .then(response => response.json())
    }
    catch (err) {
    return err ;
    }
}

function printONscreen (obj) {
    for (let key in obj){
        printobj.innerHTML+=`<p>${key} : ${obj[key]}</p>`
    }
};
printSecondAlbum()
.then((res) => {printONscreen(res)})
.catch((rej) =>{console.log(rej);})

// !exe.7
function displayAlluser (userArray) {
    for (let user of userArray){
        for (let key in user){
            userDiv.innerHTML+=`<p>${key} : ${user[key]}</p>`
        }
    }
};

let userDiv = document.getElementById("user")
async function printUsers () {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
    }

    catch (err) {
    return err ;
    }
}
printUsers()
.then((res) => {displayAlluser(res)})
.catch((rej) => {console.log(rej);})

// !exe.8,9
const USER = {
    name : "shimon" ,
    id : 3
}

const options = {
    method : `POST` ,
    body : JSON.stringify(USER)
};

function checkData (api,  data) {
    return new Promise ((resolve , reject) => {
        fetch(`${api}/${data}`)
        .then(response => response.json())
        .then(res => res.id ? resolve(res) : reject({massege : "not found"}))
    })
}
async function printUser22 () {
    try {
        return await checkData ('https://jsonplaceholder.typicode.com/users',options)

    }
    catch (err) {
        return err ;
    }
}

printUser22()
.then((res) => {console.log(res);})
.catch((rej)=>{console.log(rej);})

// !ex.10
const options1 = {
 method : `POST`
}

async function sendPOst () {
    try {
     return await fetch('https://jsonplaceholder.typicode.com/todos' , options1)
     .then(response => response.json())
    }
    catch (err) {
    return err ;
    }
}
sendPOst()
.then((res) => {console.log(res);})
.catch((rej) => {console.log(rej);})

// ! exe.11
async function postty () {
    try {
        return await fetch('https://jsonplaceholder.typicode.com/posts' , options1)
        .then(response => response.json())
    }
    catch (err) {
   return err ;
    }
}
posttty()
.then((res) => {console.log(res);})
.catch((rej) => {console.log(rej);})

// !exe.12 
const user = {
  user: "Shimon",
  id: 00,
};

let option3 = {
  method: `POST`,
  body: JSON.stringify(user),
};

async function sendUser() {
  try {
    return await fetch(
      "https://jsonplaceholder.typicode.com/albums",
      option3
    ).then((response) => response.json());
  } catch (err) {
    return err;
  }
}
sendUser();

// !exe.13
const user13 = {
  user: "Shimon",
  id: 1234,
};

let option4 = {
  method: `POST`,
  body: JSON.stringify(user13),
};

async function sendToUsers() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/users", option4)
    .then((response) => response.json());
  } 
    catch (err) {
    return err;
  }
}
sendToUsers();

// !exe.14
async function genericPost(api) {
  try {
    return await fetch(`${api}`, option4)
   .then((response) => response.json());
  }
   catch (err) {
    return err;
  }
}
genericPost("https://jsonplaceholder.typicode.com/photos");


// ! exe.15
class User {
  Name;
  Age;
  constructor(name, age) {
    this.Name = name;
    this.Age = age;
  }
};

let nameINp = document.getElementById("name");
let ageINp = document.getElementById("age");
let bnt = document.getElementById("btn");

let user1;
let options4;

async function sendInputToApi() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/users", option4)
    .then((response) => response.json());
  }
   catch (err) {
    return err;
  }
};

bnt.onclick = () => {
  user1 = new User(nameINp.value, ageINp.value);
  option4 = {
    method: `POST`,
    body: JSON.stringify(user1),
  };
  sendInputToApi();
};

// ! exe.16 
function createObj (name,age){
  let obj = {
    Name : name ,
    Age : age 
  }
  return obj ;
};

 function crateOption (obj) {
   let option = {
     method : `POST` ,
     body : JSON.stringify(obj)
   };
   return option ;
 };

let selectBtn = document.getElementById("selectbtn");

async function switchApi (api , option){
  switch (api.toLowerCase()) {
   case "users" : 
    return await fetch ("https://jsonplaceholder.typicode.com/users" , option)
   .then((response) => response.json());

   case "posts" :
   return await fetch ("https://jsonplaceholder.typicode.com/posts" , option)
   .then((response) => response.json());

   case "comments" :
   return await fetch ("https://jsonplaceholder.typicode.com/comments" , option)
   .then((response) => response.json());

   case "albums" :
   return await fetch ("https://jsonplaceholder.typicode.com/albums" , option)
  .then((response) => response.json());

   case "photos" :
   return await fetch ("https://jsonplaceholder.typicode.com/photos" , option)
  .then((response) => response.json());

   case "todos" :
   return await fetch ("https://jsonplaceholder.typicode.com/todos" , option)
  .then((response) => response.json());

   default :
   break;

  }
};

selectBtn.onclick = () => {
let userOption = crateOption(createObj(nameINp.value,ageINp.value))
switchApi(select.value,userOption);
};



