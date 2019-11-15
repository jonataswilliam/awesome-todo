<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <Task v-for="(task, key) in tasks" :key="key" :task="task" :id="key"></Task>
    </q-list>
    <q-btn round color="primary" size="18px" icon="add" class="absolute-bottom-right q-ma-md" @click="addTaskBar = true">
    <q-dialog v-model="addTaskBar">
      <AddTask></AddTask>
    </q-dialog>
    </q-btn>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import Task from '../components/Task/Task.vue'
import AddTask from '../components/Modal/AddTask.vue'

export default {
  data () {
    return {
      addTaskBar: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  components: { Task, AddTask }
}
</script>

<style scoped>

</style>
