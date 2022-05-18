# Pagaleve - Code Test

## Running project
```
docker compose up
```

# Routes
### Create customer
```
route: http://localhost:3000/customers
method: POST
body:
  {
    "name": "Cleverson",
    "email": "cleverson@gmail.com",
    "password": "cle123"
  }
```

### Find all customer
```
route: http://localhost:3000/customers
method: GET
body: null
```

### Delete customer
```
route: http://localhost:3000/customers/:uuid
method: DELETE
body: null
```

### Update customer
```
route: http://localhost:3000/customers/:uuid
method: PUT
body:
  {
    "name": "Cleverson Updated"
  }
```

### Search
```
route: http://localhost:3000/customers/search?name=Maria&name=Cleverson
method: GET
body: null
```
