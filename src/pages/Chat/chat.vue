<template>
  <div class="q-pa-md row justify-center">
    <div id="chat-window" style="width: 100%;">
      <template v-for="msg in msgData">
        <q-chat-message
          name="<span class='text-positive'>Trusted Source</span>"
          avatar="https://cdn.quasar.dev/img/avatar3.jpg"
          :text="[msg.body]"
          stamp="7 minutes ago"
          sent
          bg-color="amber-7"
          v-if="msg.send && msg.type=='text'"
          :key="msg.id"
        />
        <q-chat-message
          name="<span class='text-negative'>Jane (untrusted text but trusted name)</span>"
          avatar="https://cdn.quasar.dev/img/avatar5.jpg"
          :text="[
           msg.body,
        ]"
          text-sanitize
          size="6"
          stamp="4 minutes ago"
          text-color="white"
          bg-color="primary"
          :key="msg.id"
          v-else-if="msg.type=='text'"
        />
      </template>
    </div>
    <msgForm />
  </div>
</template>
<script>
import MsgForm from "./components/MsgForm";
import config from "@/config";

export default {
  name: "chat",
  components: {
    MsgForm
  },
  data() {
    return {
      wsClient: null,
      msgData: []
    };
  },
  created() {
    this.initConnection();
  },
  watch: {
    msgData: function(val) {
      var chatWindow = this.$el.querySelector("#chat-window");
      this.$nextTick(() => {
        chatWindow.scrollTop = chatWindow.scrollHeight;
      });
      setTimeout(function() {
        chatWindow.style.overflow = "hidden";
      }, 1000);
    }
  },
  methods: {
    initConnection() {
      const wsuri = config.wsUrl;
      this.wsClient = new WebSocket(wsuri);
      this.wsClient.onmessage = this.websocketonmessage;
      this.wsClient.onopen = this.websocketonopen;
      this.wsClient.onerror = this.websocketonerror;
      this.wsClient.onclose = this.websocketclose;
    },
    websocketonopen() {
      //连接建立之后执行send方法发送数据
      console.log("发送数据");
      let actions = { uid: parseInt(sessionStorage.getItem('token')), type: "auth" };
      this.websocketsend(actions);
    },
    websocketonerror() {
      //连接建立失败重连
      this.initWebSocket();
    },
    websocketonmessage(e) {
      //数据接收
      console.log(e);

      this.msgData.push(JSON.parse(e.data));
    },
    websocketsend(Data) {
      
      //   let data = this.text
      //数据发送
      this.msgData.push(Data);
      let message = JSON.stringify(Data);
      this.wsClient.send(message);
    },
    submit(data) {
      const message = {};
      message["body"] = data;
      message["type"] = "text";
      message["send"] = true;
      message["receiveId"] = this.$route.params.to;
      console.log(this.$route.params.to);
      this.websocketsend(message);
    },
    websocketclose(e) {
      //关闭
      console.log("断开连接", e);
    }
  }
};
</script>
<style scoped>
#chat-window {
  overflow: auto;
  height: calc(100vh - 130px);     
}
</style>