# Backend Assignment - Node.js + TypeScript + MongoDB

## Project Overview

This project implements a simple Node.js web server with RESTful APIs using TypeScript and MongoDB. It manages users, posts, and comments data fetched from JSONPlaceholder, stored in MongoDB, and exposes endpoints for CRUD operations. The goal is to demonstrate backend API design, data handling, and TypeScript type safety.

## Features

- Fetch and load users, posts, and comments from JSONPlaceholder API into MongoDB.
- CRUD operations for users including fetching, adding, updating, and deleting.
- Structured TypeScript interfaces for all data models.
- Proper error handling with meaningful HTTP status codes and messages.

## Project Setup

### Prerequisites

- Node.js (Latest LTS recommended)
- MongoDB (local or Atlas cluster)
- npm

### Installation

```bash
npm install
npm init
npm i mongoose axios dotenv typescript mongoDB
```

## Data Models
                User
                
                Post
                
                Comment
                
                Address
                
                Geo
                
                Company

## API Endpoints

Method	       Endpoint                  	Description
GET             /load        	  Loads users with posts & comments from JSONPlaceholder into MongoDB
DELETE	        /users	        Deletes all users
DELETE	        /users/:userId	Deletes a user by userId
GET	            /users/:userId	Retrieves user data including posts and comments
POST	          /users	        Adds a new user (rejects if user exists)
PUT             /users/:userId	Updates an existing user by userId


##Running the Project

npm run start

