class UserStorage{
    constructor(){
        this.storage = {}
        this.id = 0
    }

    getUsers(){
        return Object.values(this.storage)
    }

    getUser(id){
        return this.storage[id]
    }

    addUser(firstName, lastName){
        const id = this.id
        this.storage[id] = {id, firstName, lastName}
        this.id ++
    }

    updateUser(id, {firstName, lastName}){
        this.storage[id] = {id, firstName, lastName}
    }

    deleteUser(id){
        delete this.storage[id]
    }
}

module.exports = new UserStorage();

// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.