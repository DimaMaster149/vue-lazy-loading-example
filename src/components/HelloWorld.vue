<template>
  <div>
    <span @click="showFirstTab"> first tab</span>
    <span @click="showSecondTab"> second tab</span>
    <keep-alive>
      <component :is="asyncComponent"/>
    </keep-alive>
  </div>
</template>

<script>
const TestFirst = () => import('@/components/TestFirst.vue');
const TestSecond = () => import('@/components/TestSecond.vue');

export default {
  data() {
    return {
      asyncComponent: TestFirst,
    };
  },
  methods: {
    showFirstTab() {
      this.asyncComponent = TestFirst;
    },
    showSecondTab() {
      this.asyncComponent = TestSecond;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
