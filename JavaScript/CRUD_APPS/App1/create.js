var userInfo = {
  university: "",
  institute: "",
  branch: "",
  degree: "",
  status: "",
  cgpa: "",
  experience: "",
  website: "",
  doj: "",
  subjects: [],
};

var users = JSON.parse(localStorage.getItem("Users"))
if(users== null){
  users=[]
}
var gIndex = 0
var allCheckBoxes = document.getElementsByName("subject");
var allStatus = document.getElementsByName("status");

      // var users = []
function addUser() {
 
  var user = readUserFromForm()
  users.push(user);
  // Storing all Users in Local Storage
  localStorage.setItem("Users",JSON.stringify(users))
  displayUsers(users)
  clearForm()
}


function clearForm(){
  for (a in userInfo){
     if(a !== "status" && a !== "subjects"){
      document.getElementById(a).value = ""
     }else{
      allCheckBoxes.forEach((cb)=>{
        cb.checked = false
      })
      allStatus.forEach((as)=>{
        as.checked = false
      })
     }
  }
}

function readUserFromForm(){
  var user = {...userInfo}
  for (a in user) {
    if (a !== "status" && a !== "subjects") {
      user[a] = document.getElementById(a).value;
    } else if (a == "subjects") {
      allCheckBoxes.forEach((element) => {
        if (element.checked) {
          user.subjects.push(element.value);
        }
      });
    } else if (a == "status") {
      allStatus.forEach((element) => {
        if (element.checked) {
          user[a] = element.value;
        }
      });
    }
  }

  return user
}