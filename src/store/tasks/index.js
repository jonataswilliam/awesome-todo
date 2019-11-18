import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  tasks: {
    // 'ID1': {
    //   name: 'Go to shop',
    //   completed: false,
    //   dueDate: '2019/05/12',
    //   dueTime: '18:30'
    // },
    // 'ID2': {
    //   name: 'Go to work',
    //   completed: true,
    //   dueDate: '2019/05/13',
    //   dueTime: '08:00'
    // },
    // 'ID3': {
    //   name: 'Go to supermarket',
    //   completed: false,
    //   dueDate: '2019/05/14',
    //   dueTime: '16:00'
    // }
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

const mutations = {
  updateTask (state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },

  deleteTask (state, id) {
    Vue.delete(state.tasks, id)
  },

  addTask (state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const actions = {
  updateTask ({ commit }, payload) {
    commit('updateTask', payload)
  },

  deleteTask ({ commit }, id) {
    commit('deleteTask', id)
  },

  addTask ({ commit }, task) {
    let id = uid()
    let payload = {
      id,
      task
    }
    commit('addTask', payload)
  }

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
