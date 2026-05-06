# Smart Platform - UI - jQuery
UI for Smart Platform
### Docker Build
```
$ docker build -t smart-ui:1.0.0 .
```
### Docker Start
```
$ docker run -d -p 8001:8001 smart-ui:1.0.0
```
### Local Machine Build with Node Package Manager (NPM)
```
$ npm install
```
### Local Machine Start with Node Package Manager (NPM)
```
$ npm start
```
### Tools
- Public URLs for sending previews: https://ngrok.com/
### System architecture of Smart Platform
Applied software development techniques:
- Microservice Architecture
- API Gateway Pattern

![System Architecture](https://raw.githubusercontent.com/ProudProgrammer/smart-tools/master/plantuml/system-architecture.png)
