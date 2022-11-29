const Employee = require('./Employee_team');

class Intern extends Employee {
    constructor(name, id, email, uv) {
        super(name, id, email);

        this.uv = uv;
    }
    getuv() {
        return this.uv;
    }
getRole() {
    return "Intern";
    }
}

module.exports = Intern;