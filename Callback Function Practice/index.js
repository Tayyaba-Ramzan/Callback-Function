//                    Callback Function Practice
// 1) Enrollment Student Data Using Callback Function
var students = [
    { name: "Tayyaba", subject: "TypeScript", feild: "SWE" },
    { name: "Areeba", subject: "Computer Architecture", feild: "ICS" },
    { name: "Hassan", subject: "Python", feild: "BSCS" }
];
var enrollStudents = function (newStudents, callback) {
    setTimeout(function () {
        students.push(newStudents);
        console.log("Student have been Enrolled!");
        callback();
    }, 1000);
};
var getStudents = function () {
    setTimeout(function () {
        students.forEach(function (student) {
            console.log(student);
        });
        console.log("All students have been displayed!");
    }, 1000);
};
var newStudnet = { name: "Faisal", subject: "Machine Learning", feild: "SWE" };
enrollStudents(newStudnet, getStudents);
//                   XXXXXXXXXXXXXXXXXXXXX
// 2) Calculator Using Callback Function
var calculator = function (num1, num2, operation) {
    return operation(num1, num2);
};
var sum = function (num1, num2) {
    return num1 + num2;
};
var sub = function (num1, num2) {
    return num1 - num2;
};
var mul = function (num1, num2) {
    return num1 * num2;
};
var div = function (num1, num2) {
    return num1 / num2;
};
console.log(calculator(10, 5, sum));
console.log(calculator(12, 6, sub));
console.log(calculator(4, 4, mul));
console.log(calculator(16, 2, div));
//                        XXXXXXXXXXXXXXXXXXXXX
// 3) getDataId Using Callback Function
var getDataId = function (id, getNextDataId) {
    setTimeout(function () {
        console.log("Id ".concat(id));
        if (getNextDataId) {
            getNextDataId();
        }
    }, 2000);
};
console.log("Starting getDataId");
console.log("Getting Id 1........");
getDataId(1, function () {
    console.log("Getting Id 2........");
    getDataId(2, function () {
        console.log("Getting Id 3........");
        getDataId(3, function () {
            console.log("Getting Id 4........");
            getDataId(4, function () {
                console.log("Getting Id 5........");
                getDataId(5, function () {
                    console.log("Finished getDataId");
                });
            });
        });
    });
});
//                        XXXXXXXXXXXXXXXXXXXXX
// 4) Student Data Using Callback Function
var getStudentData = function () {
    setTimeout(function () {
        console.log("Api Getting Roll Number....");
        var rollNumber = [1, 2, 3, 4, 5];
        console.log(rollNumber);
        console.log("Api Getting Roll Number (2) BioData!");
        setTimeout(function (rollNumber) {
            var bioData = {
                name: "Muhammad Hassan",
                age: 21,
                gender: "male"
            };
            console.log("My Roll Number is ".concat(rollNumber, ", My Name is ").concat(bioData.name, " & I am ").concat(bioData.age, " years old."));
            setTimeout(function () {
                bioData.gender = "male";
                console.log("My Roll Number is ".concat(rollNumber, ", My Name is ").concat(bioData.name, ", I am ").concat(bioData.age, " years old & I am a ").concat(bioData.gender, "."));
            }, 2000, bioData.name);
        }, 2000, rollNumber[1]);
    }, 2000);
};
getStudentData();
//                        XXXXXXXXXXXXXXXXXXXXX
// 5) Even Program Using Callback Function
function filterArray(arr, callback) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
var isEven = function (num) {
    return num % 2 === 0;
};
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = filterArray(numbers, isEven);
console.log(result);
//                        XXXXXXXXXXXXXXXXXXXXX
