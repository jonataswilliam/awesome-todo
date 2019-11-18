<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Tarefa</div>
      <q-space />
      <q-btn rounded flat icon="close" v-close-popup />
    </q-card-section>

    <q-form @submit.prevent="submitForm()">
      <q-card-section>
        <q-input ref="name" v-model="taskToSubmit.name" autofocus label="Nome" :rules="[val => !!val || 'Campo obrigatório']" clearable clear-icon="close"/>

        <q-input filled v-model="taskToSubmit.dueDate" class="q-my-sm" clearable clear-icon="close">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="taskToSubmit.dueDate" @input="() => $refs.qDateProxy.hide()" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input v-if="taskToSubmit.dueDate" filled v-model="taskToSubmit.dueTime" clearable clear-icon="close">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="taskToSubmit.dueTime" format24h/>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Adicionar" color="primary" type="submit"/>
      </q-card-actions>
    </q-form>
  </q-card>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm () {
      if (!this.$refs.name.hasError) {
        this.submitTask()
      }
    },

    submitTask () {
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    }

  }
}
</script>
<style scoped>

</style>
