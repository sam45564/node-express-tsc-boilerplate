# node-express-tsc-boilerplate
The repo contains minimum configurations to build a project with NodeJS and ExpressJS using Typescript. Just clone the repo and start adding the functionalities.

---

## Steps followed while creating this boilerplate
- Initialized a new npm project using `npm init`.
- Installed global npm packages using `npm i -g typescript ts-node prettier`. Please note that, this boilerplate has been created in VSCode, so install Prettier extension.
- Initialized typescript's config file using `tsc --init`.
- Created `.prettierrc` file. 
- Added `.gitignore` file.
- Added `.vscode` file with settings for VSCode.

---
## Steps to run the application
- `npm run build` to generate the deployable build of the project.
- `npm run dev` to execute the application in dev mode where you don't have to restart the server for every changes as it uses **nodemon**.
- `npm run start` to execute the application directly after creating the compiled version of scripts written in typescript.


The repo contains sample API for testing he integration. Access it in your favorite tool with following url:

`http://localhost:3000/api/sample/ping`

---
## Run the application via Docker
- Create the docker image using `docker build -t <username>/<image-name> .`
- Check the created image using `docker images`
- Run the docker container in detached mode using `docker run -p <port-no>:3000 -d <username>/<image-name>`
- Check the application with the following url:
`http://localhost:<port-no>/api/sample/ping`<br/>

---

**NOTE:** The project doesn't have CI/CD script, Docker script and test framework as of now. Keep an eye on this project as all missing features will be added soon.🤞<br/><br/>
Clone the project, add your functionalities in REST approach and have fun 😊
