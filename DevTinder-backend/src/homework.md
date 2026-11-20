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
- User.findOne with duplicate email ids, which object will be returned
- API - Get user by email
- API - Feed API - GET /feed - get all the users from the database
- API - Get user by ID
- Create a delete user API
- Difference between PATCH and PUT
- API - Update a user
- Explore the Mongoose Documentation for Model Methods
- What are options in a Model.findOneAndUpdate method, explore more about it
- API - Update the user

- Explore schematype options from the documentation
- add required, unique, lowercase, min, minLength, trim
- Add default
- Create a custom validate function for gender
- Improve the DB schema - PUT all appropriate validations on each field in Schema
- Add timestamps to the userSchema
- Add API level Validation on Patch request & Signup post api
- Data Sanitizing - Add API validation for each field
- Install validator
- Explore validator library function and use validator functions for password, email, photourl
- NEVER TRUST req.body

- Validate data in Signup Data
- Install bcrypt package
- Create PasswordHash using bcrypt.hash & save the user with encrypted password
- Create login API 
- Compare passwords and throw errors if email or password is invalid


- Install cookie-parser 
- Just send a dummy cookie to the user
- create GET /profile API and check if you get the cookie back 
- In login API, after email and password validation, create a JWT token and send it to the user in cookies
- Read the cookies inside your profile API and find the logged in user
- Write the userAuth middleware
- Add the userAuth middleware in API and new sendConnectionRequest API
- Set the expiry of jwt token and cookies to 7 days
- Create userSchema method to getJWT()
- Create userSchema method to comparePassword(passwordInputByUser)

- Explore tinder APIs
- Create a list of all APIs you can think of in Dev Tinder
- Group multiple routes under respective routers
- Read Documentation for express.Router()
- Create routes folder for managing auth, profile, request routers
- Create authRouter, profileRouter, requestRouter 
- Import these routers in app.js 
- Create POST /logout API
- Create PATCH /profile/edit
- Create PATCH /profile/password API => Forgot password API
- Make sure you validate all data in every POST, PATCH APIs