<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile :info="itemInfo">
        <router-link slot="username" :to="`/user/${itemInfo.user}`">
          {{itemInfo.user}}
        </router-link>
        <template slot="time">{{ 'Posted ' + itemInfo.time_ago}}</template>
      </user-profile>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="itemInfo.content"></div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import UserProfile from "../components/UserProfile";

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapState(['itemInfo'])
  },
  created() {
    console.log(this.$route);
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEMINFO", itemId);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>