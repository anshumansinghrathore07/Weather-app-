const fetchWeather = async () => {

	
	
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata';
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': '220b95c01fmshca963f3b4e6cb90p191620jsn8ff182f95b2b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
	  },
	};
  
	try {
	  const response = await fetch(url, options);
	  const data = await response.json(); // Parse response as JSON
  
	  console.log(data);
  
	  // Update HTML elements with weather data
	 
	  cloud_pct.innerHTML = data.cloud_pct;
	  temp.innerHTML = data.temp;
	  feels_like.innerHTML = data.feels_like;
	  humidity.innerHTML = data.humidity;
	  min_temp.innerHTML = data.min_temp;
	  max_temp.innerHTML = data.max_temp;
	  wind_speed.innerHTML = data.wind_speed;
	  wind_degrees.innerHTML = data.wind_degrees;
	   
	  temp2.innerHTML = data.temp;
	  humidity2.innerHTML = data.humidity;
	  wind_speed2.innerHTML = data.wind_speed;
	} catch (error) {
	  console.error(error);
	}
  };
  
  fetchWeather();


  
  

  

  


