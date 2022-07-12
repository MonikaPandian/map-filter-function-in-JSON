var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();

request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);

    var currency = result.filter((ele)=>ele.currencies[0].name === "United States dollar");
    console.log(currency);

   var final = currency.map((ele)=>ele.name);
   console.log(final);
}
