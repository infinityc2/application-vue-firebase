<template>
  <v-flex>
    <v-toolbar dark>
      <v-toolbar-side-icon @click="drawer = !drawer">
        <v-icon>reorder</v-icon>    
      </v-toolbar-side-icon>
      <v-toolbar-title>แสดงความคิดเห็น</v-toolbar-title>
      <v-spacer></v-spacer>
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
      <v-card>
        <v-form>
          <v-container fluid grid-list-md>
            <v-layout column>
              <v-flex xs12 md4>
                <v-textarea
                v-model="content"
                label="แสดงความคิดเห็น"
                ></v-textarea>
              </v-flex>
              <v-flex xs12 sm6 class="py-2">
                <v-btn-toggle v-model="isRecommend">
                  <v-btn :value="false">
                    <v-icon>thumb_down</v-icon>
                  </v-btn>
                  <v-btn :value="true">
                    <v-icon>thumb_up</v-icon>
                  </v-btn>
                </v-btn-toggle>
              </v-flex>
              <v-alert v-model="alert" dismissible color="green" type="success">
                ส่งความเห็นแล้ว
              </v-alert>
              <v-btn color="blue" raised @click="writeComment">แสดงความคิดเห็น</v-btn>
            </v-layout>
          </v-container>
        </v-form>
      </v-card>
    </v-container>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      content: '',
      isRecommend: null,
      alert: false,
      drawer: null
    }
  },
  methods: {
    writeComment () {
      this.alert = true
      this.$store.dispatch('writeComment', {
        content: this.content,
        isRecommend: this.isRecommend
      })
      this.content = ''
      this.isRecommend = null
    }
  }
}
</script>
