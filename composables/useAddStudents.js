export default ()=>{
    const inputs =reactive ({
       firstName:'',lastName:'',
       course:'',gender:'',dob:''
    })

    const isSuccess =ref(false)

    const showStudentList =ref(false)

    const students =reactive([])
    const saveStudentDetails =(inputs)=>{
        students.push({...inputs})
        isSuccess.value=true
        setTimeout(()=>{
            isSuccess.value=false
        },1000)
        
    }

    const editStudent =(student)=>{
        console.log('hiii')
        for(const key in student){
            inputs[key]=student
        }
        showStudentList.value=false
        console.log('editStudent')
    }

    const deleteStudent = (student)=>{
students.splice(1,index)
console.log('gggggggggggggggg')
    }

    const resetForm =()=>{
       inputs.firstName ='',
       inputs.lastName =''
       inputs.gender =''
       inputs.course =''
       inputs.dob =''
    }

   
     


    return {
        inputs,
        saveStudentDetails,
        resetForm,
        students ,
        isSuccess,
        showStudentList,
        editStudent,
        deleteStudent
    }
}