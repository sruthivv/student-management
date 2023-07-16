<template>
    <div class="adminDashboard bg-white">
        <div class="text-center">
            <img class="m-auto" src="https://img.freepik.com/free-vector/happy-women-learning-language-online-isolated-flat-vector-illustration-cartoon-female-characters-taking-individual-lessons-through-messenger-education-digital-technology-concept_74855-10088.jpg?size=626&ext=jpg" >
        </div>
        <div class="d-flex justify-around mt-8">
            <NuxtLink to="/addStudent">
                <button
                  type="submit"
                  class="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add Student
                </button></NuxtLink>
       <NuxtLink to="studentList">
        <button
                  type="submit"
                  class="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  View Students
                </button>
       </NuxtLink>
              
            </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'master'
})

</script>