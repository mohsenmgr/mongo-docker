docker exec -it 6a58965c5d8f mongosh


use admin;

db.auth("admin", passwordPrompt())

db.auth("root","root")

use userdb;

db.users.find({})

