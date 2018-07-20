  var section = document.querySelector('section');
     
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
        
    request.onload = function(){
    var townData = request.response;
    showTowndata(townData);
    }
     
     function showTowndata(jsonObj) {
      var town = jsonObj['towns'];
     
      for(var i = 0; i < town.length; i++) {
        
        if (i===2) {
            continue;
        }  
        var myArticle = document.createElement('article');  
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');  
        var myList = document.createElement('ul');
          
        myH2.textContent = town[i].name;
        myPara1.textContent = town[i].motto;
        myPara2.textContent = 'Founded in  ' + town[i].yearFounded;
        myPara3.textContent = 'Population:  ' + town[i].currentPopulation;
        myPara4.textContent = 'Average Rainfall:  ' +  town[i].averageRainfall + ' inches';
        myPara5.textContent = 'Events:';  
          
        var eventList = town[i].events;
        for(var j=0; j < eventList.length; j++){
          var listItem = document.createElement('li');
          listItem.textContent = eventList[j];
            myList.appendChild(listItem);
          }
         
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);  
        myArticle.appendChild(myList);
   
        section.appendChild(myArticle);
      }
     }