# Creating a Proxy Server

A Proxy server is a server that acts as a middle layer when requesting data from a 3rd party API. In building a proxy server, you will create a server that requests data from an external API and serves the user that information.
```
User <------> Proxy <-----> Internet Domain
```
So the Proxy receives requests from the internal network (LAN) and forward them to the internet and vice versa.

**The proxy server requests data from external API and serves the user that information**

- Create a directory. In this case, mine is:
	`my-proxy`

- Create a new Node project:
  `yarn init -y`
The "-y" or "--yes" flag means "yes" to all configs, btw it is a default configuration.

- Installing Express dependencies:
	`yarn add express`

- Installing "http-proxy-middleware" dependencies:
  `yarn add http-proxy-middleware`

- Adding a "start" command to our project:
  ```
  ,
  "scripts": {
      "start": "node index.js"
  }
  ```
This will allow us to run our project with "yarn start".

- Install nodemon for re-running after changes:
  `yarn add nodemon`