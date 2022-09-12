<template>
  <div class="flex flex-col items-center | relative">
    <div class="flex order-1 items-center">
      <div>
        <h1
          contenteditable
          @blur="editName"
          class="text-gray-700 font-semibold font-sans tracking-wide text-3xl text-center"
        >
          {{ boardStore.getBoardName }}
        </h1>
        <a
          @click="createColumn"
          href="#"
          class="ml-2 text-sm block text-center mt-3"
          >Create column</a
        >
      </div>
    </div>
    <div
      class="flex order-0 md:order-2 items-center mb-3 md:mb-0 md:absolute right-0 top-0"
    >
      <a @click="changeBackground" href="#" class="mr-2 text-sm"
        >Change background</a
      >
      <input
        type="search"
        v-model="searchTerm"
        class="bg-gray-300 rounded p-1 text-gray-600 text-sm mr-3"
        placeholder="Search cards"
      />
      <UserAvatar />
      <a @click="userLogout" href="#" class="ml-2 text-sm">Logout</a>
    </div>
  </div>
</template>

<script>
import { useBoardStore } from "@/stores/board";
import { useUserStore } from "@/stores/user";
import UserAvatar from "@/components/UserAvatar.vue";
import router from "@/router";

export default {
  name: "NavBar",

  setup() {
    const userStore = useUserStore();
    const boardStore = useBoardStore();
    async function userLogout() {
      try {
        await userStore.userLogout();
        router.push("/");
      } catch (e) {
        console.error(e);
      }
    }

    return { boardStore, userLogout };
  },

  data() {
    return {
      searchTerm: null,
    };
  },

  components: {
    UserAvatar,
  },
};
</script>
