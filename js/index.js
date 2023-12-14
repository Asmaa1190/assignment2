var btn= document.getElementById('btn');
var outPut=document.getElementById('output');
var quotes=[
    "Be yourself; everyone else is already taken- Oscar Wilde",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. -Albert Einstein",
    "Get use to not getting used.-simooz",
    "believe in your self u better than can u imagine.-simooz",
    "You only live once, but if you do it right, once is enough.- Mae West",
    "Be the change that you wish to see in the world.- Mahatma Gandhi",
    "A friend is someone who knows all about you and still loves you.- Elbert Hubbard ",
    
  ]
function newquote(){
    var randomquote =quotes[Math.floor(Math.random()* quotes.length)];
    outPut.innerHTML=randomquote
}
// by html
// on click way

// 2 by addeventlistener
btn.addEventListener('click' ,function newquote(){
    var randomquote =quotes[Math.floor(Math.random()* quotes.length)];
    outPut.innerHTML=randomquote
} )









