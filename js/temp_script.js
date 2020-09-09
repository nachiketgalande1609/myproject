////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////CELSIUS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("celsius").addEventListener("click", function () {

  document.getElementById("iptext").value="";
  document.getElementById("t_celsius").innerHTML = "celsius : ";
  document.getElementById("t_fahrenheit").innerHTML = "fahrenheit : ";
  document.getElementById("t_kelvin").innerHTML = "kelvin : ";


  document.getElementById("dropdownMenuButton").innerHTML = "celsius";
  document.getElementById("iptext").addEventListener("input", function(){
    ip = document.getElementById("iptext").value;
    console.log(ip);
    unit = ip;
    celsius = parseFloat(unit);
    fahrenheit = (parseFloat(unit)*9/5)+32;
    kelvin = parseFloat(unit)+273.15;

    document.getElementById("t_celsius").innerHTML = "celsius : "+celsius;
    document.getElementById("t_fahrenheit").innerHTML = "fahrenheit : "+fahrenheit;
    document.getElementById("t_kelvin").innerHTML = "kelvin : "+kelvin;

  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////FAHRENHEIT
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("fahrenheit").addEventListener("click", function () {

  document.getElementById("iptext").value="";
  document.getElementById("t_celsius").innerHTML = "celsius : ";
  document.getElementById("t_fahrenheit").innerHTML = "fahrenheit : ";
  document.getElementById("t_kelvin").innerHTML = "kelvin : ";


  document.getElementById("dropdownMenuButton").innerHTML = "fahrenheit";
  document.getElementById("iptext").addEventListener("input", function(){
    ip = document.getElementById("iptext").value;
    console.log(ip);
    unit = ip;
    celsius = (parseFloat(unit)-32)*5/9;
    fahrenheit = parseFloat(unit);
    kelvin = parseFloat(celsius)+273.15;

    document.getElementById("t_celsius").innerHTML = "celsius : "+celsius;
    document.getElementById("t_fahrenheit").innerHTML = "fahrenheit : "+fahrenheit;
    document.getElementById("t_kelvin").innerHTML = "kelvin : "+kelvin;

  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////KELVIN
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("kelvin").addEventListener("click", function () {

  document.getElementById("iptext").value="";
  document.getElementById("t_celsius").innerHTML = "celsius : ";
  document.getElementById("t_fahrenheit").innerHTML = "fahrenheit : ";
  document.getElementById("t_kelvin").innerHTML = "kelvin : ";


  document.getElementById("dropdownMenuButton").innerHTML = "kelvin";
  document.getElementById("iptext").addEventListener("input", function(){
    ip = document.getElementById("iptext").value;
    console.log(ip);
    unit = ip;
    celsius = parseFloat(unit)-273.15;
    fahrenheit = (parseFloat(unit)-273.15)*9/5+32;
    kelvin = parseFloat(unit);

    document.getElementById("t_celsius").innerHTML = "celsius : "+celsius;
    document.getElementById("t_fahrenheit").innerHTML = "fahrenheit : "+fahrenheit;
    document.getElementById("t_kelvin").innerHTML = "kelvin : "+kelvin;

  });
});
