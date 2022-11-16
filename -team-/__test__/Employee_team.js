const Employee = Require(' ../Employee');

test["can  make a new employee object",() => {
    const employee = new employee();
    exspect(typeo)
}]



class employee {
    constructor(name, id, email){
        this.name = name;
        this.id =id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;