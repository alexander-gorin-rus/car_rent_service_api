# car_rent_service_api
This is a test task for https://synaptik.ru/ 
This service works with .env file
1. choose a port on that this app will be running. If port is not defined in .env, the app uses 8000 as a default port
2. in order to properly connect to PostgresQL  configure .env like this
PGUSER=dbuser \
PGHOST=database.server.com \
PGPASSWORD=secretpassword \
PGDATABASE=mydb \
PGPORT=3211 \
