<template>
  <v-layout align-center>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-layout column>
          <v-form @submit.prevent="signInAccount">
            <v-container>
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
                <v-btn color="white" raised @click="signInAnonymous">
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
      password: ''
    }
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
      this.$store.dispatch('signInAnonymous')
    }
  }
}
</script>

