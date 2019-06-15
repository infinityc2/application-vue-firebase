<template>
  <v-flex column>
    <v-toolbar dark>
      <v-toolbar-side-icon @click="drawer = !drawer">
        <v-icon>reorder</v-icon>    
      </v-toolbar-side-icon>
      <v-toolbar-title>รายการสั่งซื้อ</v-toolbar-title>
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
        <v-list-tile replace append to="/goods">
          <v-list-tile-action>
            <v-icon>group</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>รายการสินค้า</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile replace append to="/bill">
          <v-list-tile-action>
            <v-icon>receipt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>รายการสั่งซื้อ</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile replace append to="/comment">
          <v-list-tile-action>
            <v-icon>feedback</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>แสดงความคิดเห็น</v-list-tile-title>
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

