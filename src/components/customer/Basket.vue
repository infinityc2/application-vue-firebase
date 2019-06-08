<template>
  <v-flex column>
    <v-toolbar dark>
      <v-toolbar-title>รายการสั่งซื้อ</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="signOutAccount">ออกจากระบบ</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-layout row>
      <v-flex xs12>
        <v-container>
          <v-card>
            <v-card-title>
              <h3>รายการสั่งซื้อ</h3>
            </v-card-title>
            <v-list v-for="i in 10" :key="i">
              <v-list-tile>
                <v-list-tile-avatar>
                  <v-icon>save</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>Menu price 192</v-list-tile-title>
                <v-list-tile-sub-title>status false</v-list-tile-sub-title>
                <v-list-tile-action>
                  <v-icon>clear</v-icon>
                </v-list-tile-action>
                <v-list-tile-action-text>ลบรายการ</v-list-tile-action-text>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-flex>
</template>
