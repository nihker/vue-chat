<template>
    <div class="chat container">
      <nav class="nav white">
        <div class="nav-wrapper">
          <router-link :to="{ name: 'Welcome'}">
            <a  class="brand-logo">
              <img class="logo" src="../assets/chat-logo.svg">
            </a>
          </router-link>
        </div>
      </nav>
      <div class="card">
        <div class="card-content">
          <ul class="messages" v-chat-scroll>
            <li v-for="message in messages" :key="message.id">
              <span class="green-text name">{{ message.name }}</span>
              <span class="grey-text text-darken-3 message">{{ message.content }}</span>
              <span class="grey-text time">{{ message.timestamp }}</span>
            </li>
          </ul>
        </div>
        <div class="card-action">
          <NewMessage :name="name" />
        </div>
      </div>
    </div>
</template>

<script>
import NewMessage from "@/components/NewMessage";
import db from "@/firebase/init";
import moment from "moment";
export default {
  name: "Chat",
  props: ["name"],
  components: {
    NewMessage
  },
  data() {
    return {
      messages: []
    };
  },
  created() {
    let ref = db.collection("messages").orderBy("timestamp");

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format("lll")
          });
        }
      });
    });
  }
};
</script>

<style scoped>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}

.chat span {
  font-size: 1.4em;
}

.chat .time {
  display: block;
  font-size: 0.8em;
}

.messages {
  max-height: 300px;
  overflow: auto;
}

.messages::-webkit-scrollbar {
  width: 3px;
}

.messages::-webkit-scrollbar-track {
  background: #ddd;
}

.messages::-webkit-scrollbar-thumb {
  background: #4caf50;
}

.chat .nav {
  margin-top: 20px;
}

.chat .nav .nav-wrapper a{
  margin-left: 20px;
  margin-bottom: -10px;
}

.logo {
  width: 50px;
  margin-top: 6px;
}

</style>
