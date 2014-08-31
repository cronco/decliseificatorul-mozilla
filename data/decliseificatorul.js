var expressions = [
  /\b[Bb][aă]ie[tţț]i de[sșş]tep[țţt]i\b/g,
  /\b[Bb][aă]ie[tţț]ii de[sșş]tep[ţțt]i\b/g,
  /\b[Bb][aă]ie[tţț]ilor de[sşș]tep[țţt]i\b/g,
  ],
    replacements = [
      ['pulifrici', 'bulangii', 'ciocoflenderi', 'borfasi', 'hoti'],
      ['pulifricii', 'bulangiii', 'ciocoflenderii', 'borfasii', 'hotii'],
      ['pulifricilor', 'bulangiilor', 'ciocoflenderilor', 'borfasilor', 'hotilor'],
    ];

function deCliche(text) {

     var expressionLength = expressions.length,
     i;

  for (i = 0; i < expressionLength; i++) {
    var replacementIndex = Math.floor(Math.random() * 10000) % replacements[i].length;
    var replacement = replacements[i][replacementIndex];
    text = text.replace(expressions[i], replacement);
  }

  return text;
}

console.log(document.title);
document.title = deCliche(document.title);
console.log(document.title);

walk(document.body);


function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
  if (node) {
    switch ( node.nodeType ) {
      case 1:  // Element
      case 9:  // Document
      case 11: // Document fragment
        child = node.firstChild;
        while ( child ) {
          next = child.nextSibling;
          walk(child);
          child = next;
        }
        break;

      case 3: // Text node
        handleText(node);
        break;
    }
  }
}

function handleText(textNode) 
{
	var v = textNode.nodeValue; 
  textNode.nodeValue = deCliche(v);
}


