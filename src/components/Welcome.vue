<template>

<div class="welcome container">
  <div class="logos">
    <img class="logo" src="../assets/chat-logo.svg">
  </div>
  <div class="card">
    <div class="card-content center-align">
      <h2 class="green-text">Welcome</h2>
      <form @submit.prevent="enterChat">
        <input type="text" name="name" v-model="name" placeholder="Please enter you name">
        <div class="red-text" v-if="feedback">{{ feedback }}</div>
        <button class="btn green pulse">Enter Chat</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat () {
      if (this.name) {
        this.$router.push({
          name: 'Chat',
          params: { name: this.name }
        })
      } else {
        this.feedback = 'You must enter a name to join'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  max-width: 400px;
}

.welcome h2 {
  font-size: 3rem;
}

.welcome .btn {
  margin-top: 30px;
}

.logos {
  text-align: center;
  margin-top: 60px;
}

.logo {
  height: 20vh;
  margin: 10px 20px;
}
</style>
