# Setup Node

```sh
npm install express mongoose dotenv cors jsonwebtoken bcryptjs nodemon
```

```sh
npm touch server.js .env routes.js models.js middleware.js 
```

# Setup Mongo DB

```sh
brew tap mongodb/brew                                                                                 
brew install mongodb-community@7.0
```

# Start Mongo Db Service

```sh
brew services start mongodb-community@7.0
```

# Enter mongo db shell

```sh
mongosh
```

# Create db user in mongo db

```sh
use admin
db.createUser({ user: "dev", pwd: "dev", roles: ["root"] })
```

