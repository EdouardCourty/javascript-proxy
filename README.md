# Node.JS HTTP & HTTPs request Proxy

### Usage

The Makefile contains all the recipes you need to create a keypair & start the proxy.  
To create a keypair:
```shell
make generate-ssl-certificate
```

To run the proxy using Docker:  
```shell
make up
```
`make rebuild` can be used during the development to rebuild the container with the latest files.  


### Environment variables

The `.env` file contains all the necessary environment variables the server will use.

```dotenv
PROXY_HTTP_PORT=2551
PROXY_HTTPS_PORT=2552

PROXY_MAX_BODY_SIZE=32mb

PROXY_USERNAME=username
PROXY_PASSWORD=password
```

The two first variables, `PROXY_HTTP_PORT` & `PROXY_HTTPS_PORT` are the ports used by the proxy.

The server is secured by BasicAuth authentication, using the username/password combo defined by the `PROXY_USERNAME` & `PROXY_PASSWORD` environment variables.  

The `PROXY_MAX_BODY_SIZE` contains the maximum size of the body the proxy can handle.


### Disclaimer

This project was realized for educational purposes only.

&copy; Edouard Courty, 2023.
