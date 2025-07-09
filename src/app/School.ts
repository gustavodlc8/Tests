type Student = {
    name: string;
    serie: string;
};
let Students: Student[] = [];
function addStudent(Student: Student, Students: Student[]): string {
    const exists = Students.some(s => s.name === Student.name && s.serie === Student.serie);

    if (exists) {
        return "Student already exists";
    } else {
        Students.push({ name: Student.name, serie: Student.serie });
        return "Student added successfully";
    }
}

function removeStudent(Student: Student, Students: Student[]): string {
    const index = Students.findIndex(s => s.name === Student.name && s.serie === Student.serie);
    if (index !== -1) {
        Students.splice(index, 1);
        return "Student removed successfully";
    } else {
        return "Student not found";
    }
}

function listStudents(Students: Student[]): string {
    if (Students.length === 0) {
        return "No students found";
    } else {
        console.log('Listing all students:\n');
        return Students.map(s => `${s.name} - ${s.serie}`).join("\n");
    }
}

function getStudentBySerie(serie: string, Students: Student[]): string {
    const filteredStudents = Students.filter(s => s.serie === serie);
    if (filteredStudents.length === 0) {
        return "No students found in this series";
    } else {
        console.log(`Listing students in series ${serie}:\n`);
        return filteredStudents.map(s => `${s.name} - ${s.serie}`).join("\n");
    }
}
console.log(addStudent({ name: "John Doe", serie: "1A" }, Students));
console.log(addStudent({ name: "Jane Smith", serie: "1B" }, Students));
console.log(addStudent({ name: "John Doe", serie: "1A" }, Students));
console.log(listStudents(Students));
console.log(getStudentBySerie("1A", Students)); 
console.log(getStudentBySerie("2A", Students)); 
console.log(removeStudent({ name: "John Doe", serie: "1A" }, Students)); 
console.log(listStudents(Students)); 