<template></template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      text: "",
      response: "",
      url: {
        post: "http://localhost:3001/s",
      },
      info: "",
    };
  },
  methods: {
    async redirect() {
      const id = this.$route.params.id;
      console.log("frontend params id: " + id);
      try {
        const response = await axios({
          method: "post",
          url: this.url.post,
          headers: {
            "Content-Type": "application/json",
          },
          data: { text: id },
        });
        this.info = response.data;
        window.location = this.info;
        console.log("response from Backend: " + this.info);
      } catch (myError) {
        console.log(myError);
        console.log("Unsuccesfful");
        this.info = "";
      }
    },
    async submit() {},
  },
  created() {
    this.redirect();
  },
};
</script>

<style></style>
