self.onmessage = () => {
  postMessage({message: 'worker talking'});
  close();
};
