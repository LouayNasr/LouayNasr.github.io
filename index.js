

document.getElementById("new-quote").addEventListener("click", newQuoteMethod());

function newQuoteMethod() {
  
    var text = document.getElementById("text");
    var author = document.getElementById('author');

    var quotes = [
        ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
        ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
        ["Argue with idiots, and you become an idiot.", "Paul Graham"],
        ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
        ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
    ];
    var randomLine = Math.floor(Math.random() * quotes.length);
    text.innerHTML = quotes[randomLine][0];
    author.innerHTML = quotes[randomLine][1];
    
};
newQuoteMethod();