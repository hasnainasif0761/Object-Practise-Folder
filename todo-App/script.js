var students = JSON.parse(localStorage.getItem('students')) || [];

if(document.getElementById('tbody')){
    showstudent();
}

function addStudent(){
    var name = document.getElementById('name').value;
    var roll = document.getAnimations('roll').value;

    if(name == "" || roll == ""){
        alert('Please fill all Input Field');
        return;
    }

    for(let i = 0; i < students.length;i++){
        if(student[i].roll == roll){
            alert('⚠️ Roll Number is Already exists');
            return;
        }
    }

    var student = {
        name:name,
        roll:roll
    }

    students.push(student);
    localStorage.setItem('students',JSON.stringify(students));

    alert('Student Submit Successfully 🎉🎉');

    document.getElementById('name').value = "";
    document.getElementById('roll').value = "";
}



