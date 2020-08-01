var buttonLabel = "Proceed";

// create button element
var bt = document.createElement('button');

// add class name to created button
bt.className = "btn btn-primary shadow-none quickRepliesButton";

// add type to created button
bt.type = "button";

// add value to created button. Value is our button label in our case
bt.value = buttonLabel;

// add onclick event listener
bt.onclick = "quickReplyPressed(this)";

// create text and add to button
document.createTextNode(buttonLabel);
bt.appendChild(document.createTextNode(buttonLabel));