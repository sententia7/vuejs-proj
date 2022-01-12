<template>
 <div>
   <list-item></list-item>
 </div>
</template>

<script>
import ListItem from "../components/ListItem";
import ListMixin from "../mixins/ListMixin";

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
  mixins: [ListMixin],
}
</script>

<style scoped>

</style>