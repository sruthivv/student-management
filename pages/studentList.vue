<template>
    <div>
      <div v-if="students.length">
        <ul role="list" class="grid grid-cols-1 gap-2 sm:grid-cols-1 lg:grid-cols-1">
      <li v-for="person in students" :key="person.firstName" class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
        <div class="flex items-center justify-between space-x-6 p-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="truncate text-sm font-medium text-gray-900">{{ person.lastName }}</h3>
              <span class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{{ person.role }}</span>
            </div>
            <p class="mt-1 truncate text-sm text-gray-500">{{ person.gender }}</p>
          </div>
          <img class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src="https://i.pravatar.cc/300" alt="" />
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="flex w-0 flex-1">
              <a  class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                <PencilIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                edit
              </a>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a  class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                <TrashIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                delete
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
      </div>
      
      <div v-else>
                <img  class="m-auto" src="https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-488.jpg" >
              </div>
    </div>
   
  </template>
  
  <script setup>
import { PencilIcon, TrashIcon } from '@heroicons/vue/24/outline';

  definePageMeta({
    layout:'master'
  })
  
const {students} =useAddStudents()

console.log(students,'lllllll')
  </script>
  