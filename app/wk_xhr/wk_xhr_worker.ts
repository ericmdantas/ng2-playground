const url: string = 'http://jsonplaceholder.typicode.com/posts';
var xhr: XMLHttpRequest = new XMLHttpRequest();

self.onmessage = () => {

  xhr.onreadystatechange = () => {
    console.log(this.responseText);
    postMessage("done");
  }

  xhr.open("GET", url, true);
  xhr.send();
}
