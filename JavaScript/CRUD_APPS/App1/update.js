function editUser(i){
  var newUser = users[i]
 gIndex=i
  for(a in newUser){
     if(a !== "status" && a !== "subjects"){
         document.getElementById(a).value = newUser[a]
     }else if(a == "status"){
         allStatus.forEach((status)=>{
             if(status.value == newUser[a]){
                 status.checked = true
             }
         })
     }else if(a == "subjects"){
         allCheckBoxes.forEach((cb)=>{
             var check = newUser[a].find((subject)=> subject === cb.value);
             if(check){
                 cb.checked = true
             }
         })
     }
  }
 
  document.getElementById("udpateUserBtn").style.display="block"
  document.getElementById("addUserBtn").style.display="none"
 }
 
 function updateUser(){
     var user = readUserFromForm();
     users[gIndex] = user;
     localStorage.setItem("Users",JSON.stringify(users))
     displayUsers(users)
     clearForm()
 
     document.getElementById("udpateUserBtn").style.display="none";
     document.getElementById("addUserBtn").style.display="block";
     
 }