# Clara
Clara is a municipal machine learning and analytics platform,  providing ideas and insights to the municipality of Kitchener.
https://www.dashboard.askclara.ca

![](/claraScreenshot.png "")

## Contents ##
1. [Introduction](#introduction)
2. [Features](#features)
3. [Requirements](#requirements)
4. [Local Deployment](#local-deployment)
5. [Production Deployment](#prod-deployment)
5. [Alexa Integration](#alexaIntegration)

<a name="introduction"></a>
## Introduction ##
Clara is a municipal machine learning and analytics platform,  providing ideas and insights to the municipality of Kitchener. When askclara.ca is launched you will be able to log on and view visualized data using open data, third party data (i.e., Open Weather Map and Waze), and sensor data (this will be provided from the lights and other sensors from around the city) which we call Insight Tiles. They will consist mainly of graphs (which will be comparing many sets of data) and a description (to give you an idea of what the chart is about). In the future, we hope to use machine learning to generate more insights based on the current trends. You will also be able to group insight tiles into sets we call dashboards. With these collections of data, we hope to help you find new insights that will help the city in ways you’ve never considered before. We will also provide you with a suggestion form to curate ideas and find new ways to benefit the city. In this doc we’ll go through how to set up Clara on your laptop, the server, and the basics of both the front and backend.

<a name="features"></a>
## Features ##
- Create users
- Login users
- Have user dashboards
- Create graphs
- Save user graphs
- Read in open data sets
- Ideas page functionality (commenting, voting ect)
- Backend processing for reading in arcgis datasets
- Backend functionality for normalizing dataset field names
- Alexa activity feed

- Alexa skills/responses (canned responses):
- UV rating in kitchener
- Events in kitchener today
- Customer service information

- Sensors we can access:
   - Uv
   - Temperature
   - IR
   - Pressure
   - Humidity
   - Gyroscope
   - Accelerometer
   - Sound
   - Light
   - Flame sensor

- Sensor /matrix
   - IR controller
   - Android to matrix
   - Android to arduino
   - Add matrix sensor data to S3
   - RFID on arduino


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
5. Django
   - https://www.djangoproject.com/download/
6. MySQL
   - https://dev.mysql.com/downloads/installer/
7. Git
   - https://git-scm.com/downloads
8. Putty
   - https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html


<a name="local-deployment"></a>
## Local Deployment ##
### Frontend: ###
1. Install all of the required programs, found under **setup**
2. Navigate to ClaraFrontend
3. Run `npm install`
4. Run `ng serve`
5. Navigate to the website using the URL: http://localhost:4200/
6. If backend is also being run locally, navigate to ClaraFrontend->src->environments->environment.ts and change the `backendIP` value to `http://localhost:8000/`, then change the `backendIPWS` to `ws://localhost:8000/`

### Backend: ###
1. Navigate to ClaraBackend 
2. Install the python 3 dependencies using pip
3. Manage the database settings in base.py
4. Run ”python manage.py makemigrations” and “python manage.py migrate” to set up database
5. Run “python manage.py createsuperuser” to create a user
6. Run “python manage.py runserver” to start a server up
7. Navigate to the backend using the URL: http://localhost:8000

### Electron: ###
1. Navigate to ClaraFrontend
2. If it hasn't been done already, run `npm install`
3. Run `ng build --prod`
4. Run `npm run electron`



<a name="prod-deployment"></a>
## Production Deployment ##
### Frontend: ###
1. Navigate to ClaraFrontend
2. Run `ng build --prod`
3. Upload the contents of the `dist` folder in the project root directory to the AWS s3

### Backend: ###
1. TBD

<a name="alexaIntegration"></a>
## Alexa Integration ##
To set up an Alexa skill [follow this tutorial](https://developer.amazon.com/docs/custom-skills/steps-to-build-a-custom-skill.html)

*NOTE: if your skill is still not working on an alexa device and she is unsure of what you are trying to tell her ensure they both have the same language (may have to make the skill in en(US) or en(CA))*

**Description:**
- The “AskClara” Alexa skill was developed through the alexa developer console.
- The skill is available in beta test from the Digital Kitchener amazon developer account
- 2 pi 3’s are being configured to work with the alexa skill
- As of now the Alexa skill functionality supports asking about current events, uv rating and customer service contact information.
- The alexa skill functionality and request handling is done through AWS lambdas
- The lambda code will eventually send get requests to our database and return live data for the user.  

**Use case:**
- Wake word: “clara the cat”
- Sample phrase: “Alexa, ask Clara The Cat what events are going on in Kitchener today”
- Sample phrase: “Alexa, ask Clara The Cat if the sun is strong in Kitchener”

**Alexa setup:**
- To register your device to your amazon developer acc [follow these steps](https://github.com/alexa/avs-device-sdk/wiki/Create-Security-Profile)
- [Follow the rest of these steps to install and start alexa on your pi](https://developer.amazon.com/docs/alexa-voice-service/set-up-raspberry-pi.html)
- *NOTE you may need to change config.txt to config.json when running the setup command*
- The install will take around 30 min and may freeze on install.
- If the install freezes restart the pi and run the “bash ./setup.sh ./config.json” command again to resume the install 
- Run `sudo su` to use the root user
- Change the `~/.asoundrc` file to the following content (change the playback settings to match your device if using bluetooth speaker, else change it for your audio output device)
`pcm.!default
{
type asym
playback.pcm {
  type plug
       slave.pcm {
               type bluealsa
               interface "hci0"
               device "D2:12:68:18:11:CB"
               profile "a2dp"
       }
}
capture.pcm {
  type hw
  card 2
  device 0
}
}`


**Startup:**
- To run alexa navigate to the directory the SDK was installed into
- Run `bash ./startsample.sh`
- The console will prompt you when alexa is idle and ready for voice commands
