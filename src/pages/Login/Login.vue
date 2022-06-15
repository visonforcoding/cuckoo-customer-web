<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Your password *"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      name: "vison.cao",
      password: null
    };
  },
  methods: {
    onSubmit() {
      switch (this.name) {
        case "vison":
          this.logind(101);
          break;
        case "snake":
          this.logind(102);
          break;
        default:
          this.$q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "登录失败"
          });
          this.onReset()
          break;
      }
    },
    logind(uid) {
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "登录成功"
      });
      window.sessionStorage.setItem("token", uid);
      this.$router.push("/chat/0");
    },
    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    }
  }
};
</script>