$("h1").on("mouseover",function(event)
{
$("h1").text("Dont touch me");
setTimeout(function()
{$("h1").text("The jQuery");},1000);

});
