document.addEventListener("DOMContentLoaded", function() {

    const urlParams = new URLSearchParams(window.location.search);
    const selectedRoom = urlParams.get("room");

    
    if(selectedRoom) {
        const roomDropdown = document.getElementById("room");
        roomDropdown.value = selectedRoom;
    }
});




document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    
    const name = document.getElementById("name").value;
    const room = document.getElementById("room").value;
    const date = document.getElementById("date").value;

    const booking = {
        Name: name,
        Room: room,
        Date: date
    };

    
    localStorage.setItem("hotelBooking", JSON.stringify(booking));

    
    document.getElementById("bookingFormBox").style.display = "none";

    
    document.getElementById("confirmationBox").style.display = "block";


    
});