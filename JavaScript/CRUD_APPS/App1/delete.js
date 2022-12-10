function deleteUser(i){
    users = users.filter((usr,index)=> i !== index);
    localStorage.setItem("Users",users)
    displayUsers(users)
}