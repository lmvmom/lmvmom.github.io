var tendayObject = new XMLHttpRequest();
tendayObject.open('GET','//api.openweathermap.org/data/2.5/forecast?id=4759986&appid=1670610962be4ae407619555b640af11&units=imperial',true);

tendayObject.send();

tendayObject.onload = function(){
    var tendayInfo = JSON.parse(tendayObject.responseText);
    console.log(tendayInfo);
    
    document.getElementById('date1').innerHTML = tendayInfo.list[5].dt_txt;
    document.getElementById('day1').innerHTML = tendayInfo.list[5].main.temp;
     document.getElementById('date2').innerHTML = tendayInfo.list[13].dt_txt;
    document.getElementById('day2').innerHTML = tendayInfo.list[13].main.temp;
     document.getElementById('date3').innerHTML = tendayInfo.list[21].dt_txt;
    document.getElementById('day3').innerHTML = tendayInfo.list[21].main.temp;
     document.getElementById('date4').innerHTML = tendayInfo.list[29].dt_txt;
    document.getElementById('day4').innerHTML = tendayInfo.list[29].main.temp;
     document.getElementById('date5').innerHTML = tendayInfo.list[37].dt_txt;
    document.getElementById('day5').innerHTML = tendayInfo.list[37].main.temp;
    
 }//end of the function


