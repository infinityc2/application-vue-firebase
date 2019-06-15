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
      
    </v-container>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      drawer: null
    }
  }
}
</script>
