//alert('test');

//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);

document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);  

//manages mobile nav 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



const spans = document.querySelectorAll('div#play span');

console.log(spans);

for(const mySpan of spans){
  mySpan.addEventListener('click', function(ev){

    //alert(mySpan.dataset.actor)


    highlightActor(mySpan.dataset.actor);

  });
}

function myAlert(){
  alert("I'm clicked");
}

function highlightActor(actor) {
for(const mySpan of spans){
  if(actor == mySpan.dataset.actor){
    mySpan.style.backgroundColor = "yellow";
  }else{
    mySpan.style.backgroundColor = "white";
  }
}
}

function highlight(el) {
  
  if(el.style.backgroundColor == "yellow"){
    el.style.backgroundColor = "white";
  }else{
    el.style.backgroundColor = "yellow";
  }

}


  //document.querySelector('span.hamlet').style.backgroundColor = "yellow";
