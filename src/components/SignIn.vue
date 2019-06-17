<template>
  <v-layout align-center>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-layout column>
          <v-form @submit.prevent="signInAccount">
            <v-container>
              <v-dialog v-model="dialog" max-width="400">
                <v-card>
                  <v-card-title class="headline">กรุณาเลือกหมายเลขโต๊ะ</v-card-title>
                  <v-card-actions>
                    <v-radio-group v-model="number" row>
                      <v-radio 
                        v-for="table in tables" 
                        :key="table.id"
                        :label="table.number"
                        :value="table.number"
                        >{{table.number}}</v-radio>
                    </v-radio-group>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" flat="flat" @click="signInAnonymous">
                      ตกลง
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-flex xs12 class="text-xs-center" mt-5>
                <h3>เข้าสู่ระบบ</h3>
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
                <v-btn color="white" raised @click="dialog = !dialog">
                  สำหรับลูกค้า 
                </v-btn>
                <v-btn color="green" type="submit" raised @click="signInAccount">
                  เข้าสู่ระบบ
                </v-btn>
              </v-flex>
            </v-container>
          </v-form>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      tables: [],
      dialog: null,
      number: null
    }
  },
  created () {
    this.$store.dispatch('getTable', this.tables)
  },
  computed: {
    error () {
      return this.$store.getters.getError
    },
    loading () {
      return this.$store.getters.getLoading
    }
  },
  methods: {
    signInAccount () {
      this.$store.dispatch('signInAccount', {
        email: this.email,
        password: this.password
      })
    },
    signInAnonymous () {
      this.$store.commit('setTable', this.number)
      this.$store.dispatch('signInAnonymous')
    }
  }
}
</script>

