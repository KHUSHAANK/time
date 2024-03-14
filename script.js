const timeDisplay = document.getElementById('time');
const toggleModeBtn = document.getElementById('toggleMode');

function updateTime() {
  const date = new Date();
  const hours = date.getHours() % 12;  // Get hours in 12-hour format (0-11)
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const amPm = hours >= 12 ? 'PM' : 'AM';  // Add AM or PM based on hour

  const formattedTime = `${hours === 0 ? 12 : hours}:${minutes}:${seconds} ${amPm}`;
  timeDisplay.textContent = formattedTime;
}

updateTime();
setInterval(updateTime, 1000);

toggleModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
