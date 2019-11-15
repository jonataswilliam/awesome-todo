<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn rounded flat icon="close" v-close-popup />
    </q-card-section>

    <q-card-section>
      <q-input v-model="text" label="Task" />
      <div class="q-pa-md">
        <div class="q-gutter-md">
          <q-time v-model="time" />
        </div>
      </div>
      <div class="q-pa-md">
        <div class="q-gutter-md row items-start">
          <q-date v-model="date" />
        </div>
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="Save" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>
<script>
export default {
  data () {
    return {
      time: '',
      text: '',
      date: ''
    }
  }
}
</script>
<style scoped>

</style>
