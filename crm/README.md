# Simple CRM

This project provides a minimal CRM skeleton written in Node.js using Express. It exposes basic REST endpoints for managing contacts and serves a small web interface. The server is designed so it can be integrated with automation tools such as [n8n](https://n8n.io) using HTTP nodes.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

The server listens on port `3000` by default.

## Usage with n8n

You can connect n8n to this CRM via HTTP nodes. For example, to add a contact from an n8n workflow, send a `POST` request to `http://<server>/api/contacts` with a JSON body containing `name` and `email` fields. To fetch all contacts, use a `GET` request to `http://<server>/api/contacts`.

Feel free to extend this project with additional CRM features, authentication, or database support.
