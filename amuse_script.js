/*
Alexis Westbrook 
Due Date: 04/20/2025
Assignment Number: 4
*/
function rideInfo(rideId, rideName) {
	alert(`You clicked on the ride with the ID of: ${rideId} and name of: ${rideName}`);
}
function showRides() {
const rideNames = [
	"The Loop and Twirl",
	"The Last Ride",
	"Wacky Wayne\'s Winding Carousel",
	"The Dropzone",
	"Wacky Wayne\'s Classic Ferris Wheel"
];
const rideDescriptions = [
	'This exhilarating roller coaster takes you on heart-pounding loops, twists and twirls.',
	'Experience the excitement of the high seas with "The Last Ride"! This thrilling ride mimics the tumultous swing of a ship caught in a wild storm, swinging back and forth, and completing a full swing on the final round! Feel the wind whipping in your hair and the rush of adrenaline as your soar through the seas!',
	'Take a magical spin through time! This enchanting ride will take you on a whimsical journey as you gracefully glide on your beautifully crafted hourses and chariots. Enjoy the classic charm and magnificent elegance of our carousel ride with a twist!',
	'Prepare for heart dropping plunge as you ascend, feel the tension build with every creak! At the peak, brace yourself for a sudden, terrifying free-fall into the unknown!',
	'Enjoy the relaxing journey that allows you to unwind and enjoy panoramic views of our park! The perfect way to cool down after all the exciting thrills',
];
const rideImages = [
	"images/The_Loop_and_Twirl.jpg",
	"images/The_Last_Ride.jpg",
	"images/Wacky_Waynes_Winding_Carousel.jpg",
	"images/The_Dropzone.jpg",
	"images/Feris_Wheel_Ride_5.jpg"
];
const rideIds = [
	"TLT",
	"TLR",
	"WWC",
	"TDZ",
	"WWF"
];
let output = "";
for(let i = 0; i <rideNames.length; i++) {
	output += `
	<section class="ride">
	<img src="${rideImages[i]}" alt="${rideNames[i]}" width="300">
	<div class="ride-text">
		<h3 onclick="rideInfo('${rideIds[i]}', &quot;${rideNames[i]}&quot;)" style= "cursor:pointer;">${rideNames[i]}</h3>
		<p>${rideDescriptions[i]}</p>
	</div>
	</section>
	<hr>
	`;
}
document.getElementById("rideContainer").innerHTML = output;
}
function orderTics (event) {
	event.preventDefault();
	const ticketQuantity = parseInt(document.getElementById ("ticketQuantity").value,10) ||0;
	const pricePerTicket = 35;
	const totalPrice = ticketQuantity * pricePerTicket;
	alert(`Your total price is: $${totalPrice}`);
	return false;
}
document.addEventListener("DOMContentLoaded", function() {
	if (document.getElementById("rideContainer")) {
		showRides();
	}
});