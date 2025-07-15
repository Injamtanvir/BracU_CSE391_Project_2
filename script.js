// InjamTanvir

document.addEventListener('DOMContentLoaded', function(){
    console.log('CSE391 Project homepage loaded successfully');
    var cards = document.querySelectorAll('.card');

    for(var i = 0; i < cards.length; i++){
        cards[i].addEventListener('mouseenter', function(){

            var heading = this.querySelector('h3');
            if(heading){
                heading.style.color = 'green';
            }
        });

        cards[i].addEventListener('mouseleave', function(){
            var heading = this.querySelector('h3');
            if(heading){
                heading.style.color = 'black';
            }
        });
    }

    var footerText = document.querySelector('footer p');
    var year = new Date().getFullYear();
    if(footerText){
        footerText.innerHTML = footerText.innerHTML.replace(/\d{4}/, year);
    }
});