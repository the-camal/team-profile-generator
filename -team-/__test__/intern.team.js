const employee = require('./Employee');

class intern extends employee {
    constructor(name, id, email, uv) {
        super(name, id, email);

        this.uv = uv;
    }
    getuv() {
        return this.uv;
    }
getRole() {
    return "intern";
    }
}

module.exports = intern;