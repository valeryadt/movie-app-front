<template>
<div>
  <h1 class="text-navy text-center font-sans">{{message}}</h1>
  <ErrorMessage v-if="error"></ErrorMessage>
</div>
</template>

<script>
import axios from 'axios';
import ErrorMessage from "@/components/ErrorMessage";

export default {
  name: "ApiTest",
  components: {
    ErrorMessage,
  },
  data() {
    return {
      message: '',
      error: false
    }
  },
  mounted() {
    axios
        .get('http://277809.simplecloud.ru/api/health')
        .then((res) => {
          this.message = res.data.response;
        })
        .catch((err) => {
          this.error = true;
        })
  }
}
</script>

<style scoped>

</style>