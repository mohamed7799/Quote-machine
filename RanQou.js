//variables
let New=document.getElementById("new");
let quote=document.getElementById("quote");
let author=document.getElementById("author");
let twitter=document.getElementById("twit");
let data;

//functions

function new_quote(){
	
	let request= new XMLHttpRequest();
	//set the request
	request.open('GET','https://random-quote-generator.herokuapp.com/api/quotes/random');
	//when the request get loaded
	request.onload=function(){

		data=JSON.parse(request.responseText);
		quote.innerHTML=`"${data.quote}"`;
		author.innerHTML=`- ${data.author}`;
	};
	//send the request
	request.send();
}

function Twit(){

	if(data.quote.length>140){
		alert("The Quote IS Too Big");
	}
	else
	{
	let twtLink = 'https://twitter.com/intent/tweet?text=' +data.quote;
 	window.open(twtLink);
	}

}


//eventListners

New.addEventListener("click",new_quote);

twitter.addEventListener("click",Twit);

//main

new_quote();

