# CDA Demo App - Frontend Compenent

## Requires CDA Demo App - Backend

### Build

Set currect API Endpoint URL either in 
* `.env` File
* Environment variable

```
NEXT_PUBLIC_API_BASE=<SET_API_URL>
```

Now build and export the static site:
```
npm ci
npm bundle
```

Deploy the created `cdapp.war` found in the root directory to a **tomcat** server.
