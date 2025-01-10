run:
	docker run -d -p 3000:3000 --rm --name logsapp logsapp
run:dev:
	docker run -d -p 3000:3000 -v "C:/Users/Andrew/Desktop/react-router:/app" -v /app/node_modules -v logs:/app/data --rm --name logsapp logsapp:volumes
stop:
	docker stop logsapp