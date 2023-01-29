interface Student
{
    id: number
    name: String
    level: string
    isSenior: boolean
}
let Fstudent: Student = 
{
    id: 1,
    name: "Turki",
    level: "ONE",
    isSenior: true,
}
let Sstudent: Student = 
{
    id: 1,
    name: "Raiyan",
    level: "TWO",
    isSenior: true,
}
let Tstudent: Student = 
{
    id: 1,
    name: "Ali",
    level: "THREE",
    isSenior: true,
}
let school: Object[] = 
[Fstudent,Sstudent,Tstudent]
function printer()
{
    console.log(school);
}
printer() 
interface Teacher 
{
    id: number
    name: String
    specialty : string
    courseNum: Number
}
let Fteacher: Teacher =
{
    id: 1,
    name: "MASHA",
    specialty : "Programing",
    courseNum: 1,
}
let Steacher: Teacher =
{
    id: 1,
    name: "HAITHAM",
    specialty : "Programing",
    courseNum: 1,
}
let Tteacher: Teacher =
{
    id: 1,
    name: "LAMIA",
    specialty : "Programing",
    courseNum: 1,
}


type TeachersNames = Teacher;
let NamesOfTeachers: TeachersNames[] =
 [Fteacher,Steacher,Tteacher]

let arrAndObj: Object[] = 
school.concat(NamesOfTeachers)
console.log(arrAndObj);


for (let i = 0; i < arrAndObj.length; i++)
 {
    if(i < 3){
        console.log("Student:" + arrAndObj[i]);
    }else{
        console.log("Teacher:" + arrAndObj[i]);
    }  
}

Fstudent.isSenior = true
console.log(Fstudent.isSenior);


function changeNameOfCourse(num:Number) {
    return Tteacher.courseNum = num
}
changeNameOfCourse(4)
console.log(Tteacher.courseNum);

export{}