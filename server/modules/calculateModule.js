var calculateModule = function( objectMagic ){
  console.log( 'checking: ' + objectMagic.operation );
  switch ( objectMagic.operation ) {
    case 'add':
      console.log( 'adding' );
      // add
      var answer = Number( objectMagic.x ) + Number( objectMagic.y );
      break;
    case 'subtract':
      console.log( 'subtracting' );
      answer = Number( objectMagic.x ) - Number( objectMagic.y );
      break;
    case 'multiply':
      console.log( 'multipling' );
      answer = Number( objectMagic.x ) * Number( objectMagic.y );
      break;
    case 'divide':
      console.log( 'dividing' );
      answer = Number( objectMagict.x ) / Number( objectMagic.y );
      break;
    default:
      answer=0;
  }
  return( answer );
};

module.exports = calculateModule;
