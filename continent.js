let request=new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function() {
    //console.log(data)
 if(request.status==200)
 {
    let c=JSON.parse(request.responseText);
 var x=c.filter((e)=>e.region=="Asia")
 console.log(x)}
}