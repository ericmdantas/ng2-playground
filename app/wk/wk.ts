self.onmessage = (event) => {
  postMessage({msg: event.data, id: Date.now()});
}
