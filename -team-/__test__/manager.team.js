const Employee = require('./Employee_team');

class manger extends employee {
    constructor(mane, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    getofficenumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = manger;