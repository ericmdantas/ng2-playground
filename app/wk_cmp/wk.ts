self.onmessage = ({data}) => {
  postMessage({hello: 'there, I came from a worker', result: data});
}
