<template>
  <div class="profile">
    <h1>User profile</h1>
    <div class="profile" v-if="user">
      <span v-if="user">{{`${user.name.title || ''} ${user.name.first} ${user.name.last}`}}</span>
      <img style="width: 200px" :src="user.picture.large" :alt="user.name.first">
    </div>
    
    <h2>
      Select date to start
    </h2>

    <span @click="togglePicker($event)">
      Show picker
    </span>
    <date-picker v-if="showPicker" />
  </div>
</template>

<script>
import * as UserService from '@/services/UserService';

export default {
  name: 'user-profile',
  components: {
    'date-picker': () => import(/* webpackChunkName: "date-picker" */'@/components/DatePicker.vue'),
  },
  data() {
    return {
      user: null,
      showPicker: false,
    }
  },
  async created() {
    const response = await UserService.getUsers();
    this.user = response.data.results[0];
  },
  methods: {
    togglePicker() {
      this.showPicker = !this.showPicker;
    },
  },
};
</script>

<style lang="scss">
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
