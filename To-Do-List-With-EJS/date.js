exports.getDate=function()
{
let today=new Date();
let currDay=today.getDay();
let options=
{
  weekday:"long",
  day:"numeric",
  month:"short",

}
return today.toLocaleString("en-US",options);

}
