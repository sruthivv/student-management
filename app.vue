<template>
	<div>
	<NuxtLayout :name="layout" >
    <NuxtPage />
	</NuxtLayout>
 </div>
	
</template>
<script setup>
const layout = "master"
</script>
