alert("JavaScript works!");
//Author: Myron B Carroll
// SDI Assignment 2
// 8 March 2012
// a Studion session

console.log("After hearing the work I did on my wife's song that I recorded last week, the manager for another artist contracted me to produce their latest single.")
console.log("They have investors and a budget. So I can record at a commercial studio.")
console.log("But I must call around and find one available this week. There is a tight deadline for this project.")
console.log("But if i can get this done, this could lead to more production work.")
// String Function
var studios = ["Doppler", "Patchwork", "Crossover"];
  studioavail = ["not available", "available", "available"];
for (var i=0, a=studios.length; i<a ; i++ ){
	console.log("I called " +studios[i]+ " Studios and they said that they are " +studioavail[i]+ " in that time frame")
};
console.log("Now that I have the studio booked, I need to schedule my musicians.");
console.log("I get to work with some great musicians");
console.log("I have 8 hours to record a complete song. So I have to get all of my musicians in at specific times.");
//Arrays
var musicians = ["Quinton", "Leeland", "Steve", "Ron"];
	instruments = ["Drums", "Keyboard", "Guitar", "Saxophone"];
	times = ["10:00am", "11:30am", "12:30pm", "1:30pm"];
	//For loop	
for (var i=0, m=musicians.length; i< m; i++){
	console.log(musicians[i] + " is scheduled for " +times[i]+ " on " +instruments[i]+ ".")
};
console.log("After I get the instruments laid down. I have the Background Vocals to do.");
console.log("I have the 2 female singers booked. I just have to see if Jason can sing the male part")
//Boolean Function
var javail=true
if (javail=true){
	console.log("Jason is available, I don't have to sing the male parts. I am really out of practice")
	}else{
	console.log("Oh well, Jason is not available. I have to man up and sing these parts. That's why they pay me the big bucks.")	
};
console.log("Now I need to have a rough mix done to the song and have it bounced so I can put it on a CD to listen to in the car.")
console.log("Because the software we are using is Pro Tools, it has to bounce in real time.")
//While loop
var songlength = 230
console.log("The song is " +songlength+ " seconds long. Let's start the timer.")
while (songlength >= 0) {
	console.log("I now have " +songlength+ " seconds remaining.")
	songlength--
};
console.log("I have completed the recording. Now I have to mix and master.")
console.log("To Be Contonued...")