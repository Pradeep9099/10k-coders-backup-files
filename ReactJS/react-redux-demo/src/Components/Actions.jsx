export const addUserAction=()=>{
    return{
      type: "ADDUSER",
      paload:"Naveen",
    }
  }
  export const deleteUserAction=(user)=>{
    return {
      type: "DELETEUSER",
      paload:user,
    }
  }