// toggle-menu
let bar = document.querySelector( '.toggle-menu' );
let ul = document.querySelector( "nav ul" );
let close = document.querySelector( '.close' );


bar.onclick = function () {
         ul.classList.add('block')
        bar.classList.replace( 'toggle-menu', 'close' );
        close.classList.add( 'non' );
}
close.onclick = function () {
    ul.classList.remove( 'block' )
    bar.classList.replace( 'close', 'toggle-menu' );
    close.classList.remove( 'non' );
}


// remove and add active class 
let links = document.querySelectorAll( 'nav a' );

links.forEach( link => {
    
    link.addEventListener( 'click', function () {
        
        links.forEach( e => {

            e.classList.remove( 'active' );

            this.classList.add( 'active' );

        } );
    } );
} );

// scroll to top 
let up = document.querySelector( '.up' );
window.onscroll = function () {

    if (window.scrollY > 500) {
        up.classList.add( 'none' );
    } else {
        up.classList.remove( 'none' );
    }

};

up.onclick = function () {
    window.scrollTo( {
        behavior: 'smooth',
        top: 0
    })
};

let search = document.querySelector( '.fa-search' );
let inp = document.querySelector( ".search" );
let xinp = document.querySelector( ".input-colse" );


search.addEventListener( 'click', function () {
    inp.classList.add( 'trans' ); 
     xinp.style.transform = 'translateY(0px)';
} );

xinp.addEventListener( 'click', function () {
    inp.classList.remove( 'trans' );
    xinp.style.transform = 'translateY(-150px)';
} )


let allLis = document.querySelectorAll( '.shuffle li' );
let allBoxes = document.querySelectorAll( '.imgs-container .box' );

allLis.forEach( li => {
    li.addEventListener( 'click', removeActive );
    li.addEventListener( 'click', manageImgs );
})
function removeActive() {

    allLis.forEach( li => {
        li.classList.remove( 'active' );
        
        this.classList.add( 'active');
    })

}

function manageImgs () {
    allBoxes.forEach( img => {
        img.style.display = 'none';
    } );

    document.querySelectorAll( this.dataset.cat ).forEach( cat => {
        cat.style.display = 'block';
    })
}