<template>
  <v-flex>
    <v-toolbar dark>
      <v-toolbar-side-icon @click="drawer = !drawer">
        <v-icon>reorder</v-icon>    
      </v-toolbar-side-icon>
      <v-toolbar-title>ระบบจัดการพนักงาน</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="signOutAccount">ออกจากระบบ</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      dark
    >
      <v-list class="pt-0" dense>
        <v-list-tile replace append to="/account">
          <v-list-tile-action>
            <v-icon>group</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>ระบบจัดการพนักงาน</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile replace append>
          <v-list-tile-action>
            <v-icon>shop</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>รายการสั่งซื้อของลูกค้า</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-container>
      <v-tabs fixed-tebs>
        <v-tab>เพิ่มพนักงาน</v-tab>
      <v-tab-item>
        <formAccount :email="email" :password="password"></formAccount>
      </v-tab-item>
      <v-tab>แสดงพนักงาน</v-tab>
      <v-tab-item>
        <displayAccount></displayAccount>
      </v-tab-item>
      </v-tabs>
    </v-container>
  </v-flex>
</template>

<script>
import Vue from 'vue'

var formAccount = Vue.component('formAccount', {
  props: ['email', 'password'],
  template: `
    <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-layout column>
        <v-form>
          <v-container>
            <v-flex xs12 class="text-xs-center" mt-5>
              <h3>เพิ่มพนักงาน</h3>
            </v-flex>
            <v-flex xs12>
            <v-text-field
              v-model="email"
              name="email"
              label="Email"
              id="email"
              type="email"
              required></v-text-field>
            </v-flex>
            <v-flex xs12>
            <v-text-field
              v-model="password"
              name="password"
              label="Password"
              id="password"
              type="password"
              required></v-text-field>
            </v-flex>
            <v-flex>
              <v-btn color="green" type="submit" raised @click.stop="dialog = true">
                เพิ่มพนักงาน
              </v-btn>
            </v-flex>
            <v-dialog v-model="dialog" max-width="290">
              <v-card>
                <v-card-title class="headline">ยืนยันการเพิ่มพนักงาน</v-card-title>
                <v-card-text>ต้องการเพิ่มพนักงานหรือไม่?</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" flat="flat" @click="dialog = false">
                    ยกเลิก
                  </v-btn>
                  <v-btn color="green darken-1" flat="flat" @click="signUpAccount">
                    ตกลง
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-container>
        </v-form>
      </v-layout>
    </v-card>
  </v-flex>
  `,
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    signUpAccount () {
      this.$store.dispatch('signUpAccount', {
        email: this.$props.email,
        password: this.$props.password
      })
      this.dialog = false
    }
  }
})
var displayAccount = Vue.component('displayAccount', {
  template: `
    <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-card-title>
          <h3>พนักงาน</h3>
        </v-card-title>
        <v-list v-for="i in 10" :key="i">
          <v-list-tile>
            <v-list-tile-title>Employee</v-list-tile-title>
            <v-list-tile-action>
              <v-icon>clear</v-icon>
            </v-list-tile-action>
            <v-list-tile-action-text>ลบพนักงาน</v-list-tile-action-text>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
  `
})
export default {
  components: {
    formAccount,
    displayAccount
  },
  data () {
    return {
      email: '',
      password: '',
      drawer: null
    }
  },
  methods: {
    signOutAccount () {
      this.$store.dispatch('signOutAccount')
    }
  }
}
</script>

