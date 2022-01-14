<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart :chartInfo="chartData"></bar-chart>
    <line-chart :chartInfo="chartData"></line-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart';
import LineChart from "./components/LineChart";

export default {
  components: {
    BarChart,
    LineChart,
  },
  data() {
    return {
      chartData: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }],
    }
  },
  // created() {
  //   axios.get('charts/line/1')
  //       .then(response => this.chartData = response.data)
  //       .catch(e => console.log(e));
  // }
  // doucumnet.getElementById를 사용했기 때문에 mounted로 한다
  // 인스턴스가 화면에 붙고나서 유효한 쿼리 접근자를 썻기때문에 mounted로

}
</script>

<style scoped>

</style>