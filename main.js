var password = "gerard";
var response;
var entryCount = 0;
var entryLimit = 3;
var error = false;

while(response != password && !error){
if(entryCount < entryLimit){
response = window.prompt("Enter Password");
entryCount++;
} else {
error = true;
}
}
if(error){
alert ("You do not belong try again");
}
else{
alert("Welcome to my Webpage");
} 