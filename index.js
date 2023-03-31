let users = [
    {
        username: "soo",
        password:"password",
        name:"Ali",
        email:"ali@student.utem.edu.my"
    },
    {
        username:"CHUA",
        password:"123456",
        name:"CCF",
        email:"choo27283@student.utem.edu.my"
    }
]

function login(username,password){
    console.log("someone try to login with",username,password)
    /*users.find(element=>{
        console.log(element)

    })*/

    let matched=users.find(element=>element.username==username)
    if(matched){
        if(matched.password==password){
            return matched
        }else{
            return "Password not matched"
        }
    }else{
        return "Username not found"
    }
}

console.log(login("hello","1355"))