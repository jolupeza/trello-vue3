<template>
  <div v-if="!user">
    <div class="container">
      <a
        @click="userLogin"
        class="w-full h-screen | flex justify-center items-center | underline"
        href="#"
        >Login please</a
      >
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/user";

export default {
  name: "AuthView",

  setup() {
    const userStore = useUserStore();
    const user = userStore.user;

    return { userStore, user };
  },

  methods: {
    async userLogin() {
      try {
        await this.userStore.userLogin();
        this.$router.push("/board");
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
