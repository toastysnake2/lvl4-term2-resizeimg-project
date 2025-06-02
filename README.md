# image resizer project
the deci level4 term 2 graduation project, its supposed to resize pre-existing images, allow you to upload images,and resize those aswell
## how to access
use this url:
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

# scripts

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
