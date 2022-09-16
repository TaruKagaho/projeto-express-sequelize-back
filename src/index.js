// require( "dotenv" ).config();

const express = require( "express" );

const { router } = require( "./router" );
const { db } = require( "./database/connection" );

const app = express();

db.hasConnection();

app.use( express.json() );
app.use( router );

app.listen( 8000 );
