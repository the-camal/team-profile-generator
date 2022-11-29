const inquirer = require('inquirer');
const Manager = require('./team,file/manager.team');
const engineer = require('./team,file/engineer.team');
const intern = require('./team,file/intern.team');
const generatesite = require('./src/generate-site');
const fs = require("fs");
const path = require("path");
const { Console } = require('console');
const { type } = require('os');
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputpath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'what is your full name? (need)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                Console.log('please inter your full name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'employee ID (REQUIRED)',
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log('employee ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'input your email address',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('input your email address');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeNumber',
        message: 'what is your employee number?',
        validate: employeeNumber => {
            if (employeeNumber) {
                return true;
            } else {
                console.log('input your employee number!');
                return false;
            }
        }
    },
    ]).then(answers => {
        console.log(answers);
        const managerObj = new Manager(answers.name, answers.employeeId, answers.email, answers.employeeNumber);
        teamMembers.push(managerObj);
        promptMenu();
    })
}

const promptMenu = () => {
    return inquirer.prompt([{

        type: 'list',
        name: 'menu',
        message: 'please select a option:',
        choices: ['add engineer', 'add intern', 'building my team']
    }
    
    ]

    )
    .then(userchoice => {
    switch (userchoice.menu) {
        case "add engineer":
            promptengieer();
            break;
            case "add intern":
                promptintern();
                break;
            default:
                buildteam();
            }
});
}

const promptengieer = () => {
    console.log('');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'name of the engineer?(REQIRED)',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('enter the employee ID!');
                    return false;
                }
            }    
        },
        {
         type: 'input',
         name: 'email',
         message: 'email address?(REQIRED)',
        validate: email => {
             if (email) {
              return true;
        } else {
             console.log('enter your email address!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'githubname',
    message: 'github user name? (REQIRED)',
   validate: githubname => {
        if (githubname) {
         return true;
   } else {
        console.log('enter your github name!');
       return false;
   }
}
}
]).then(answers => {
    console.log(answers);
    const engineer = new engineer(answers.name, answers.employeeId, answers.email, answers.github);
    teamMembers.push(engineer);
    promptMenu();
})
}

const promptintern = () => {
    console.log('');
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'name of the intern?(REQIRED)',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('enter the interns name!');
                    return false;
                }
            }    
        },
        {
            type: 'input',
            name: 'email',
            message: 'your email address?(REQIRED)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('enter the interns email!');
                    return false;
                }
            }    
        }
    ]).then(answer => {
        console.log(answers);
        const intern = new intern(answers.name, answers.email);
        teamMembers.push(intern);
        promptMenu();
    })
};
const buildteam = () => {
    fs.writeFileSync(outputpath, generatesite(teamMembers), "utf-8");
}

promptManager();
    
