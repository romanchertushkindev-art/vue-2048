<script setup lang="ts">
defineProps<{
  board: number[][];
}>();
</script>

<template>
  <div class="board">
    <div
      v-for="(row, rowIndex) in board"
      :key="rowIndex"
      class="row"
    >
      <div
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        class="cell"
      >
        {{ cell || '' }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.row {
  display: flex;
  gap: 8px;
}

.cell {
  width: 70px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #cdc1b4;
  border-radius: 6px;

  font-size: 24px;
  font-weight: bold;
}
</style>