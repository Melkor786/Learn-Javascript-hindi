//promise 1
const PromiseOne = new Promise(function (resolve, reject) {
  //Do an Async Task
  //DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve();
  }, 1000);
});
PromiseOne.then(function () {
  console.log("Promise consumed");
});

//promise 2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 is compelete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 consumed");
});

//promise 3
const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Abhimanyu", email: "abhimanyu19072002@gmail.com" });
  }, 1000);
});
PromiseThree.then(function (user) {
  console.log(user);
});

//promise 4
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (error) {
      reject("ERROR:Something went wrong!!");
    } else {
      resolve({ username: "Abhimanyu", email: "abhimanyu19072002@gmail.com" });
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("Promise is either resolved or rejected"));

// promise 5
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = 1;
      if (error) {
        reject(": Error 404");
      } else {
        resolve({ username: "Abhimanyu", email: "abhimanyu19072002@gmail.com" });
      }
    }, 1000);
});

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(` the error occured is ${error}`);
   }
}

consumePromiseFive()

// async function getAllUsers(){
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//   } catch(error){
//     console.log("E: ", error);
//   }
// }

// getAllUsers()

fetch('https://api.github.com/users/Melkor786')
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data);
})
.catch((error)=>console.log(error))