//This is JavaScript!
//JavaScript is used to make pages interactive and allows you to click on things and watch magic happen!
//This JavaScript file is going to talk to the HTML file and tell it what it needs to do with the stuff on the page.
//We allow JavaScript and HTML to talk to each other by including the javascript file in HTML using <script></script> tags.
//Check out line 3 to see what I mean!


//The line below demonstrates two things: first the creation of a variable. Variables are used whenever you want to save something to be used over and over again.
///The second thing happening is getting an element by id. If you go back to index.html, you'll noticed that I added id="button1".
//Now the variable buttonElement stores the element with id button1, in other words, the button on the page!
var buttonElement = document.getElementById("button1");


//Now for something cool that JavaScript can do - FUNCTIONS!
//Functions are a way of grouping related instructions together so that our code doesn't get messy.
//You'll notice that on the HTML, we have something called "onclick". In other words, what do you want the page to do when you click the button?
//Try it out in your browser!
function alertHello() {
    alert("Hello from JavaScript!");
}


