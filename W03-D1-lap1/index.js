"use strict";
exports.__esModule = true;
var Fstudent = {
    id: 1,
    name: "Turki",
    level: "ONE",
    isSenior: true
};
var Sstudent = {
    id: 1,
    name: "Raiyan",
    level: "TWO",
    isSenior: true
};
var Tstudent = {
    id: 1,
    name: "Ali",
    level: "THREE",
    isSenior: true
};
var school = [Fstudent, Sstudent, Tstudent];
function printer() {
    console.log(school);
}
printer();
var Fteacher = {
    id: 1,
    name: "MASHA",
    specialty: "Programing",
    courseNum: 1
};
var Steacher = {
    id: 1,
    name: "HAITHAM",
    specialty: "Programing",
    courseNum: 1
};
var Tteacher = {
    id: 1,
    name: "LAMIA",
    specialty: "Programing",
    courseNum: 1
};
var NamesOfTeachers = [Fteacher, Steacher, Tteacher];
var arrAndObj = school.concat(NamesOfTeachers);
console.log(arrAndObj);
for (var i = 0; i < arrAndObj.length; i++) {
    if (i < 3) {
        console.log("Student:" + arrAndObj[i]);
    }
    else {
        console.log("Teacher:" + arrAndObj[i]);
    }
}
Fstudent.isSenior = true;
console.log(Fstudent.isSenior);
function changeNameOfCourse(num) {
    return Tteacher.courseNum = num;
}
changeNameOfCourse(4);
console.log(Tteacher.courseNum);
