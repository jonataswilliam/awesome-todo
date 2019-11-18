<template>
  <q-page class="q-pa-md">
    <q-list bordered separator v-if="Object.keys(tasks).length > 0">
      <Task v-for="(task, key) in tasks" :key="key" :task="task" :id="key"></Task>
    </q-list>
    <q-banner v-else inline-actions rounded class="bg-orange text-white text-center">
      Você não tem nenhuma tarefa cadastrada.
    </q-banner>
    <q-btn round color="primary" size="18px" icon="add" class="absolute-bottom-right q-ma-md" @click="addTaskBar = true">
    <q-dialog v-model="addTaskBar">
      <AddTask @close="closeAddTaskBar"></AddTask>
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
  methods: {
    closeAddTaskBar () {
      this.addTaskBar = false
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
