$(document).ready(function () {
	// Handles the span#menu-icon open/close event
	$('span#menu-icon').click(function () {
		// Toggles the class "open" on the span element
		$('nav#menu').toggleClass('open');
	});

	// Handles the click event on an a element that has the class "clickable"
	$('a.clickable').click(function (event) {
		// Toggles the class "open" on the span element
		$('nav#menu').removeClass('open');
	});
});

// Vanilla JavaScript code to handle keypress detection and modal display
let typedKeys = '';
const secretCode = '1337';
const modal = document.getElementById('easteregg-modal');
const closeModal = document.getElementById('close-modal');

// Event listener for key presses
window.addEventListener('keydown', function(event) {
	// Append the pressed key to the typedKeys string
	typedKeys += event.key;

	// If the typed keys match the secret code
	if (typedKeys.endsWith(secretCode)) {
		modal.style.display = 'flex';
		typedKeys = ''; // Reset the typed keys after showing modal
	}

	// Limit the length of typedKeys to the length of the secretCode
	if (typedKeys.length > secretCode.length) {
		typedKeys = typedKeys.slice(1); // Remove the first character if it's too long
	}
});

// Close the modal when the user clicks the close button
closeModal.addEventListener('click', function() {
	modal.style.display = 'none';
});

// Close the modal if the user clicks anywhere outside of the modal content
window.addEventListener('click', function(event) {
	if (event.target === modal) {
		modal.style.display = 'none';
	}
});

// Change body background color when the user clicks on span with easteregg class
document.querySelector('#easteregg').addEventListener('click', function() {
	// Check if span has a 'clicked' class
	if (this.classList.contains('clicked')) {
		// Remove the 'clicked' class from the span element
		this.classList.remove('clicked');
		// Reset the body background color
		document.body.style.backgroundColor = '';
		return;
	}
	else {
		document.body.style.backgroundColor = 'lightblue';
	}
	// Adds a 'clicked' class to the span element
	this.classList.add('clicked');
});