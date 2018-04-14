var index = 0;
var amount = 0;//amount of images
var currTransl = []
var translationComplete = true;

var transitionCompleted = function(){
    translationComplete = true;
}

document.addEventListener("DOMContentLoaded", function(event) 
{
    amount = document.getElementsByTagName('img').length;
    document.getElementsByTagName('span')[0].innerHTML = amount;
    for(var i = 0; i < amount; i++)
    {
        currTransl[i] = -200;
        document.getElementsByTagName('img')[i].addEventListener("transitionend", transitionCompleted, true);                    
        document.getElementsByTagName('img')[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);                    
        document.getElementsByTagName('img')[i].addEventListener("oTransitionEnd", transitionCompleted, true);                    
        document.getElementsByTagName('img')[i].addEventListener("MSTransitionEnd", transitionCompleted, true);                  
    }
    console.log("DOM fully loaded and parsed");
});

function right()
{
    if(translationComplete === true)
    {
        translationComplete = false;
        index--;
        if(index == -1)
        {
            index = amount-1;
        }
        var outerIndex = (index) % amount;
        document.getElementById('index').innerHTML = outerIndex === 0 ? 5 : outerIndex;
        for(var i = 0; i < amount; i++)
        {
            var img = document.getElementsByClassName("img")[i];    
            img.style.opacity = '1';    
            img.style.transform = 'translate('+(currTransl[i]+200)+'px)';
            //img.className = 'img';
            //img.className.replace( /(?:^|\s)animate(?!\S)/g , '' );
            currTransl[i] = currTransl[i]+200;
        }
        
        var outerImg = document.getElementsByClassName("img")[outerIndex];
        outerImg.style.transform = 'translate('+(currTransl[outerIndex]-200*(amount))+'px)';
        outerImg.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex]-200*(amount);
    }
}

function left()
{
    if(translationComplete === true)
    {
        translationComplete = false;
        index++;
        var outerIndex = (index-1) % amount;
        document.getElementById('index').innerHTML = outerIndex+1;
        for(var i = 0; i < amount; i++)
        {
            var img = document.getElementsByClassName("img")[i];    
            img.style.opacity = '1';    
            img.style.transform = 'translate('+(currTransl[i]-200)+'px)';
            currTransl[i] = currTransl[i]-200;
        }
        var outerImg = document.getElementsByClassName("img")[outerIndex];
        outerImg.style.transform = 'translate('+(currTransl[outerIndex]+200*(amount))+'px)';
        outerImg.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex]+200*(amount);
    }
}