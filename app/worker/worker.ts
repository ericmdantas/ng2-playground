self.onmessage = () => {
  postMessage({message: `worker talking: ${Date.now()}`});
  close();
};
