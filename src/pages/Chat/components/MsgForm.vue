<template>
  <div style="width:100%">
    <q-input v-model="text" @keyup.enter="submit" filled type="textarea" />
  </div>
</template>
<script>
export default {
  name: "MsgForm",
  data() {
    return {
      text: null
    };
  },
  methods:{
    submit(){
      this.$parent.submit(this.text)
      this.text = ''
    }
  }
};
</script>