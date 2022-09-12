// import { user } from "@/seed.js";
import { defineStore } from "pinia";
import { auth } from "@/firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const useUserStore = defineStore("user", {
  state: () => ({ user: null }),
  getters: {
    getUserAvatar: (state) => state.user && state.user.photoURL,
  },
  actions: {
    setUser(user) {
      this.user = user;
    },
    getUser() {
      return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
          this.setUser(user);
          resolve(user);
        });
      });
    },
    async userLogin() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    },
    async userLogout() {
      await signOut(auth);
    },
  },
});
