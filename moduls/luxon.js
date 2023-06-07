import { DateTime } from '../node_modules/luxon/src/luxon.js';

const updateClock = () => {
  const now = DateTime.now();
  const formattedTime = now.toFormat('d, LLL, yyyy, h:mm:ss a');
  const clockElement = document.getElementById('time');
  clockElement.textContent = formattedTime;
};
setInterval(updateClock, 1000);

export default updateClock;