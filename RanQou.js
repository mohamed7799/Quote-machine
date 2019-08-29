//variables
let New = document.getElementById("new");
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let twitter = document.getElementById("twit");
let data;

//functions

function new_quote() {
  fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(body => {
      quote.innerHTML = `"${body.content}"`;
      author.innerHTML = `- ${body.author}`;
    })
    .catch(error => alert(`Something went wrong the error is ${error}`));
}

function Twit() {
  if (data.quote.length > 140) {
    alert("The Quote IS Too Big");
  } else {
    let twtLink = "https://twitter.com/intent/tweet?text=" + data.quote;
    window.open(twtLink);
  }
}

//eventListners

New.addEventListener("click", new_quote);

twitter.addEventListener("click", Twit);

//main

new_quote();
