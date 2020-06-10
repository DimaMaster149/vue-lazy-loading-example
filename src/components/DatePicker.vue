<template>
  <div>
    <VueCtkDateTimePicker v-model="date" format="YYYY-MM-DD hh:mm"/> 
    Date formatted with dayjs: {{formattedDate}}
  </div>
</template>

<script>
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import dayjs from 'dayjs'

export default {
  name: 'date-picker',
  components: {
    'VueCtkDateTimePicker': VueCtkDateTimePicker
  },
  data() {
    return {
      date: '',
      formattedDate: '',
    };
  },
  watch: {
    date(date) {
      console.log(date, 'date')
      this.formattedDate = dayjs(date).format("YYYY-MM-DD HH:mm:ss");
    },
  }
};
</script>