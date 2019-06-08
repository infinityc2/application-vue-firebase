<template>
  <v-flex>
    <v-toolbar dark>
      <v-toolbar-title>หน้าแรก</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="signOutAccount">ออกจากระบบ</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-layout column>
      <v-parallax
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-layout
          align-center
          column
          justify-center
        >
          <h1 class="display-2 font-weight-thin mb-3">Vuetify.js</h1>
          <h4 class="subheading">Build your application today!</h4>
          <v-btn raised color="green" append replace to="/goods">เลือกรายการ</v-btn>
        </v-layout>
      </v-parallax>
      <v-container>
        <v-timeline>
          <v-timeline-item
            color="red lighten-2"
            large
          >
            <template v-slot:opposite>
              <span></span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">รายการสินค้า</v-card-title>
              <v-card-text>

              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
            color="red lighten-2"
            large
          >
            <template v-slot:opposite>
              <span></span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">รายการสั่งซื้อ</v-card-title>
              <v-card-text>

              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
            color="red lighten-2"
            large
          >
            <template v-slot:opposite>
              <span></span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">ค่าใช้จ่าย</v-card-title>
              <v-card-text>

              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
            color="red lighten-2"
            large
          >
            <template v-slot:opposite>
              <span></span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">แสดงความคิดเห็น</v-card-title>
              <v-card-text>

              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  methods: {
    signOutAccount() {
      this.$store.dispatch('signOutAccount')
    }
  }
}
</script>

