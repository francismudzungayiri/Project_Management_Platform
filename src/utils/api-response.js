/*
* APIResponse is a utility class to standardize API responses. 
It includes the status code, data, message, and a success flag.
Why do we need this? It helps to maintain a consistent structure for 
all API responses, making it easier for clients to parse and understand the responses.
Without this class, different parts of the application might return responses in different 
formats, which can lead to confusion and errors when clients try to consume the API.
*/

class APIResponse {
  constructor(statusCode, data, message = "success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { APIResponse };
