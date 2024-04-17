/*
const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></stan></strong></p>
`;

const xhrPromise = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();
  
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject('Something went wrong!');
    };   
  });

  return promise;
};

console.log(xhrPromise("GET", url));

xhrPromise("GET", url)
.then(response => {
    const posts = JSON.parse(response)
		let result = ''
    posts.forEach(item => {
        result += template(item)
    })
    document.getElementById("blog").innerHTML = result;
    
})

.then( () => {
  const users  = document.querySelectorAll('.author');
  users.forEach(user => {
    xhrPromise("GET", `https://jsonplaceholder.typicode.com/users/${user.dataset.id}`)
    .then(response => {
      let userName = JSON.parse(response)
      console.log(userName.name)
      user.textContent = userName.name
    })
  })

});
*/


// Використовуючи метод fetch замість XMLHttpRequest, переписати сценарій app.js


const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const renderPosts = async () => {
  try {
    const posts = await fetchData(url);
    let result = '';
    posts.forEach(item => {
      result += template(item);
    });
    document.getElementById("blog").innerHTML = result;
    return posts;
  } catch (error) {
    console.error('Error rendering posts:', error);
    throw error;
  }
};

const renderAuthors = async () => {
  try {
    const posts = await renderPosts();
    const authorElements = document.querySelectorAll('.author');
    for (const authorElement of authorElements) {
      const userId = authorElement.dataset.id;
      const userResponse = await fetchData(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const userName = userResponse.name;
      authorElement.textContent = userName;
    }
  } catch (error) {
    console.error('Error rendering authors:', error);
  }
};

renderAuthors();


