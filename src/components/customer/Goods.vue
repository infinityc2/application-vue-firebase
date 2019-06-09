<template>
  <v-layout row>
    <v-flex xs12>
      <v-toolbar dark>
        <v-toolbar-side-icon>
          <v-icon>keyboard_backspace</v-icon>    
        </v-toolbar-side-icon>
        <v-toolbar-title>รายการสินค้า</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-container>
        <v-card elevation="15">
          <v-card-title>รายการสินค้า</v-card-title>
          <v-container fluid grid-list-md>
            <v-alert v-model="alert" dismissible color="green" type="success" transition="scale-transition">
              เพิ่มรายการแล้ว
            </v-alert>
            <v-layout row wrap>
              <v-card 
                v-for="menu in menus" 
                :key="menu.id" 
                width="200px" 
                height="300px"
                hover>
                <v-img 
                src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                ></v-img>
                <v-card-title>{{ menu.name }}</v-card-title>
                <v-card-text>
                  <p class="body-2">ประเภท {{ menu.type.type }}</p>
                  <p class="body-2">ราคา {{ menu.price }} บาท</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn flat color="green" @click="pushBasket(menu, basket)">เลือก</v-btn>
                </v-card-actions>
              </v-card>
            </v-layout>
          </v-container>
        </v-card>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from 'firebase'
import Vue from 'vue'

var basketDialog = Vue.component('basketDialog', {
  props: ['dialog', 'basket'],
  template: `
    <v-dialog>
      
    </v-dialog>
  `
})

export default {
  components: {
    basketDialog
  },
  data () {
    return {
      menus: [],
      basket: [],
      alert: false,
      dialog: false
    }
  },
  created () {
    this.$store.dispatch('getMenu', this.menus)
  },
  methods: {
    pushBasket (menu, basket) {
      this.$store.dispatch('pushBasket', {
        menu: menu,
        basket: basket
      })
      this.alert = true
    }
  }
}
</script>
