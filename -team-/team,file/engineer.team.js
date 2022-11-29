const Employee = require('./Employee_team');

class Engineer extends Employee {
    constructor(name, id, email, uv) {
        super(name, id, email);

        this.staff = staff;
    }
    getuv() {
        return this.staff;
    }
getRole() {
    return "Engineer";
    }
}

module.exports = Engineer;