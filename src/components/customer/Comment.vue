<template>
  <v-flex>
    <v-toolbar dark>
      <v-toolbar-title>แสดงความคิดเห็น</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="signOutAccount">ออกจากระบบ</v-btn>
      </v-toolbar-items>
    </v-toolbar>
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
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      content: '',
      isRecommend: null,
      alert: false
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
