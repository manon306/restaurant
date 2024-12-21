document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Simple validation
    if (name && email && phone && date && time && guests) {
        document.getElementById('confirmationMessage').textContent = `Thank you, ${name}! Your reservation for ${guests} guests on ${date} at ${time} has been confirmed.`;
        location.href="../../r.html";
    } else {
        document.getElementById('confirmationMessage').textContent = 'Please fill in all fields.';
    }
});






