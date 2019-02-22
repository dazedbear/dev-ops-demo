const init = (num) => {
  if (typeof num !== 'number') return false;
  return num * 100;
}

export default init;