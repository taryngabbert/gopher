
## Quick Start:

Clone

Install dependencies:

```ShellSession
npm i
```

Run it:

```ShellSession
npm start -s
```

## Edit configs:
./server/config/config.js:

```ShellSession
export default {
    // Session Config
    session: {
        secret: '',
        resave: false,
        saveUninitialized: false
    },

    // Auth0 Config
    auth0: {
        clientID: '',
        clientSecret: '',
    },

    // MLabs Config
    mongoUri: '',
};
```

## Edit Middleware:
./server/middleware/middleware.js

For now it just goes to the next function


## Generate component files

```ShellSession
gulp component --name COMPONENT_NAME
```
