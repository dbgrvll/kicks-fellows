function constructKickHTML(name, description) {
    var newKick = '<article>' +
      '<img src="Nike_Air_Max_95.png">' +
      '<h3>' +
      name +
      '</h3>' +
      '<p>' +
      description +
      '</p>' +
      '</article>';
    return newKick;
  }
  
  // prompt user if they want to add a pair of kick
  var wantsToAddKick = prompt("Do you want to add new kicks?");
  
  var numberOfKick = prompt('How many pairs of kicks do you want to add?');
  
  // while (numberOfKicks> 0) {
  //   // if so, ask for brand and description
  //   var kickBrand = prompt("The brand of these kicks?");
  //   var kickDescription = prompt("Describe these kicks. What makes them fresh?");
  
  //   // give brand and description to the constructKickHTML function to let it do its thing
  //   var newKickHtml = constructKickHTML(kickBrand, kickDescription);
  
  //   // hand the resulting HTML off to document.write
  //   console.log(newKickHtml);
  //   document.write(newKickHtml);
  
  //   numberOfKicks--;
  // }
  
  for (numberOfKicks; numberOfKicks > 0; numberOfKicks--) {
    // if so, ask for name and description
    var kickBrand = prompt("The brand of these kicks?");
    var kickDescription = prompt("Describe these kicks. What makes them fresh?");
  
    // give brand and description to the constructKickHTML function to let it do its thing
    var newKickHtml = constructKickHTML(kickBrand, kickDescription);
  
    // hand the resulting HTML off to document.write
    console.log(newKickHtml);
    document.write(newKickHtml);
  }