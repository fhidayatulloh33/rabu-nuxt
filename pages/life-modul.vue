<template>
  <div ref="example-element">{{ counter }}</div>
</template>
<script>
export default {
  data() {
    return {
      counter: 1000,
    };
  },
  created() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  updated() {
    console.log(`At this point, Virtual DOM has re-rendered and patched.`);
    // Fired every second, should always be true
    //console.log(+this.$refs["example-element"].textContent === this.counter);
  },
};
</script>
