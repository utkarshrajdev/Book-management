# Book Management Application

## Overview

This is a full-stack book management application built with Express and MongoDB. It includes a custom request logging middleware to capture essential information about incoming requests for debugging and monitoring purposes.

## Deployment URL

The application is deployed and accessible at: [https://book-management-gmfm.onrender.com/books/](https://book-management-gmfm.onrender.com/books/)

## Features

- Manage books: Create, read, update, and delete books.

- Request logging: Log incoming requests with details such as method, URL, and timestamp.

- Error handling: Gracefully handle errors during the logging process.

## Prerequisites

- Node.js (>= 14.x)

- MongoDB

## Installation

1. Clone the repository:

```sh
   git clone https://github.com/yourusername/book-management.git
   cd book-management
```

2. Install dependencies:

```sh
   npm install
```

3. Create a `.env` file in the root directory with the following content:



```plaintext
  PORT=3000
  MONGO_URI=your_mongo_uri
  LOG_FILE_PATH=./request_logs.log
```


Replace `your_mongo_uri` with your actual MongoDB connection string.



## Usage



1. Start the server:

```sh
npm start

```

2. The server will be running on `http://localhost:3000`.


3. Use the following endpoints to manage books:



  - `GET /books` - Retrieve all books

  - `GET /books/:id` - Retrieve a book by ID

  - `POST /books` - Create a new book

  - `PUT /books/:id` - Update a book by ID

  - `DELETE /books/:id` - Delete a book by ID

4. Access logs:

  - During local development, logs can be accessed directly from the log file specified in the `.env` file.

  - After deployment, logs can be viewed at `/view-logs` endpoint. For example, if the application is deployed at `https://book-management-gmfm.onrender.com`, logs can be viewed at [https://book-management-gmfm.onrender.com/view-logs/](https://book-management-gmfm.onrender.com/view-logs/)

---

## Request Logging Middleware

The request logging middleware captures the following details for each incoming request:

- Request method (e.g., GET, POST, PUT, DELETE)

- Request URL or route

- Timestamp (date and time of the request)

![image](https://github.com/utkarshrajdev/Book-management/assets/108168962/a883f209-af4b-41e1-92f7-411afb099a45)


### Configuration

The middleware is configured using the `LOG_FILE_PATH` environment variable to specify the log file path. The log entries are formatted as JSON strings and appended to the specified log file.



### Example Configuration

In your `.env` file, set the log file path:



```sh
LOG_FILE_PATH=./request_logs.log

``` 



### How to Access and Interpret Log Files



The log file specified by `LOG_FILE_PATH` will contain log entries for each incoming request. Each log entry is a JSON string with the following structure:

```json
{
 "method": "GET",
 "url": "/books",
 "timestamp": "2024-06-05T12:34:56.789Z"
}

```

- `method`: The HTTP method of the request.

- `url`: The URL or route of the request.

- `timestamp`: The date and time when the request was received.

### Error Handling

If there is an issue writing to the log file, an error message will be logged to the console. The application will continue to function without interruption.

### Testing Error Handling

To test error handling in the logging middleware:

1. Set an invalid log file path in your `.env` file:

```sh
LOG_FILE_PATH=/invalid/path/request_logs.log

```

2. Restart the application and make a request.

3. Check the console for an error message indicating that the log file could not be written.

4. Revert the log file path to a valid location after testing:

```plaintext
  LOG_FILE_PATH=./request_logs.log
```



5. Restart the application again.

## Deployment

### Plan the Deployment

To deploy the updated Express application with the request logging middleware to your production environment on Render, follow these steps:

1. **Set Up MongoDB**:

  - Ensure you have a MongoDB instance running. You can use MongoDB Atlas for a managed database service.

2. **Configure Environment Variables**:

  - Set up the necessary environment variables (`PORT`, `MONGO_URI`, `LOG_FILE_PATH`) in your Render dashboard. Ensure that `LOG_FILE_PATH` points to a valid location where your application can write log files.

3. **Deploy to Render**:

  - Push your code to a Git repository (e.g., GitHub).

  - Create a new web service on Render and connect it to your Git repository.

  - Render will automatically build and deploy your application.

### Example `.env` Configuration for Production

```plaintext
PORT=3000
MONGO_URI=your_production_mongo_uri
LOG_FILE_PATH=/var/log/book_management/request_logs.log

```

Ensure the log file path (`LOG_FILE_PATH`) is writable by the application and appropriate for your production environment.

### Post-Deployment Checks

1. **Monitor Log Files**:

  - After deployment, monitor the log files to verify that request information is being logged as expected.

2. **Check for Errors**:

  - Ensure there are no errors related to writing log files. Check the Render dashboard logs for any issues.

3. **Performance Monitoring**:

  - Conduct post-deployment checks to ensure that the middleware does not introduce performance bottlenecks or issues.

