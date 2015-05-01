#Poc - RethinkDB & nodejs

##Requirements

1. Docker
2. boot2docker (Mac OS)
3. Docker Compose
4. Docker Hub

##Up the docker
```
boot2docker up
docker-compose up -d
```

##Useful commands

1. ```docker-compose run web env``` show environment variables
2. ```docker-compose stop``` stop services
3. ```sudo docker exec -i -t <id or name> bash``` to ssh to container && ```exit``` to exit the session

##Notes

1. For OS X, use command ```boot2docker ip``` to retrive correct ip of docker & use it for testing instead of localhost
