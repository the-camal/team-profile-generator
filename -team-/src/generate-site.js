const Employee = require("../team,file/Employee_team");

function generatesite(arr) {
    console.log(arr);
    let template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>profile generator </title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./team.css" />
    
    </head>
    
    <body>
       
    
   `

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
        if(element.getRole() == "Manager") {
            template +=`
            manager html this is the name: ${arr[i].name}`
       
        }else if (element.getRole() == "Engineer") { 
            template +=`
            Engineer html this is the name: ${arr[i].name}`
       
        }else if (element.getRole() == "intern") {
            template +=`
            intern html this is the name: ${arr [i].name}`

        }else if (element.getRole() == "Employee") {
            template +=`
            employee html this is the name: ${arr [i].name}`
        };

        }
    }
template +=`
    </body>
</html>`

    return template

module.exports = generateSite;