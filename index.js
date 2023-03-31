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
    if(matched)
    {
        if(matched.password==password)
        {
            return matched
        }
        else
        {
            return "Password not matched"
        }
    }
    else
    {
        return "Username not found"
    }
}

function register(newusername,newpassword,newname,newemail){
    //To do:Check
    let found=users.find(element=>element.username==newusername) 
    if (found)
    {
        return "username is exist"

    }

    users.push({
        username: newusername,
        password:newpassword,
        name:newname,
        email:newemail
    })
}

//console.log(login("hello","1355"))
register("ccf","123","fei","hui@gmail.com")
console.log(register("ccf","123","fei","hui@gmail.com"))
