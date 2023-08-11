let myForm = document.getElementById("form");
let present = document.getElementById("present");
present.innerText = null
  let data = JSON.parse(localStorage.getItem("account-data"));
  if(data == null){
    data = []
  }
  
  myForm.addEventListener("submit",(event) => {
    event.preventDefault()
    let signupInfo = {
      fullName : myForm.name.value,
      email : myForm.email.value,
      password : myForm.password.value
    }
    let target = data.find(item => {
      return item.email == signupInfo.email
    })
    if(target){
      present.style.color = "red"
      present.innerText = "Email already registered"
      return
    }    
    data.push(signupInfo);
    present.style.color = "green"
    present.innerText = "Login Successful"
    console.log(signupInfo.email);
    window.location.replace("./signin.html")
    
    localStorage.setItem("account-data",JSON.stringify(data));
    document.getElementById("name").innerText = null;
    document.getElementById("email").innerText = null;
    document.getElementById("password").innerText = null
    present.innerText = null
  })
