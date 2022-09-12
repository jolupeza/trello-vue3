<template>
  <img :src="avatar" alt="Avatar" class="w-8 h-8 rounded-full" />
</template>

<script>
import { useUserStore } from "@/stores/user";

export default {
  name: "UserAvatar",

  setup() {
    const userStore = useUserStore();
    const avatar = userStore.getUserAvatar;

    return { avatar };
  },
};
</script>
