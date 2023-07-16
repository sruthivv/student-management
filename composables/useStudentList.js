export default async()=>{


    const { data: students } = await useFetch('http://localhost/8000/api/students')
console.log(students,'hhhhhhhhhhh')

    return {
        students
    }
}