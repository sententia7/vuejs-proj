<template>
 <div>
   <list-item></list-item>
 </div>
</template>

<script>
import ListItem from "../components/ListItem";

export default {
  components: {
    ListItem
  },
  // computed: {
  //   // #1
  //   ...mapState(['jobs'])
  //
  //   // #2
  //   ...mapGetters(['fetchedJobs'])
  //
  //   // #3
  //   jobs() {
  //     return this.$store.state.jobs;
  //   }
  //
  //   // #4
  //   ...mapState({
  //     jobs: state => state.jobs
  //   })
  // },
  created() {
    this.$store.dispatch("FETCH_JOBS")
  }
}
</script>

<style scoped>

</style>