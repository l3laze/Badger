/* Code based on
 * http://jsforallof.us/2014/12/01/the-anatomy-of-a-simple-templating-engine/
 */


var templater = function( html ) {
  return function( data ) {
    for( var x in data ) {
      var re = "{{\\s?" + x + "\\s?}}";
      html = html.replace( new RegExp( re, "gi" ), data[ x ]);
    }
    return html;
  }
}

/* Code based on
 * http://stackoverflow.com/questions/814564/inserting-html-elements-with-javascript
 */

function craftBadge( info ) {

  var badger_template = templater(
    '<div class="badger-badge">' +
      '<span class="badger-name">{{ name }}</span>' +
      '<span class="badger-credits">' +
        '<a href="{{ home }}" class="badger-home" title="Homepage">' +
          '<i class="fa fa-home"></i>' +
        '</a>' +
        '<a href="{{ license }}" class="badger-license" title="License">' +
          '<i class="fa fa-file"></i>' +
        '</a>' +
      '</span>' +
    '</div>'
  );
  var badge = document.createDocumentFragment(),
      temp = document.createElement( "div" );
  temp.innerHTML = badger_template( info );
  while( temp.firstChild ) {
    badge.appendChild( temp.firstChild );
  }
  return badge;
}
