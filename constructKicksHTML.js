
  
// input: name, description
// work: construct an html string that we can hand off to document.write
// output: an html article with placeholder pic, name, and description

// pseudocode
// input: name - "kick", description - "coolest kick ever"
// work:
// '<article>' +
//   '<img src="Adidas_Yeezy_Boost_Oxford_Tan.jpg">' +
//     '<h3>' +
//       'Another kick again' +
//       '</h3>' +
//     '<p>' +
//       'Kick info goes here' +
//     '</p>' +
//   '</article>'
// output:
/*
<article>
  <img src="Adidas_Yeezy_Boost_Oxford_Tan.jpg">
    <p>Creative Commons BY-SA 4.0</p>
    <h3>
      Kick
        </h3>
    <p>
      sneakerhead's desire
    </p>
</article>
*/

function constructKickHTML(name, description) {
  var newKick = '<article>' +
    '<img src="Adidas_Yeezy_Boost_Oxford_Tan.jpg">' +
    '<h3>' +
    name +
    '</h3>' +
    '<p>' +
    description +
    '</p>' +
    '</article>';
  return newKick;
}

// prompt user if they want to add a kick
var wantsToAddKick = prompt("Do you want to add a kick?");

if (wantsToAddKick === 'yes') {
  // if so, ask for brand and description
  var kickName = prompt("What brand is this great, new kick?");
  var kickDescription = prompt("Describe what makes this kick great");

  // give name and description to the constructKickHTML function to let it do its thing
  var newKickHtml = constructKickHTML(kickName, kickDescription);

  // hand the resulting HTML off to document.write
  console.log(newKickHtml);
  document.write(newKickHtml);
}

