// 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜スムーズスクロール〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
const smoothScroll = function () {

    const interval = 10,
          divisor = 10,
          range = 5,
          btn = document.querySelectorAll( 'a[href^="#"]' );

    let count = 0;
    while ( count < btn.length ) {
        ( function ( elem ) {
            btn[ elem ].addEventListener( 'click', function ( e ) {
                e.preventDefault();
                let toY,
                    nowY = window.scrollY || window.pageYOffset;
                const href = btn[ elem ].getAttribute( 'href' ),
                      target = document.querySelector( href ),
                      targetY = target.getBoundingClientRect().top + nowY;

                ( function doScroll () {
                    toY = nowY + ( targetY - nowY ) / divisor;
                    window.scrollTo( 0, toY );
                    nowY = toY;

                    if ( toY >= targetY + range || toY <= targetY - range ) {
                        setTimeout( doScroll, interval );
                    }
                } ) ();
            }, false );
        } ) ( count );
        count++;
    }

}
smoothScroll();
〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜ここまで〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜