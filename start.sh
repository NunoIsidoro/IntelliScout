docker rm -f iscout
docker rmi iscout_image
docker build -t iscout_image .
docker run --restart=always --link mysql -d -p 60000:60000 --name iscout iscout_image
docker ps
docker logs -f iscout
