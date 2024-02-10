const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnlogin-popup');
const btnPopupq=document.querySelector('.sidebar .btnlogin-popup');
const close=document.querySelector('.icon-close');

const userList = [{
    email: "abc@gmail.com",
    password:"123456",
    role:"User"
},{
    email: "def@gmail.com",
    password:"456789",
    role:"User"
}];

const adminList = [{
    email: "ghi@gmail.com",
    password:"123456",
    role:"Admin"
},{
    email: "jkl@gmail.com",
    password:"456789",
    role:"Admin"
}];


// registerLink.addEventListener('click',()=>{
//     wrapper.classList.add('active');
// });
// loginLink.addEventListener('click',()=>{
//     wrapper.classList.remove('active');
// });
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
btnPopupq.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
// menu.addEventListener('click',()=>{
//     slidebar.classlist.add('active');
// });
// close.addEventListener('click',()=>{
//     wrapper.classList.remove('active-popup');
// })

function showSidebar(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display='flex';
}
const hideSidebar = () => {
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none';
}
const onSelectRole =  () => {
    const rolesInput =  document.querySelector('#roles');
    rolesInput.style.top = '-5px'

}

const authenticateUser = () =>{
    const inputEmail =  document.getElementById("email").value;
    const inputPassword = document.getElementById("password").value;
    const inputRole =  document.getElementById("role").value;
    const inputCredentials  = {
        email: inputEmail,
        password:inputPassword,
        role:inputRole
    };
    var flag= false;
    if(inputCredentials.role=="Admin") {
        for(var i=0;i<userList.length;i++)
        {
            if(adminList[i].email==inputCredentials.email){
                if(adminList[i].password==inputCredentials.password)
                {
                    alert("authentication successful");
                }
                else{
                    alert("Incorrect Password");
        
                }
                flag=true;
                break;
            }
        }
        if(!flag) {
            alert("Admin doesn't Exists");
        }
    }
    else{
        for(var i=0;i<userList.length;i++)
        {
            if(userList[i].email==inputCredentials.email)
            {
                if(userList[i].password==inputCredentials.password)
                {
                    alert("authentication successful");
                }
                else{
                    alert("Incorrect Password");
                }
            flag=true;
            break;
            }
        }
        if(!flag) {
            alert("User doesn't Exists");
        }
    }
}
const registerUser=()=>{
    const inputOfficer=document.querySelector(".role").value;
    const inputEmails=document.querySelector(".email").value;
    const inputPasswords=document.querySelector(".password").value;
    const registerValues={
         email:inputEmails,
        role:inputOfficer,
        password:inputPasswords

    };
    if(registerValues.role=="Admin")
    {
  adminList.push(registerValues);
  alert( " Admin added successfully");
    }
    else{
        userList.push(registerValues);
        alert("User Added Successfully");
    }
    console.log(adminList);
    console.log(userList);
     
}
    