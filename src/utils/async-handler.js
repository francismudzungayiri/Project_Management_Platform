/*
This allows us to write our request handlers as async functions and automatically 
catch any errors that occur within them, passing them to the next middleware 
(which is typically an error handler). 
This helps to keep our code clean and avoids the need for repetitive 
try-catch blocks in each request handler.
why do we need this? Because when we use async functions as request handlers in Express, any unhandled 
errors will not be caught by Express's default error handling mechanism. 
Without this wrapper, if an error occurs in an async request handler, it would result in an 
unhandled promise rejection, and the server might crash or fail to respond properly.
*/

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
