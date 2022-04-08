<script setup lang="ts">
// import SpecialUploader from "./components/special-uploader.vue";
import LogViewer from "./components/LogViewer.vue";
// const randomImg = "https://source.unsplash.com/random";
const logs = [
        {
          id: "1",
          timestamp: 100,
          message: "test message 1",
          method: "test",
        },
        {
          id: "2",
          timestamp: 100,
          message: "test message 2",
          method: "test",
        },
      ]
</script>

<template>
  <header>
    <div class="wrapper">
      <h3>SandBox</h3>
      <log-viewer v-bind:logs="logs"></log-viewer>
    </div>
  </header>
</template>

<style></style>
