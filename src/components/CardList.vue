<template>
  <draggable v-model="cards" group="cards" item-key="id">
    <template #item="{ element }">
      <BoardCard :card="element" />
    </template>
  </draggable>
</template>

<script>
import { computed } from "vue";
import { useBoardStore } from "@/stores/board";
import draggable from "vuedraggable";
import BoardCard from "@/components/BoardCard.vue";

export default {
  name: "CardList",

  props: {
    column: {
      type: Object,
    },
  },

  components: {
    draggable,
    BoardCard,
  },

  setup(props) {
    const boardStore = useBoardStore();
    const cards = computed({
      get: () => boardStore.getCardsByColumns(props.column.id),
      set: (value) => boardStore.updateCards(props.column, value),
    });

    return {
      cards,
    };
  },
};
</script>
