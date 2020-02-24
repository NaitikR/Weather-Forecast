const city1 = document.getElementById("city");
const state1 = document.getElementById("state");
const btn2=document.getElementById("btn2");
btn2.addEventListener("click",getChartData)

async function getChartData() {
let cityName=city1.value;
let stateName=state1.value;
var min = [];
var max = [];
var date = [];
var i;
const response2 = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName},${stateName}&units=metric&appid=${apiKey}`);
const responseData2 = await response2.json();
console.log(responseData2);
for(i = 1;i < 40; i++)
{
  min.push(parseInt(responseData2.list[i].main.temp));
  max.push(parseInt(responseData2.list[i].main.humidity));
  date.push(responseData2.list[i].dt_txt);
}
console.log(min,max,date);

var ctx = document.getElementById('canvas123').getContext('2d');
var canvas123 = new Chart(ctx, {
  type: 'line',
  data:{
    labels:date,
    datasets:[
      {
        label:'Temperature',
        data: min,
        fill:false,
        backgroundColor:'rgba(255,0,36,0.8)',
        borderColor:'rgba(255,23,23,1)'
      },
      {
        label:'Humidity',
        data: max,
        fill:false,
        backgroundColor:'rgba(25,22,66,0.2)',
        borderColor:'rgba(25,22,150,0.2)'
      }
    ]
  }
});
return responseData2;
}
