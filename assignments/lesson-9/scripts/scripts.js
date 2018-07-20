var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','http://api.openweathermap.org/data/2.5/weather?id=4759986&appid=1670610962be4ae407619555b640af11&units=imperial',true);

weatherObject.send();

weatherObject.onload = function(){
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('highTemp').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('lowTemp').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('currentWind').innerHTML = weatherInfo.wind.speed;
           
    var iconcode = weatherInfo.weather[0].icon;
    var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
  
 }//end of the function

var weatherObject2 = new XMLHttpRequest();
weatherObject2.open('GET','http://api.openweathermap.org/data/2.5/weather?id=4695066&appid=1670610962be4ae407619555b640af11&units=imperial',true);

weatherObject2.send();

weatherObject2.onload = function(){
    var weatherInfo2 = JSON.parse(weatherObject2.responseText);
    console.log(weatherInfo2);
    
    document.getElementById('place2').innerHTML = weatherInfo2.name;
    document.getElementById('currentTemp2').innerHTML = weatherInfo2.main.temp;
     document.getElementById('highTemp2').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('lowTemp2').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('currentWind2').innerHTML = weatherInfo2.wind.speed;
        
    var iconcode2 = weatherInfo2.weather[0].icon;
    var icon_path2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png";
    document.getElementById('weather_icon2').src = icon_path2;

}//end of the function

var weatherObject3 = new XMLHttpRequest();
weatherObject3.open('GET','http://api.openweathermap.org/data/2.5/weather?id=4409896&appid=1670610962be4ae407619555b640af11&units=imperial',true);

weatherObject3.send();

weatherObject3.onload = function(){
    var weatherInfo3 = JSON.parse(weatherObject3.responseText);
    console.log(weatherInfo3);
    
    document.getElementById('place3').innerHTML = weatherInfo3.name;
    document.getElementById('currentTemp3').innerHTML = weatherInfo3.main.temp;
     document.getElementById('highTemp3').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('lowTemp3').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('currentWind3').innerHTML = weatherInfo3.wind.speed;
        
    var iconcode3 = weatherInfo3.weather[0].icon;
    var icon_path3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png";
    document.getElementById('weather_icon3').src = icon_path3;

}//end of the function
