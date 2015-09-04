const url: string = 'http://jsonplaceholder.typicode.com/posts/1';

self.onmessage = () => {
  let xhr: XMLHttpRequest = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    postMessage(JSON.parse(this.responseText));
  };

  xhr.open("GET", url, true);
  xhr.send();
}
