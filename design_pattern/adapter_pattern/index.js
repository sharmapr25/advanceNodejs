const localStorage = require("./localStorage");


console.log("local storage length:", localStorage.length);
const uid = localStorage.getItem("user_id");
console.log('user_id: ', uid)

if(!uid){
  console.log('user id not found. Setting the user id and token');
  localStorage.setItem("user_id", "12345");
  localStorage.setItem("token", "YXLWLJ2938298");
}else{
  console.log("user id has found. ", uid);
  console.log('clearing the user ID...');
  localStorage.clear();
}