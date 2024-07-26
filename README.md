# Moderator Micro Service

## Overview

The Moderator Micro Service is a backend component designed to handle the moderation of user-submitted content. It is built using Express and JavaScript, with MySQL for database management and Docker for containerization. The service is hosted on Azure using serverless containers.


## Technologies

- **Framework:** Express
- **Language:** JavaScript
- **Database:** MySQL
- **Containerization:** Docker

## Installation using Docker

### Log in to Docker Hub
docker login

### Build the Docker image
docker build -t "docker-image-name:tag" .

### Push the Docker image to Docker Hub
docker push "docker-image-name:tag"


## Azure Hosting

- **Hosted IP Address:** 20.215.134.29 (Serverless Containers)

## Environment Variables

To run this service locally, configure the environment variables in a `.env` file located in the root directory of the project. Example `.env` file:

```env
PORT=1008
JWT_SECRET = 0881bf165dbcde1a7fc9b5f2cb2930c076e772c0513736df18dfa3a5a344bf39
ADMIN_EMAIL=admin@admin.com
ADMIN_PASSWORD=admin123
USER_ID=669d00b03502b51710df0c99
SUBMIT_SERVICE_URL=http://localhost:3000
DELIVER_SERVICE_URL=http://localhost:8080
CLIENT_API_KEY=a38d54e0e4fb18e9b5b299a3926b7c74ec7c1bc648037d7e054522ecefc40d78
