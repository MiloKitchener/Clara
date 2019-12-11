# Clara
Clara is a municipal machine learning and analytics platform,  providing ideas and insights to the municipality of Kitchener.
https://clara.kitchener.ca

![](/claraScreenshot.png "")

## Contents ##
1. [Introduction](#introduction)
2. [Features](#features)
3. [Requirements](#requirements)
4. [Local Deployment](#local-deployment)
5. [Production Deployment](#prod-deployment)

<a name="introduction"></a>
## Introduction ##
Clara is a municipal machine learning and analytics platform,  providing ideas and insights to the municipality of Kitchener. When clara.kitchener.ca is launched you will be able to log on and view visualized data using open data, third party data (i.e., Open Weather Map and Waze), and sensor data (this will be provided from the lights and other sensors from around the city) which we call Insight Tiles. They will consist mainly of graphs (which will be comparing many sets of data) and a description (to give you an idea of what the chart is about). In the future, we hope to use machine learning to generate more insights based on the current trends. You will also be able to group insight tiles into sets we call dashboards. With these collections of data, we hope to help you find new insights that will help the city in ways you’ve never considered before. We will also provide you with a suggestion form to curate ideas and find new ways to benefit the city. In this doc we’ll go through how to set up Clara on your laptop, the server, and the basics of both the front and backend.

<a name="features"></a>
## Features ##
- Register users
- Login users
- Have user dashboards
- Create graphs (Open and Real-time data)
- Save user graphs
- Read in open data sets
- Ideas page functionality (commenting, voting ect)
- Lab services functionality
- Backend processing for reading in ARCGIS datasets

<a name="requirements"></a>
## Requirements ##
The first step to setting up Clara on your local machine will be to download all of these programs. 
1. Node / NPM
   - https://nodejs.org/en/#download
2. Angular 7
   - install with `sudo npm install -g @angular/cli` after npm is installed
3. Sass
   - install with `sudo npm install --save-dev  --unsafe-perm node-sass` after npm is installed
4. Python 3
   - https://www.python.org/downloads/release/python-373/
5. Git
   - https://git-scm.com/downloads
6. Putty
   - https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html
7. Cordova (Needed for Ionic Deployment)
   - https://cordova.apache.org/


<a name="local-deployment"></a>
## Local Deployment ##
### Frontend: ###
1. Install all of the required programs, found under **setup**
2. Navigate to `ClaraFrontend`
3. Run `npm install`
4. Run `amplify init`
5. Run `ng serve`
6. Navigate to the website using `http://localhost:4200/`

### Backend: ###
1. Ensure the frontend has been deployed
2. Run `amplify push`

### Electron: ###
1. Navigate to `ClaraFrontend`
2. If it hasn't been done already, run `npm install`
3. Run `ng build --prod`
4. Run `npm run electron`

### Ionic: ###
1. Navigate to `ionic`
2. run `npm install`
3. run `ionic serve`
4. Navigate to the website using the URL: http://localhost:8100/
5. If desired, change the web layout to a mobile responsive layout 
   1. [Firefox How To](https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_Mode)
   2. [Chrome How To](https://developers.google.com/web/tools/chrome-devtools/device-mode/)

<a name="prod-deployment"></a>
## Production Deployment ##
### Frontend: ###
1. Navigate to ClaraFrontend
2. Run `ng build --prod`
3. Upload the contents of the `dist/claraFrontend` folder in the project root directory to the AWS s3

### Backend: ###
1. Run `amplify env checkout master`
2. Run `amplify push`

### Electron: ###
https://medium.com/how-to-electron/a-complete-guide-to-packaging-your-electron-app-1bdc717d739f

### Ionic: ###
https://ionicframework.com/docs/v1/guide/publishing.html
