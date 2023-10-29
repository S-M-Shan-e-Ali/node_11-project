import inquirer from "inquirer";
export { Insert, student, i };
var student = [];
var i = 0;
async function Insert() {
    console.log("\t\tInsert the Student Details.\n");
    var students = {
        id: 10000 + i,
        name: await inquirer.prompt([{
                type: "input",
                name: "Student_name",
                message: "Enter the Student Name\t:"
            }]),
        course: await inquirer.prompt([{
                type: "list",
                name: "Student_courses",
                choices: ["TypeScript", "Html", "Css"],
                message: "Select enroll Courses\t:",
            }]),
        balance: await inquirer.prompt([{
                type: "input",
                name: "Student_fees",
                message: "Enter Course Payment amount"
            }]),
    };
    i = i + 1;
    student.push(students);
    console.log(student);
}
