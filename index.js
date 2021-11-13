console.log("connected");
 
//get timer element
const timer = document.getElementById("timer");
 
// vars
count = 0;
displayCount = 0;

 
//funcs
function mainLoop(){
	//iterate counter
	count += 1;
	//modulo counter
	displayCount = count % 4;
	displayCount += 1;
	//set html element
	timer.innerHTML = displayCount.toString();
	// wait a second before calling another loop
	setTimeout(function(){mainLoop()}, 1000);
}
 
mainLoop();
