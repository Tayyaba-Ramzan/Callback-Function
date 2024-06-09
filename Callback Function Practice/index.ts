//                    Callback Function Practice

// 1) Enrollment Student Data Using Callback Function

let students=[
    {name:"Tayyaba",subject:"TypeScript",feild:"SWE"},
    {name:"Areeba",subject:"Computer Architecture",feild:"ICS"},
    {name:"Hassan",subject:"Python",feild:"BSCS"}
]
let enrollStudents=(newStudents,callback)=>{
    setTimeout(() => {
        students.push(newStudents);
        console.log("Student have been Enrolled!");
        callback();
    }, 1000);

}
let getStudents=()=>{
    setTimeout(() => {
        students.forEach(student => {
            console.log(student);

        });
        console.log("All students have been displayed!");

    }, 1000);
}
let newStudnet={name:"Faisal",subject:"Machine Learning",feild:"SWE"};
enrollStudents(newStudnet,getStudents);

//                   XXXXXXXXXXXXXXXXXXXXX

// 2) Calculator Using Callback Function

let calculator=(num1,num2,operation)=>{
    return operation(num1,num2);


}
let sum=(num1,num2)=>{
    return num1+num2;


}
let sub=(num1,num2)=>{
    return num1-num2;
}

let mul=(num1,num2)=>{
    return num1*num2;

}
let div=(num1,num2)=>{
    return num1/num2;

}
console.log(calculator(10,5,sum));
console.log(calculator(12,6,sub));
console.log(calculator(4,4,mul));
console.log(calculator(16,2,div));

//                        XXXXXXXXXXXXXXXXXXXXX

// 3) getDataId Using Callback Function

let getDataId = (id, getNextDataId) => {
    setTimeout(() => {
        console.log(`Id ${id}`);
        if (getNextDataId) {
            getNextDataId();
        }
    }, 2000);

}
console.log("Starting getDataId");
console.log("Getting Id 1........");
getDataId(1, () => {
    console.log("Getting Id 2........");
    getDataId(2, () => {
        console.log("Getting Id 3........");
        getDataId(3, () => {
            console.log("Getting Id 4........");
            getDataId(4, () => {
                console.log("Getting Id 5........");
                getDataId(5, () => {
                    console.log("Finished getDataId");


                })
            })
        })
    })
})

//                        XXXXXXXXXXXXXXXXXXXXX

// 4) Student Data Using Callback Function

let getStudentData = () => {
    setTimeout(() => {
        console.log("Api Getting Roll Number....");
        let rollNumber = [1, 2, 3, 4, 5];
        console.log(rollNumber);
        console.log("Api Getting Roll Number (2) BioData!");
        setTimeout((rollNumber) => {
            let bioData = {
                name: "Muhammad Hassan",
                age: 21,
                gender:"male"
                
            }
            console.log(`My Roll Number is ${rollNumber}, My Name is ${bioData.name} & I am ${bioData.age} years old.`);
            setTimeout(() => {
                bioData.gender="male";
                console.log(`My Roll Number is ${rollNumber}, My Name is ${bioData.name}, I am ${bioData.age} years old & I am a ${bioData.gender}.`);
                
            }, 2000,bioData.name);

        }, 2000, rollNumber[1]);

    }, 2000);

}
getStudentData();

//                        XXXXXXXXXXXXXXXXXXXXX

// 5) Even Program Using Callback Function

function filterArray(arr, callback) {
    let result:number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
let isEven=(num)=>{
    return num%2===0;

}
let numbers=[1,2,3,4,5,6,7,8,9,10];
let result=filterArray(numbers,isEven);
console.log(result);

//                        XXXXXXXXXXXXXXXXXXXXX