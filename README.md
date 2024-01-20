# Instructions for Running the Server

## Clone the GitHub repository for this project:
git clone <repository_url>

## Navigate to the project directory:
cd express-regex-server

## Install the required dependencies using npm:
npm install

## Start the server:
npm start


# Explanation of Regular Expressions in Route Paths

app.get('/user(name)?', (req, res) => {
  if (req.params.name) {
    // If 'name' is present in the URL, it will be captured as a parameter.
    res.send(`Hello, ${req.params.name}!`);
  } else {
    // If 'name' is not present, it will match '/user' and respond accordingly.
    res.send('Hello, anonymous user!');
  }
});

In the route path /user(name)?, the regular expression (name)? means that the part inside parentheses name is optional. The ? makes the preceding element (name) optional, so the route matches both /user and /username.

If a URL like /user is requested, req.params.name will be undefined, and it will respond with "Hello, anonymous user!".
If a URL like /username is requested, req.params.name will contain the value "username", and it will respond with "Hello, username!".

