//const request = require('request');
const https = require('https');
//const url = 'http://api.weatherstack.com/current?access_key=069848ce4a20f327a563afb545fc29ca&query=37.8267,-122.4233'
//request({url:url,json:true},(err,
// res,body) => {
// const data = res.body;
// console.log(data.current);
//
// })
const url = 'https://api.weatherstack.com/current?access_key=069848ce4a20f327a563afb545fc29ca&query=37.8267,-122.4233'
 const request = https.request(url,response=>{
    let data;
     response.on('data',(chunk)=>{
        data = data + chunk;
     })

     response.on('end',()=>{
          console.log(data);
          })
     })



   request.end()