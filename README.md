# Todolist

Following this tutorial
http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/

Need to create a data/ directory which will contain the database.

Once Mongo has been installed and set up, add some data!
(In the main directory)
mongod --dbpath data/

mongo (opens the mongo cli)
use nodetest1


newtodo= [{"label": "Get the appartment keys", "state": true}, {"label": "Learn how to Node", "state": false}, {"label": "Install MongoDB", "state": true}]

db.todocollection.insert(newtodo)

db.todocollection.find().pretty();
