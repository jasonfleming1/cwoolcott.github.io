MERN

---


Proxy setting is part of Create React App and can be read about in its documentation. It automatically forwards all HTTP requests from our React application to another specified base url.

We'd make HTTP requests HTTP requests to the endpoints defined in our Express server, but wouldn't have to specify that it's running on a different port in every request, e.g. we'd write

axios.get('/api/books'); 

instead of 

axios.get('http://localhost:3001/api/books');

---

Fullstack React's Food Lookup Demo 
[https://github.com/fullstackreact/food-lookup-demo]()

---




