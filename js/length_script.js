////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////KILOMETRE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("kilometre").addEventListener("click", function () {

  document.getElementById("iptext").value="";
  document.getElementById("t_kilometre").innerHTML = "kilometre : ";
  document.getElementById("t_metre").innerHTML = "metre : ";
  document.getElementById("t_centimetre").innerHTML = "centimetre : ";
  document.getElementById("t_millimetre").innerHTML = "millimetre : ";
  document.getElementById("t_mile").innerHTML = "mile : ";
  document.getElementById("t_yard").innerHTML = "yard : ";
  document.getElementById("t_foot").innerHTML = "foot : ";
  document.getElementById("t_inch").innerHTML = "inch : ";

  document.getElementById("dropdownMenuButton").innerHTML = "kilometre";
  document.getElementById("iptext").addEventListener("input", function(){
    ip = document.getElementById("iptext").value;
    console.log(ip);
    unit = ip;
    kilometre = unit;
    metre = unit*1000;
    centimetre = unit*100000;
    millimetre = unit*1000000;
    mile = unit/1.609;
    yard = unit*1094;
    foot = unit*3281;
    inch = unit*39370;
    document.getElementById("t_kilometre").innerHTML = "kilometre : "+kilometre;
    document.getElementById("t_metre").innerHTML = "metre : "+metre;
    document.getElementById("t_centimetre").innerHTML = "centimetre : "+centimetre;
    document.getElementById("t_millimetre").innerHTML = "millimetre : "+millimetre;
    document.getElementById("t_mile").innerHTML = "mile : "+mile;
    document.getElementById("t_yard").innerHTML = "yard : "+yard;
    document.getElementById("t_foot").innerHTML = "foot : "+foot;
    document.getElementById("t_inch").innerHTML = "inch : "+inch;
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////METRE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("metre").addEventListener("click", function () {

  document.getElementById("iptext").value="";
  document.getElementById("t_kilometre").innerHTML = "kilometre : ";
  document.getElementById("t_metre").innerHTML = "metre : ";
  document.getElementById("t_centimetre").innerHTML = "centimetre : ";
  document.getElementById("t_millimetre").innerHTML = "millimetre : ";
  document.getElementById("t_mile").innerHTML = "mile : ";
  document.getElementById("t_yard").innerHTML = "yard : ";
  document.getElementById("t_foot").innerHTML = "foot : ";
  document.getElementById("t_inch").innerHTML = "inch : ";

  document.getElementById("dropdownMenuButton").innerHTML = "metre";
  document.getElementById("iptext").addEventListener("input", function(){
    ip = document.getElementById("iptext").value;
    console.log(ip);
    unit = ip;
    kilometre = unit/1000;
    metre = unit;
    centimetre = unit*100;
    millimetre = unit*1000;
    mile = unit/1609;
    yard = unit*1.094;
    foot = unit*3.281;
    inch = unit*39.37;
    document.getElementById("t_kilometre").innerHTML = "kilometre : "+kilometre;
    document.getElementById("t_metre").innerHTML = "metre : "+metre;
    document.getElementById("t_centimetre").innerHTML = "centimetre : "+centimetre;
    document.getElementById("t_millimetre").innerHTML = "millimetre : "+millimetre;
    document.getElementById("t_mile").innerHTML = "mile : "+mile;
    document.getElementById("t_yard").innerHTML = "yard : "+yard;
    document.getElementById("t_foot").innerHTML = "foot : "+foot;
    document.getElementById("t_inch").innerHTML = "inch : "+inch;
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////CENTIMETRE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("centimetre").addEventListener("click", function () {

  document.getElementById("iptext").value="";
  document.getElementById("t_kilometre").innerHTML = "kilometre : ";
  document.getElementById("t_metre").innerHTML = "metre : ";
  document.getElementById("t_centimetre").innerHTML = "centimetre : ";
  document.getElementById("t_millimetre").innerHTML = "millimetre : ";
  document.getElementById("t_mile").innerHTML = "mile : ";
  document.getElementById("t_yard").innerHTML = "yard : ";
  document.getElementById("t_foot").innerHTML = "foot : ";
  document.getElementById("t_inch").innerHTML = "inch : ";

  document.getElementById("dropdownMenuButton").innerHTML = "centimetre";
  document.getElementById("iptext").addEventListener("input", function(){
    ip = document.getElementById("iptext").value;
    console.log(ip);
    unit = ip;
    kilometre = unit/100000;
    metre = unit/100;
    centimetre = unit;
    millimetre = unit*10;
    mile = unit/160934;
    yard = unit/91.44;
    foot = unit/30.48;
    inch = unit/2.54;
    document.getElementById("t_kilometre").innerHTML = "kilometre : "+kilometre;
    document.getElementById("t_metre").innerHTML = "metre : "+metre;
    document.getElementById("t_centimetre").innerHTML = "centimetre : "+centimetre;
    document.getElementById("t_millimetre").innerHTML = "millimetre : "+millimetre;
    document.getElementById("t_mile").innerHTML = "mile : "+mile;
    document.getElementById("t_yard").innerHTML = "yard : "+yard;
    document.getElementById("t_foot").innerHTML = "foot : "+foot;
    document.getElementById("t_inch").innerHTML = "inch : "+inch;
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////MILLIMETRE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("millimetre").addEventListener("click", function () {

  document.getElementById("iptext").value="";
  document.getElementById("t_kilometre").innerHTML = "kilometre : ";
  document.getElementById("t_metre").innerHTML = "metre : ";
  document.getElementById("t_centimetre").innerHTML = "centimetre : ";
  document.getElementById("t_millimetre").innerHTML = "millimetre : ";
  document.getElementById("t_mile").innerHTML = "mile : ";
  document.getElementById("t_yard").innerHTML = "yard : ";
  document.getElementById("t_foot").innerHTML = "foot : ";
  document.getElementById("t_inch").innerHTML = "inch : ";

  document.getElementById("dropdownMenuButton").innerHTML = "millimetre";
  document.getElementById("iptext").addEventListener("input", function(){
    ip = document.getElementById("iptext").value;
    console.log(ip);
    unit = ip;
    kilometre = unit/1000000;
    metre = unit/1000;
    centimetre = unit/10;
    millimetre = unit;
    mile = unit/1609344;
    yard = unit/914;
    foot = unit/305;
    inch = unit/25.4;
    document.getElementById("t_kilometre").innerHTML = "kilometre : "+kilometre;
    document.getElementById("t_metre").innerHTML = "metre : "+metre;
    document.getElementById("t_centimetre").innerHTML = "centimetre : "+centimetre;
    document.getElementById("t_millimetre").innerHTML = "millimetre : "+millimetre;
    document.getElementById("t_mile").innerHTML = "mile : "+mile;
    document.getElementById("t_yard").innerHTML = "yard : "+yard;
    document.getElementById("t_foot").innerHTML = "foot : "+foot;
    document.getElementById("t_inch").innerHTML = "inch : "+inch;
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////MILE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("mile").addEventListener("click", function () {

  document.getElementById("iptext").value="";
  document.getElementById("t_kilometre").innerHTML = "kilometre : ";
  document.getElementById("t_metre").innerHTML = "metre : ";
  document.getElementById("t_centimetre").innerHTML = "centimetre : ";
  document.getElementById("t_millimetre").innerHTML = "millimetre : ";
  document.getElementById("t_mile").innerHTML = "mile : ";
  document.getElementById("t_yard").innerHTML = "yard : ";
  document.getElementById("t_foot").innerHTML = "foot : ";
  document.getElementById("t_inch").innerHTML = "inch : ";

  document.getElementById("dropdownMenuButton").innerHTML = "mile";
  document.getElementById("iptext").addEventListener("input", function(){
    ip = document.getElementById("iptext").value;
    console.log(ip);
    unit = ip;
    kilometre = unit*1.609;
    metre = unit*1609;
    centimetre = unit*160934;
    millimetre = unit*1609344;
    mile = unit;
    yard = unit*1760;
    foot = unit*5280;
    inch = unit*63360;
    document.getElementById("t_kilometre").innerHTML = "kilometre : "+kilometre;
    document.getElementById("t_metre").innerHTML = "metre : "+metre;
    document.getElementById("t_centimetre").innerHTML = "centimetre : "+centimetre;
    document.getElementById("t_millimetre").innerHTML = "millimetre : "+millimetre;
    document.getElementById("t_mile").innerHTML = "mile : "+mile;
    document.getElementById("t_yard").innerHTML = "yard : "+yard;
    document.getElementById("t_foot").innerHTML = "foot : "+foot;
    document.getElementById("t_inch").innerHTML = "inch : "+inch;
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////YARD
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("yard").addEventListener("click", function () {

  document.getElementById("iptext").value="";
  document.getElementById("t_kilometre").innerHTML = "kilometre : ";
  document.getElementById("t_metre").innerHTML = "metre : ";
  document.getElementById("t_centimetre").innerHTML = "centimetre : ";
  document.getElementById("t_millimetre").innerHTML = "millimetre : ";
  document.getElementById("t_mile").innerHTML = "mile : ";
  document.getElementById("t_yard").innerHTML = "yard : ";
  document.getElementById("t_foot").innerHTML = "foot : ";
  document.getElementById("t_inch").innerHTML = "inch : ";

  document.getElementById("dropdownMenuButton").innerHTML = "yard";
  document.getElementById("iptext").addEventListener("input", function(){
    ip = document.getElementById("iptext").value;
    console.log(ip);
    unit = ip;
    kilometre = unit/1094;
    metre = unit/1.094;
    centimetre = unit*91.44;
    millimetre = unit*914;
    mile = unit/1760;
    yard = unit;
    foot = unit*3;
    inch = unit*36;
    document.getElementById("t_kilometre").innerHTML = "kilometre : "+kilometre;
    document.getElementById("t_metre").innerHTML = "metre : "+metre;
    document.getElementById("t_centimetre").innerHTML = "centimetre : "+centimetre;
    document.getElementById("t_millimetre").innerHTML = "millimetre : "+millimetre;
    document.getElementById("t_mile").innerHTML = "mile : "+mile;
    document.getElementById("t_yard").innerHTML = "yard : "+yard;
    document.getElementById("t_foot").innerHTML = "foot : "+foot;
    document.getElementById("t_inch").innerHTML = "inch : "+inch;
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////FOOT
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("foot").addEventListener("click", function () {

  document.getElementById("iptext").value="";
  document.getElementById("t_kilometre").innerHTML = "kilometre : ";
  document.getElementById("t_metre").innerHTML = "metre : ";
  document.getElementById("t_centimetre").innerHTML = "centimetre : ";
  document.getElementById("t_millimetre").innerHTML = "millimetre : ";
  document.getElementById("t_mile").innerHTML = "mile : ";
  document.getElementById("t_yard").innerHTML = "yard : ";
  document.getElementById("t_foot").innerHTML = "foot : ";
  document.getElementById("t_inch").innerHTML = "inch : ";

  document.getElementById("dropdownMenuButton").innerHTML = "foot";
  document.getElementById("iptext").addEventListener("input", function(){
    ip = document.getElementById("iptext").value;
    console.log(ip);
    unit = ip;
    kilometre = unit/3281;
    metre = unit/3.281;
    centimetre = unit*30.48;
    millimetre = unit*305;
    mile = unit/5280;
    yard = unit/3;
    foot = unit;
    inch = unit*12;
    document.getElementById("t_kilometre").innerHTML = "kilometre : "+kilometre;
    document.getElementById("t_metre").innerHTML = "metre : "+metre;
    document.getElementById("t_centimetre").innerHTML = "centimetre : "+centimetre;
    document.getElementById("t_millimetre").innerHTML = "millimetre : "+millimetre;
    document.getElementById("t_mile").innerHTML = "mile : "+mile;
    document.getElementById("t_yard").innerHTML = "yard : "+yard;
    document.getElementById("t_foot").innerHTML = "foot : "+foot;
    document.getElementById("t_inch").innerHTML = "inch : "+inch;
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////INCH
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("inch").addEventListener("click", function () {

  document.getElementById("iptext").value="";
  document.getElementById("t_kilometre").innerHTML = "kilometre : ";
  document.getElementById("t_metre").innerHTML = "metre : ";
  document.getElementById("t_centimetre").innerHTML = "centimetre : ";
  document.getElementById("t_millimetre").innerHTML = "millimetre : ";
  document.getElementById("t_mile").innerHTML = "mile : ";
  document.getElementById("t_yard").innerHTML = "yard : ";
  document.getElementById("t_foot").innerHTML = "foot : ";
  document.getElementById("t_inch").innerHTML = "inch : ";

  document.getElementById("dropdownMenuButton").innerHTML = "inch";
  document.getElementById("iptext").addEventListener("input", function(){
    ip = document.getElementById("iptext").value;
    console.log(ip);
    unit = ip;
    kilometre = unit/39370;
    metre = unit/39.37;
    centimetre = unit*2.54;
    millimetre = unit*25.4;
    mile = unit/63360;
    yard = unit/36;
    foot = unit/12;
    inch = unit;
    document.getElementById("t_kilometre").innerHTML = "kilometre : "+kilometre;
    document.getElementById("t_metre").innerHTML = "metre : "+metre;
    document.getElementById("t_centimetre").innerHTML = "centimetre : "+centimetre;
    document.getElementById("t_millimetre").innerHTML = "millimetre : "+millimetre;
    document.getElementById("t_mile").innerHTML = "mile : "+mile;
    document.getElementById("t_yard").innerHTML = "yard : "+yard;
    document.getElementById("t_foot").innerHTML = "foot : "+foot;
    document.getElementById("t_inch").innerHTML = "inch : "+inch;
  });
});
