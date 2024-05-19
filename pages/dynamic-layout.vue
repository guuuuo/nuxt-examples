<template>
    <div>
      <h2>Dynamic Layout</h2>
      <button @click="enableDefaultLayout">Default layout</button>
      <button @click="enableCustomLayout">Custom layout</button>
      <button @click="disableLayout">No layout</button>
    </div>
  </template>

<script setup lang="ts">
function enableDefaultLayout () {
  setPageLayout('default')
}
function enableCustomLayout () {
  setPageLayout('custom')
}
function disableLayout () {
  setPageLayout('')
}
definePageMeta({
    layout: false
})
</script>