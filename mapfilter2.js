var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();

request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);

var cpopu = result.filter((ele)=>ele.population < 200000)
    console.log(cpopu);


   var final = cpopu.map((ele)=>ele.name);
   console.log(final);
}
