let request=new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function()
{
    if(request.status==200)
{
    let c=JSON.parse(request.responseText);
var x=c.map((e)=>e.population).reduce((a,c)=>(a+c))
   console.log(x)}
}
