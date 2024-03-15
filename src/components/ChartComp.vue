<template lang="">
<canvas id="myChart"></canvas>
</template>
<script setup>
import { onMounted } from "@vue/runtime-core";
import {Chart} from "chart.js"

onMounted(() => {
let myChart = new Chart("myChart",
{
  type:"bar",
  data:{
    labels:["label","label2"],
    datasets:[
      {
        type:"bar",
        backgroundColor:["blue","red"],
        data:[4,3]
      },
        //Second Bar (Optional)
      {
        type:"bar",
        data:[2,1],
        backgroundColor:["green","yellow"]
      },
    ]
      },
      options:{
          labels: true,
          responsive:true,
          maintainAspectRatio:true,
          plugins:{
            legend:{
                display:true
              },
              title:{
                display:true
              }
          }
      }
});

//Udate Chart
myChart.data.datasets[0].data[0] = 5;
myChart.update();
})
</script>
<style lang="">
    
</style>