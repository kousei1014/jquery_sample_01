// buttonSet1
$( function() {

    $( '#buttonHeader' ).click( function() {
      $( 'h1' ).text( "ゴリラ豪雨" );
    });
  
    $( '#buttonArticle' ).click( function() {
      $( 'header' ).css({
        'color': '#32e0c4',
        'background-color': '#512b58'
      });
      $( 'nav' ).css({
        'color': 'white',
        'background-color': '#2c003e'
      });
      $( 'section' ).css({
        'color': 'white',
        'background-color': '#f1ebbb'
      });
      $( 'article' ).css({
        'color': '#000',
        'background-color': '#eeeeee'
      });
      $( 'aside' ).css({
        'color': 'white',
        'background-color': '#b5076b'
      });
      $( 'footer' ).css({
        'color': 'white',
        'background-color': '#512b58'
      });
    });
  
    $( '#buttonFooter' ).click( function() {
      $( 'footer' ).html('<p><a href="https://www.youtube.com/watch?v=jNw1gIX4dmA">ローランド</a></p>' );
      $( 'footer a' ).css( 'color','#fcf876' );
    });
  
  });
  
  // buttonSet2
  $( function() {
  
    $( '#buttonNormal' ).click( function() {
      $('main').css( 'flex-direction','row' );
    });
  
    $( '#buttonReverse' ).click( function() {
      $('main').css( 'flex-direction','row-reverse' );
    });
  
    $( '#buttonVertical' ).click( function() {
      $('main').css( 'flex-direction','column' );
    });
  
  
  
  });