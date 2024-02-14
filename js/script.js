let password = document.querySelector(".password")
let eye_icon = document.querySelector(".eye_icon")
eye_icon.addEventListener("click",(e)=>{
    if(password.type == "password"){
        password.type = "text"
        e.target.className = "fa-regular fa-eye"
    }else{
        password.type = "password"
        e.target.className = "fa-regular fa-eye-slash"
    }   
})