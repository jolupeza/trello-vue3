import { board, columns, cards } from "@/seed.js";
import { defineStore } from "pinia";

export const useBoardStore = defineStore("board", {
  state: () => ({
    board,
    columns,
    cards,
  }),
  getters: {
    getBoardName: (state) => state.board.name,
    getCardsByColumns: (state) => (column) =>
      state.cards
        .filter((card) => card.column === column)
        .sort((a, b) => a.order < b.order),
  },
  actions: {
    updateColumns(columns) {
      console.info(columns);
    },
    updateCards(column, cards) {
      console.info(cards);
    },
  },
});
