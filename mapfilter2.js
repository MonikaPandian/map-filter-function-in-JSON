var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();

request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);

var cpopu = result.filter((ele)=>ele.population < 200000)
    console.log(cpopu);


   var final = cpopu.map((ele)=>ele.name);
   console.log(final);
}
