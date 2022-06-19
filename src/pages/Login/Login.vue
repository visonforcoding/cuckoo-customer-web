<template>
    <div class="q-pa-md" style="max-width: 400px">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input filled v-model="username" label="Your name *" hint="Name and surname" />

            <q-input filled type="password" v-model="pwd" label="Your password *" />

            <div>
                <q-btn label="Submit" type="submit" color="primary" />
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </q-form>
    </div>
</template>
<script>
import service from "@/api/request";
export default {
    name: "login",
    data() {
        return {
            username: "",
            pwd: null,
        };
    },
    methods: {
        onSubmit() {
            service
                .post("/user/hand-login", {
                    username: this.username,
                    pwd: this.pwd,
                })
                .then((response) => {
                    if (response.code !== 0) {
                        this.$q.notify({
                            color: "green-4",
                            textColor: "white",
                            icon: "cloud_done",
                            message: response.msg,
                        });
                    } else {
                        window.sessionStorage.setItem("token", response.data.token);
                        window.sessionStorage.setItem("user",JSON.stringify(response.data));
                        this.$router.push("/chat/0");
                    }
                });
        },
        logind(uid) {
            this.$q.notify({
                color: "green-4",
                textColor: "white",
                icon: "cloud_done",
                message: "登录成功",
            });
        },
        onReset() {
            this.name = null;
            this.age = null;
            this.accept = false;
        },
    },
};
</script>
