<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import GameBoard from './components/GameBoard.vue';
import { use2048 } from './composables/use2048';

const {
  board,
  score,
  moveLeft,
  createBoard,
} = use2048();

function handleKey(event: KeyboardEvent) {
  switch (event.key) {
    case 'ArrowLeft':
      moveLeft();
      break;
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKey);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKey);
});
</script>

<template>
  <div class="container">
    <h1>2048</h1>

    <p>Очки: {{ score }}</p>

    <button @click="createBoard">
      Новая игра
    </button>

    <GameBoard :board="board" />
  </div>
</template>

<style>
.container {
  padding: 20px;
  font-family: Arial, sans-serif;
}
</style>