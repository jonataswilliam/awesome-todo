<template>
  <q-item v-ripple clickable @click="updateTask({id:id, updates: {completed:!task.completed}})" :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'">
    <q-item-section side top>
      <q-checkbox :value="task.completed" class="no-pointer-events"></q-checkbox>
    </q-item-section>
    <q-item-section>
      <q-item-label class="q-item-label" :class="{ 'text-strikethrough' : task.completed }">{{ task.name }}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="18px" class="q-mr-xs"></q-icon>
        </div>
        <div class="column">
          <q-item-label caption class="row justify-end q-item-label">{{ task.dueDate }}</q-item-label>
          <q-item-label caption class="row justify-end q-item-label"><small>{{ task.dueTime }}</small></q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <q-btn @click.stop="popUpDelete(id)" unelevated round color="red" icon="delete" size="10px"/>
    </q-item-section>
  </q-item>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: ['task', 'id'],
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    popUpDelete (id) {
      this.$q.dialog({
        title: 'Atenção',
        message: 'Deseja realmente excluir?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  }
}
</script>
<style scoped>
  .q-item-label {
    user-select: none;
  }

  .text-strikethrough {
    text-decoration: line-through;
  }
</style>
