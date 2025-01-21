 function teperaturetoC(fahrenheit)
   {
    let celsius =((fahrenheit-32)*5/9);
    
    console.log(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);
  }
  teperaturetoC(10)
  teperaturetoC(40)
  teperaturetoC(20)

  function teperaturetoF(celsius)
  {
  let fahrenheit = ((celsius*9/5)+32);
 
  console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
 }
 teperaturetoF(10)
 teperaturetoF(5)
 teperaturetoF(78)

