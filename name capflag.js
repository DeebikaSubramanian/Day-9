const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function(data)
{
    if(request.status==200)
    {
        let c=JSON.parse(request.responseText);
        c.forEach(function (e)
        {
                       
            console.log(e.name)
            console.log(e.capital)
            console.log(e.flags.svg)
        })}
}