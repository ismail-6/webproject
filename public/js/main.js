const submitBtn = document.getElementById('submitBtn');
const cityName= document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const day = document.getElementById('day');
const today_data = document.getElementById('today_data');


const getInfo = async(event) =>{

  event.preventDefault();
  let cityVal = cityName.value;
 
  if(cityVal===""){
      city_name.innerText = "Plz enter city name";
  }

  else{
    try{
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&APPID=dbd3b02d8958d62185d02e944cd5f522`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      
      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerText = arrData[0].main.temp;


      const tempMood = arrData[0].weather[0].main;
      if(tempMood==="Clear"){
          temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
      }
       else if(tempMood==="Clouds"){
          temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
      }
      
       else if(tempMood==="Rain"){
          temp_status.innerHTML = "<i class='fas fa-cloud-rain'  style='color: #a4b0be;'></i>";
      }
      
       else{
          temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
      }

      const date = new Date();
      const month =["Jan", "Feb", "Mar", "Apr", "May","jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];
      const weekDay =[ 'Mon', 'Tue', 'Wed', 'Thu','Fri','Sat','Sun',];
      day.innerText = weekDay[date.getDay()];
      const date1=`${month[date.getMonth()]}/${date.getFullYear()}`;
      today_data.innerText = date1;




}catch{
           city_name.innerText = "Plz enter the city name properly";
      }
     
  }
}

submitBtn.addEventListener('click',getInfo);