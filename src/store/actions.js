import firebase from 'firebase'
import router from '@/router'

export const actions = {
  signInAnonymous ({commit}) {
    commit('setLoading', true)
    firebase.auth().signInAnonymously()
      .then(function() {
        commit('setLoading', false)
        router.push('/home')
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
        router.push('/home')
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
  }
}