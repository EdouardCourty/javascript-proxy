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

### Disclaimer

This project was done for educational purposes only.

&copy; Edouard Courty, 2023.
