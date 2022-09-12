<template>
  <div
    class="column | p-3 mb-4 md:mb-0 md:mr-4 | rounded bg-gray-100 cursor-move"
  >
    <div class="flex justify-between">
      <a
        v-show="emptyColumn"
        @click="deleteColumn"
        class="text-sm text-right block text-gray-600"
        href="#"
        >Delete</a
      >
      <a
        @click="createCard"
        class="text-sm text-right block text-gray-600"
        href="#"
        >Create Card</a
      >
    </div>
    <h3
      contenteditable
      @blur="onEdit"
      class="mb-3 | text-gray-700 font-semibold font-sans tracking-wide text-xl text-center"
    >
      {{ column.name }}
    </h3>
    <!-- Card -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AppColumn",

  props: {
    column: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.column {
  flex-basis: 25%;
  min-width: 16rem;
}
@media (max-width: 768px) {
  .column {
    flex-basis: 100%;
  }
}
</style>
