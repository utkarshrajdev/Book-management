# Book Management Application

## Overview

This is a full-stack book management application built with Express and MongoDB. It includes custom request logging middleware to capture essential information about incoming requests for debugging and monitoring purposes.

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

2. Install dependencies:
   ```sh
   npm install


3. Create a .env file in the root directory:
   ```sh
   PORT=3000
   MONGO_URI=your_mongo_uri
   LOG_FILE_PATH=./request_logs.log

## Usage

1. **Installation**: Clone the repository and install dependencies.
   ```sh
   git clone https://github.com/yourusername/book-management.git
   cd book-management
   npm install