//your JS code here. If required.
function updateTimer() {
  let now = new Date();

  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  let formattedDate = now.toLocaleDateString('en-US', options);

  document.getElementById('timer').textContent = formattedDate;
}

// Call the function to display the initial date and time
updateTimer();

// Update the timer every second
setInterval(updateTimer, 1000);