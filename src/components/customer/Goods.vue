<template>
  <v-layout row>
    <v-flex xs12>
      <v-toolbar dark>
        <v-toolbar-side-icon>
          <v-icon>keyboard_backspace</v-icon>    
        </v-toolbar-side-icon>
        <v-toolbar-title>รายการสินค้า</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat @click.stop="dialog = !dialog">
            <v-icon>local_grocery_store</v-icon>สินค้าในตะกร้า
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-dialog v-model="dialog" width="750px">
        <v-card>
          <v-toolbar color="green" dark>
            <v-toolbar-title>สินค้าในตะกร้า</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="dialog = false" color="red">
              <v-icon>clear</v-icon>
            </v-btn>
          </v-toolbar>
          <v-container v-if="this.basket.length === 0">
            <v-flex class="text-md-center">
              <v-icon color="red">report</v-icon>
              <h3 class="font-weight-medium">ไม่มีสินค้าในตะกร้า</h3>
            </v-flex>
          </v-container>
          <v-list two-line v-else>
            <template v-for="item in basket">
              <v-subheader :key="item.id">
                {{ item.name }}
              </v-subheader>
              <v-list-tile :key="item.id">
                <v-list-tile-avatar>
                  <v-img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"></v-img>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>ประเภท {{ item.type }}</v-list-tile-title>
                  <v-list-tile-sub-title>ราคา {{ item.price }} บาท</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-btn flat @click="popBasket(item.id)">
                  <v-icon>clear</v-icon>ลบ
                </v-btn>
              </v-list-tile>
              <v-divider :key="item.id"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-dialog>
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
                  <v-btn flat color="green" @click="pushBasket(menu)">เลือก</v-btn>
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

export default {
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
    pushBasket (menu) {
      this.$store.dispatch('pushBasket', {
        menu: menu,
        basket: this.basket
      })
      this.alert = true
    },
    popBasket (id) {
      var index = this.basket.findIndex(item => item.id === id)
      this.basket.splice(index, 1)
    }
  }
}
</script>
