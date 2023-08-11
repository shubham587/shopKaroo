let myForm = document.getElementById("form");
let heading =document.getElementById("heading");
let signupData = JSON.parse(localStorage.getItem("account-data"));
if(signupData==null){
  signupData = []
}
let userEmail = document.getElementById("email");
let userPwd = document.getElementById("password");
let Wrong = document.getElementById("wrong");
let flag =false
Wrong.innerText = null
myForm.addEventListener("submit",(event) => {
  event.preventDefault();
  Wrong.innerText = null;
  for(let i=0;i<signupData.length;i++){
  if(userEmail.value == signupData[i].email && userPwd.value == signupData[i].password){
    heading.innerText = "Sign in Successful"
    let statuslog = {
      "name" : signupData[i].fullName,
      "status" : "true"
    };
    localStorage.setItem("status",JSON.stringify(statuslog))
    flag = true;
    directToHome(flag)
    document.getElementById("email").innerText = null;
    document.getElementById("password").innerText =null;
    break;
  }else{
    Wrong.style.color = "red"
    Wrong.innerText = "Wrong Credentials"
  }
  }
})
let directToHome = (flag) => {
  console.log(flag);
  if(flag){
    window.location.replace("./index.html")
  }
}