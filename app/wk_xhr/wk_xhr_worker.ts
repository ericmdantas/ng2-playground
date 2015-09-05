const url: string = 'http://jsonplaceholder.typicode.com/posts/';

self.onmessage = (event) => {
  let xhr: XMLHttpRequest = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    var _r = xhr.responseText;

    if ((_r) && (xhr.status === 200))
        postMessage(JSON.parse(_r));
  };

  xhr.open("GET", url + event.data, true);
  xhr.send();
}
