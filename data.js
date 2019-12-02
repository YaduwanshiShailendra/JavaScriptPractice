
var fs = require('fs');

var restaurants = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

var byCountries = {};
// Write your code below this line
//Below Function is for restaurants by Country
function restaurantsbycountry(){
let countryname;
let count=0;
let bycountry={}
for(let i=0;i<restaurants.length;i++){
  countryname=restaurants[i]['Country']
  for(let j=0;j<restaurants.length;j++){
    if(restaurants[j]['Country']===countryname){
      count++
    }
  }
  if(!bycountry.hasOwnProperty(countryname)){
    bycountry[countryname]=count
  }
  count=0
}
console.log(bycountry)
}
//Below Function is for restaurants per city per country
function restaurantsPerCityPerCountry(){
let countryname;
let cityname
let count=0;
let bycities={};
for(let i=0;i<restaurants.length;i++){
  countryname=restaurants[i]['Country']
  if(!byCountries.hasOwnProperty(countryname))
  {
    byCountries[countryname]={}
  }
  cityname=restaurants[i]['City']
  for(let j=0;j<restaurants.length;j++){
    for(let citi in restaurants[j]){
      if(citi==='City'){
        if(restaurants[j][citi]===cityname){
          count++
        }
      }
    }
  }
  if(!byCountries[countryname].hasOwnProperty(cityname))
  {
  byCountries[countryname][cityname]=count
  }
  count=0
  }
console.log(byCountries)
}
//Below Function is for averageranking of restaurants by country

function averageranking(){
let countryname;
let cityname
let count=0;
let ranking
let totalranking=0
let avgranking=0
let byranking={};
for(let i=0;i<restaurants.length;i++){
  countryname=restaurants[i]['Country']
    for(let j=0;j<restaurants.length;j++){
    if(restaurants[j]['Country']===countryname){
      ranking=restaurants[j]['Ranking']
      totalranking+=ranking
      count++
    }
  }
  avgranking=totalranking/count
  if(!byranking.hasOwnProperty(countryname)){
    byranking[countryname]={}
    byranking[countryname]['averageranking']=avgranking
  }
  totalranking=0
  avgranking=0
  count=0
}
console.log(byranking)
}
restaurantsbycountry()
console.log()
console.log("Below are the no. of restaurants per city per country")
console.log()
restaurantsPerCityPerCountry()
console.log()
console.log("Below are the average ranking of restaurant per country")
console.log()
averageranking()
