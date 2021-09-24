const Timer = (timer) => {
  let minutes = Math.floor(timer / 60);
  minutes = minutes < 10 ? '0' + minutes : minutes;

  let seconds = Math.floor(timer % 60);
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return `${minutes}:${seconds}`;
};

export default Timer;
