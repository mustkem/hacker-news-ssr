### Project Title and Overview
This project is created by server side rending with reactjs. The templetes are created at server side and sent back to client.

### Purpose and Need
You can understand the flow and setup of SSR app by following up this project. This can be considered as sheed project and 
can be expended to any scale. 

### Benefits and Costs
Search engines can crawl the site and therefore better SEO support than client side rendering.
The initial page load is faster than client side rendering.

### Implementation Method and technology stack
This project hosts a intermediate server, generate all the templates at server side as requested by client/browser and send them back to 
client. These templates are sent as plain string and are hydrated at client side by methods proided by reactdom.
Below is the list of Technology, library, packages etc used to create this project.

# Node.js
To create JavaScript runtime environment that can executes JavaScript code outside a web browser ie:server

# Express.js
This package is used to create a intermediate server which listen to client route requests and reroute these requests to a routing 
library such as static router and send the content back to client/browser.


# React.js
This javascript library is used for building user interfaces aka components at server side and as well as at client side.

# Webpack
Webpack is used to bundle the assets of project. There are two seprate files one the configuration for client assets and another is 
for server assets. Both files have diffent entry and output points. These both files share base configuration form a webpack.base.js
file which is shared/common between both.

# Babel
For transpilation of code babel is used. This transpiler is used in conjunction with webpack. Transpiling is targeting the last 2 versions 
of browsers. It means all advance/ES6/ES7 code will be transpiled to a code which browser can understand. For loading css files
raw loader is used. And for static assets like css files / images a webpack loaded url-loader is used.

# nodemon
Restarting the application when file changes in the directory are detected.





