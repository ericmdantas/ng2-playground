self.onmessage = (event) => {
  postMessage({info: event, id: Date.now()});

  if (info.data.canClose) {
    close();
  }
};
