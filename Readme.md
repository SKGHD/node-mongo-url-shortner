# URL Shortner with NodeSJ, EXPRESS and MongoDB

## Heroku Setup

https://dashboard.heroku.com/apps/YOUR-APP/settings

## MongoDB Atlas Setup

Create a new database in Mongo Atlas.

https://www.mongodb.com/cloud/atlas

Get the driver key from 'connect' button.


#### Go down to the config-vars section: 

Add mongo driver key from mongo atlas to the heroku config var as MONGODB_KEY.
and done !

### Example: 
**MONGODB_KEY** : mongodb+srv://**&lt;user&gt;**:**&lt;password&gt;**@cluster0.b8dz.mongodb.net/urlshortner?retryWrites=true&w=majority
