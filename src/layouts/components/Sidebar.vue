<template>
  <div class="q-pa-md q-gutter-y-md">
    <div class="q-gutter-sm">
      <q-chip>
        <q-avatar color="red" text-color="white">50</q-avatar>
        Emails
      </q-chip>
      <q-chip>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        vison
      </q-chip>
    </div>

    <q-item clickable v-ripple>
      <q-item-section side>
        <q-avatar rounded size="48px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
          <q-badge floating color="teal">new</q-badge>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>Snake</q-item-label>
        <q-item-label caption>2 new messages</q-item-label>
      </q-item-section>
      <q-item-section side>
        3 min ago
      </q-item-section>
    </q-item>    
    <q-item to="/chat/101" clickable v-ripple>
      <q-item-section side>
        <q-avatar rounded size="48px">
          <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
          <q-badge floating color="teal">new</q-badge>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>Vison</q-item-label>
        <q-item-label caption>2 new messages</q-item-label>
      </q-item-section>
      <q-item-section side>
        3 min ago
      </q-item-section>
    </q-item>
  </div>
</template>
<script>
export default {
  name: 'Sidebar'
}
</script>