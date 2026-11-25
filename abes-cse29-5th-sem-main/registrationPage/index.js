const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const div = document.getElementById("students");
const msg = document.getElementById("msg");
const showStudents = ()=>{
   const innerDiv = document.createElement("div");
   innerDiv.innerText = `${name.value}  ${email.value}`;

   div.appendChild(innerDiv);

   name.value = "";
   email.value = "";
   password.value = "";

   msg.innerText = "Registered Successfull!";
   msg.style.color = "green";
}
btn.addEventListener("click",showStudents)





