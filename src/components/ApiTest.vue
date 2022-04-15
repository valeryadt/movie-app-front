<template>
<div>
  <h1 class="text-navy text-center font-sans">{{message}}</h1>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ApiTest",
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    axios
        .get('http://277809.simplecloud.ru/health')
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