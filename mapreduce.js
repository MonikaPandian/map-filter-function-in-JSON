var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();

request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);

   var totalpop = result.map((ele)=>ele.population);
   console.log(totalpop);

   var final = totalpop.reduce((acc,ele)=>acc+ele);
   console.log(final);

}