let minutes = prompt('input minutes, please');
let hours = parseInt(minutes / 60);
minutes = minutes % 60;
if (minutes >= 0 && hours < 10) {
  console.log(`0${hours}:${minutes}`);
} else if (minutes >= 0 && hours >= 10) {
  console.log(`${hours}:${minutes}`);
} else {
  console.log('Invalid number!');
}
