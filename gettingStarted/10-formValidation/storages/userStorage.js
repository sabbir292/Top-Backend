class UserStorage{
    constructor(){
        this.storage = {}
        this.id = 0
    }

    getUsers(){
        return Object.values(this.storage) //object.values converts.object into a array
    }

    getUser(id){
        if(id) return this.storage[id]
    }
    
    searchUser(name, email){
        const notFoundErr = "User not found with this"
            console.log(name, email)
            if (name){
                const user = Object.values(this.storage).find(user => {
                    const oldName = user.firstName + " "+ user.lastName
                    console.log(oldName)
                  return oldName?.toLowerCase() === name?.toLowerCase()
                })
                if(user) return user
                else return (notFoundErr + 'Name')
        
            }else{
                const user = Object.values(this.storage).find(user => user.email?.toLowerCase() === email?.toLowerCase())
                if(user) return user    
                else return (notFoundErr + 'Email')
            }
    }
    

    addUser(firstName, lastName, email, age, bio){
        const id = this.id
        this.storage[id] = {id, firstName, lastName, email, age, bio}
        this.id ++
    }

    updateUser(id, {firstName, lastName,email, age, bio}){
        this.storage[id] = {id, firstName, lastName, email, age, bio}
    }

    deleteUser(id){
        delete this.storage[id]
    }
}

module.exports = new UserStorage();

// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.