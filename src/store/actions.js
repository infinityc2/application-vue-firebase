import firebase from 'firebase'
import router from '@/router'

export const actions = {
  signInAnonymous ({commit}) {
    commit('setLoading', true)
    firebase.auth().signInAnonymously()
      .then(function() {
        commit('setLoading', false)
        router.push('/goods')
      })
      .catch(error => {
        commit('setError', error.message)
        commit('setLoading', false)
      })
  },
  signInAccount ({commit}, payload) {
    commit('setLoading', true)
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('setUser', user)
        commit('setLoading', false)
        commit('setError', null)
        router.push('/admin')
      })
      .catch(error => {
        commit('setError', error.message)
        commit('setLoading', false)
      })
  },
  autoSignIn ({commit}, payload) {
    commit('setUser', payload)
  },
  signOutAccount ({commit}) {
    firebase.auth().signOut()
    commit('setUser', null)
    router.push('/')
  },
  signUpAccount ({commit}, payload) {
    commit('setLoading', true)
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('setLoading', false)
        commit('setError', null)
      })
      .catch(error => {
        commit('setError', error.message)
        commit('setLoading', false)
      })
  },
  writeComment ({commit}, payload) {
    commit('setLoading', true)
    firebase.database().ref('comment/').set({
      content: payload.content,
      isRecommend: payload.isRecommend
    })
    .catch(error => {
      commit('setError', error.message)
      commit('setLoading', false)
    })
  },
  getMenu ({commit}, payload) {
    commit('setLoading', true)
    firebase.database().ref('menu').on('child_added', snapshot => {
      payload.push({
        ...snapshot.val(),
        id: snapshot.key,
        type: snapshot.child('menuType').val()
      })
    })
    commit('setLoading', false)
  },
  getTable ({commit}, payload) {
    commit('setLoading', true)
    firebase.database().ref('table').on('child_added', snapshot => {
      payload.push({
        ...snapshot.val(),
        id: snapshot.key
      })
    })
    commit('setLoading', false)
  },
  pushBasket ({commit}, payload) {
    commit('setLoading', true)
    payload.basket.push({
      id: payload.menu.id,
      name: payload.menu.name,
      price: payload.menu.price,
      type: payload.menu.type.type
    })
    commit('setLoading', false)
  },
  popBasket ({commit}, payload) {
    commit('setLoading', true)
    var index = payload.basket.findIndex(item => item.id === payload.id)
    payload.basket.splice(index, 1)
    commit('setLoading', false)
  }
}