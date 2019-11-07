<template>
  <div>
    <h1>Home</h1>
    <div v-for="user in users" :key="user.id">
        <span>{{ user.first_name }} {{ user.last_name }}</span>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',

  computed: {
      ...mapState('users', ['users'])
  },

  created(){
     this.getTheUsers()
  },

  methods: {
      ...mapActions('users', ['getTheUsers'])
  }
}
</script>

<style scoped>

</style>
