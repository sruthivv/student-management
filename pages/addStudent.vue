<template>
  <div class="addStudentWarapper">
    <div v-show="isSuccess">
      <v-alert
    type="success"
    title="Success"
    text="studentDetails added successfully"
  ></v-alert>
    </div>
   
<div v-if="!showStudentList" class="formData">
  <h2 class="text-xl capitalize text-red-300 text-center mb-4">add students details</h2>
  <v-sheet width="600" class="mx-auto">
  <v-form ref="form" class="p-3">
    <v-text-field
      v-model="inputs.firstName"
      :counter="10"
      label="First Name"
    ></v-text-field>
    <v-text-field
      v-model="inputs.lastName"
      :counter="10"
      label="Last Name"
    ></v-text-field>

    <v-select
      v-model="inputs.course"
      :items="courses"
      label="select course"
    ></v-select>

    <v-radio-group inline label="Gender" v-model="inputs.gender" class="m-0">
<v-radio label="Female" value="female"></v-radio>
<v-radio label="Male" value="male"></v-radio>
<v-radio label="Others" value="others"></v-radio>
</v-radio-group>

<div class="px-3">
<label class="text-sm mb-2 text-gray-500 ">DOB</label>
<VueDatePicker v-model="inputs.dob" :enable-time-picker="false">{{ date }}</VueDatePicker></div>
   
    <div class="d-flex float-right mt-4">
      <button
      @click.stop.prevent="showStudentList =true"
              class="flex mr-2 rounded-xl px-4 py-2  items-center justify-center  bg-teal-300 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
      showStudentsList
            </button>
      <button
        @click.stop.prevent="resetForm"
                class="flex mr-2 rounded-xl px-4 py-2  items-center justify-center  bg-red-400 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Reset
              </button>
        <button
        @click.stop.prevent="saveStudentDetails(inputs)"
                class="flex rounded-xl px-4 py-2 ml-4 items-center justify-center  bg-teal-300  text-sm font-semibold text-white shadow-sm hover:bg-teal-500 capitalize focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                save
              </button>
     
    </div>
  </v-form>
</v-sheet>
</div>
<div v-if="showStudentList" class="studentsList bg-white w-100 m-auto">
<div class="d-flex text-center justify-between p-2">
  <h2 class="text-xl capitalize text-slate-700 font-bold text-center mb-4">students details</h2>
  <div
  class="float-right ml-0 left-full top-0 flex w-16 justify-center p-0"
>
  <button
    type="button"
    class="-m-2.5 p-2.5"
   @click.stop.prevent="closePage()"
  >
    <XMarkIcon class="h-6 w-6 text-gray-800" aria-hidden="true" />
  </button>
</div>
</div>
  <template v-if="students.length">
    <div 
								v-for="student in students"
								:key="student.firstName"
								class="listItem cursor-pointer shadow-sm px-3 py-2 d-flex  border-1 border-gray-300 flex items-center space-x-3 rounded-lg border-1 border-slate-300 bg-white hover:border-slate-400"
								
							>
								<div class="flex-shrink-0">
									<img
										class="h-11 w-11 rounded-full"
										src='https://static.vecteezy.com/system/resources/thumbnails/000/550/980/small/user_icon_001.jpg'
										alt=""
									/>
								</div>
								<div class="min-w-0 flex-1 ml-4">
									<div class="focus:outline-none">
										<span class="absolute inset-0" aria-hidden="true" />
										<p class="text-sm font-semibold text-gray-700 capitalize">
											{{ student.firstName || 'no data' }}
										</p>

										<p class="truncate text-xs text-gray-500">
											{{ student.course }}
										</p>
                    <p class="truncate text-xs text-gray-500">
											{{ student.dob }}
										</p>
										<p
											class="truncate text-xxs text-gray-500"
										>
											{{ student.gender }}
										</p>
                    <div class="float-right">
                      <button @click.stop.prevent="editStudent(student)" class="btn bg-red-400 h-8 w-8 text-sm btn-sm rounded-full mr-2"><TrashIcon class="p-2 text-white text-xxs text-md" /></button>
                      <button @click.stop.prevent="deleteStudent(student)" class="btn bg-blue-400 h-8 w-8 text-sm btn-sm rounded-full"><PencilIcon class="p-2 text-white text-xxs" /></button>
                    </div>
                   
									</div>
								</div>
								
							</div>
            </template>
              <div v-else>
                <img  class="m-auto" src="https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-488.jpg" >
              </div>
  </div>
</div>
   

 
</template>
<script setup>
import { PencilIcon, TrashIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
const courses= [
        'course 1',
        'course 2',
        'course 3',
        'course 4',
      ]
      const  nameRules= [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ]



  const { inputs,
        saveStudentDetails,
        resetForm,
        students,
        isSuccess,showStudentList,
        editStudent,
        deleteStudent  }  =useAddStudents()
        const date = ref(); 

        const closePage= ()=>{
  showStudentList.value =false
}

</script>