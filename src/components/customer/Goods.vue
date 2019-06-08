<template>
  <v-layout row>
    <v-flex xs12>
      <v-toolbar dark>
        <v-toolbar-title>รายการสินค้า</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat @click="signOutAccount">ออกจากระบบ</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-container>
        <v-card>
          <v-card-title>รายการสินค้า</v-card-title>
          <v-layout column>
            <v-flex sm3 offset-sm0>
              <v-card v-for="i in 10" :key="i">
                <v-card-media 
                src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                ></v-card-media>
                <v-card-title>Menu</v-card-title>
                <v-card-text>
                  ราคา 49 บาท
                </v-card-text>
                <v-card-actions>
                  <v-btn flat color="green">เลือก</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </v-flex>
  </v-layout>
</template>
