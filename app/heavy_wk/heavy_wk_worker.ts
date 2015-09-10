self.onmessage = (event) => {
  var _rep = event.data * 100;


  for (var i = 0; i < _rep; i++) {

  }

  postMessage(`went through ${_rep} stuff, yo`);
}
