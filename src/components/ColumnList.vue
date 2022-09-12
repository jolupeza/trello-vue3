<template>
  <draggable v-model="columns" class="board" item-key="key" group="columns">
    <template #item="{ element }">
      <AppColumn :column="element">
        <CardList :column="element" />
      </AppColumn>
    </template>
  </draggable>
</template>

<script>
import { computed } from "vue";
import { useBoardStore } from "../stores/board";
import draggable from "vuedraggable";
import AppColumn from "@/components/AppColumn.vue";
import CardList from "@/components/CardList.vue";

export default {
  name: "ColumnList",

  components: {
    draggable,
    AppColumn,
    CardList,
  },

  setup() {
    const boardStore = useBoardStore();
    const columns = computed({
      get: () => boardStore.columns,
      set: (value) => boardStore.updateColumns(value),
    });

    return { columns };
  },
};
</script>

<style scoped>
.board {
  min-height: 50vh;
  @apply py-10 flex overflow-x-auto;
}
@media (max-width: 768px) {
  .board {
    flex-wrap: wrap;
    min-height: 100vh;
  }
}
</style>
