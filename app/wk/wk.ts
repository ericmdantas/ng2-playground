self.onmessage = (event) => {
  let _x = 1;
  let _loop = 100 * event.data;

  for (let i = 1; i < _loop; i++) {
    _x+=i;
  }

  postMessage(`Looping through ${_loop} stuff. X is: ${_x}!`);
}
