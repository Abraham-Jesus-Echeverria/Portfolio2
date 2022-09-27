(()=>{ 
    let $cards = document.querySelectorAll(".card-transition");   
    const $cards_array = [... $cards]; 
    let $content_cards = document.querySelectorAll(".card_content"); 
    console.log($cards);

    for( let cardindex in $cards_array){ 
        $cards[cardindex].addEventListener("mouseenter", (e)=>{ 
            $content_cards[cardindex].classList.add("card_content-activate");
        }); 
        $cards[cardindex].addEventListener("mouseleave", (e)=>{ 
            $content_cards[cardindex].classList.remove("card_content-activate");
        })
    }
})();