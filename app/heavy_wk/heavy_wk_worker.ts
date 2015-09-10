self.onmessage = (event) => {
  var _rep = event.data * 1000000;
  var _x = 1;

  for (var i = 1; i < _rep; i++) {
    _x += i;
  }

  postMessage(`went through ${_rep} stuff, yo. Look, this is _x: ${_x}`);
}
