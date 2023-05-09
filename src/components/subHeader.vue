<template>
    <el-menu :class="[
      'py-4',
      'border-b',
      'border-b-spdy-white',
      'flex',
      'justify-around',
      'items-center',
    ]">
      <h1 class="font-bold text-xl text-white">{{ title }}</h1>
    </el-menu>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  };
  </script>