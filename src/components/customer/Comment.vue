<template>
  <v-form>
    <v-container>
      <v-layout column>
        <v-flex xs12 md4>
          <v-text-field
          v-model="content"
          :counter="100"
          label="Comment"
          ></v-text-field>
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
