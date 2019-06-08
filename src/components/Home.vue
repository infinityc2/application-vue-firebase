<template>
  <v-flex>
    <v-toolbar dark>
      <v-toolbar-title>หน้าแรก</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="signOutAccount">ออกจากระบบ</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-layout row wrap>
      <v-flex xs3>
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>store</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>รายการสินค้า</v-list-tile-title>
          </v-list-tile>
          
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>reorder</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>รายการสั่งซื้อ</v-list-tile-title>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon>credit_card</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>ค่าใช้จ่าย</v-list-tile-title>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon>description</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>แสดงความคิดเห็น</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-flex xs9>
        <Comment></Comment>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import Comment from './customer/Comment'
import Basket from './customer/Basket'
import Bill from './customer/Bill'
import Goods from './customer/Goods'

export default {
  components: {
    Comment,
    Basket,
    Bill,
    Goods
  },
  methods: {
    signOutAccount() {
      this.$store.dispatch('signOutAccount')
    }
  }
}
</script>

