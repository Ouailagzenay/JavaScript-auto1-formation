fetch('https://api.openweathermap.org/data/2.5/weather?q=larache&appid=5404e57995c1f200ea61e93416cd50d5')




.then(function(reponse){
    return reponse.json()
})
.then(function(data){
console.log(data)
})
