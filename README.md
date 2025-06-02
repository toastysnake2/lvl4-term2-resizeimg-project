# image resizer project
the deci level4 term 2 graduation project, its supposed to resize pre-existing images, allow you to upload images,and resize those aswell
## how to access
* you must run the start script
* run "npm i" in command prompt to instal node modules
* use this url:
```
http://localhost:5000
```

## api endpoints
### homepage endpoint
url:
```
http://localhost:5000
```
method: GET

this should open the homepage

### images list endpoint
url:
```
http://localhost:5000/get-uploaded-images
```
method: GET

this api is used to read all files in the image directory, this should return a json with file names

### the resizing api
url:
```
http://localhost:5000/resize?name=bonjour.jpg&width=80&height=80
```
method: GET

this is the endpoint that does all the resizing, you can replace "bonjour.jpg" with any jpg in the images directory, you can add any number in width and height

### check raw img
url:
```
http://localhost:5000/images/bonjour.jpg
```
method: GET

just to make sure the image exists in the directory

# scripts(all run in command prompt not powershell)

## start
starts nodemon in src/index.ts (which is the file that starts the server)

## test
runs build(which compiles the ts files) and runs jasmine(runs the test in any .test.ts file)

## prettier
goes through every file and makes it pretty

## lint
runs eslint

## supertest
runs all supertests in resizeimg.test.ts and src/tests/uploadimg.test.ts

# extra notes
* the bio of upload doesnt work cuse i couldnt figure it out without breaking the rest of my code by accident so i decided to add the silly note in the website, its a extra so it doesnt matter anyways
* you must be in the same folder as the json file in order for npm i / npm instal to work
* ignore the first few weird msgs by prettier its cuse it scaneed an .jpg file and couldnt find anythiing to change
