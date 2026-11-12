- Create a Repository
- Initialize the repository
- node_modules, package.json, package-lock.json
- Install express
- Create a server
- Listen to port 7777
- You have to make or write request handlers for /test, /hello
- Install nodemon and update scripts inside package.json
- Difference between caret and tilde (^ vs ~)

- initialize git
- gitignore
- Create a remote repo on github
- Push all code to remote origin
- Play with routes and route extensions
- Install Postman app and make a workspace/collection -> test API call
- Write logic to handle GET, POST, PATCH, DELETE API calls and test them on postman

- Multiple Route Handlers - Play with the code
- next()
- next function and errors along with res.send()
- app.use("/route", rH, [rH2, rH3], rH4);
- What is a Middleware 
- How Express JS basically handles requests behind the scenes
- Difference between app.use and app.all
- Error handling using app.use("/", (err, req, res, next) => {});

- Create a free cluster on MongoDB official website (Mongo Atlas)
- Install mongoose library 
- Connect your application to the Database "Connection-url"/devTinder
- Call the connectDB function and connect to database before starting application on 7777
- Create a userSchema & user Model
- Create POST /signup API to add data to database
- Push some documents using API calls from postman

- JS Object vs JSON 
- Add the express.json middleware to your app
- Make your signup API dynamic to receive data from the end user