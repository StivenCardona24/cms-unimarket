
<template>
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} - {{ item.price }}
          <button @click="removeItemFromCart(index)">Eliminar</button>
        </li>
      </ul>
    </div>
  </template>
  