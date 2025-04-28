## Execution

**Note**: All commands listed below must be run from the root.

The client (frontend) and server (backend) run on the ports configured in the `.env` file. You must copy the `.env.example` file into a new `.env` file and populate the `BACKEND_PORT` and `FRONTEND_PORT` variables to the desired values, or leave the defaults.

```shell
# Creates your .env file with default values
cp .env.example .env
```

### Containerised execution

To isolate the app as much as possible and emulate a production environment, the frontend and backend run in separate Docker containers.

To start, make sure to run the following command to load the ports configuration correctly into your environment variables:

```
source .env
```

If this command doesnt work for you, don't worry, you can proceed to the next step and it will use the default ports.

Build the containers and run the app with:

```
docker compose up --build
```

### Execution for Local Development

Start by installing the necessary packages:

```shell
npm run install-packages
```

You can work quicker when developing locally by running the following command:

```shell
npm run start
```

This will run the React App and the backend API without containers and with nodemon so changes occur instantly.

To run only the frontend and backend separately, run:

```shell
npm run server  # For backend
npm run client  # For frontend
```
