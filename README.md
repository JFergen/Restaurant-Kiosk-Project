Latest BACKEND CODE IS LOCATED AT https://github.com/JFergen/Restaurant-Kiosk-Project/tree/dev/front-end/customerApp/src

1.) To run: unit tests you must cd into in the following directory: 
    
    'Restaurant-Kiosk-Project\front-end\customerApp'

2.) Then run: 

    firebase emulators:exec --only firestore 'npm test'

3.) The file for unit test is located in the following directory: 
     
    'Restaurant-Kiosk-Project\front-end\customerApp\__tests__' 
    
    The file is called 'App-test.js'


1.) open andriod studio to the app you want work on for example: C:\Users\Het Patel\Restaurant-Kiosk-Project\front-end\customerApp
  
    1.1) open your virtual device make sure it is running

2.) open windows power shell as admin

3.) in power shell cd to your directory for the app you want to work on for example: C:\Users\Het Patel\Restaurant-Kiosk-Project\front-end\customerApp
  
    3.1.) npm install
  
    3.2.) npm i @react-native-firebase/firestore
  
    3.3)  npm i react-native-paper
  
    3.4.) npm i react-native-vector-icons
    
    3.5) npm i '@react-native-firebase/functions'
    
    3.6) npm i '@react-native-firebase/firestore'
     
    3.7) npm i '@react-native-firebase/auth'
    
    3.8) npm i react-native-gesture-handler
    
    

4.) in andriod studio
 
    4.4.) open android/app/build.gradle
 
    4.5.) in the defultConfig struct add multiDexEnabled true as shown below:

    android {

    ....

        defaultConfig {
            ....
            multiDexEnabled true
        }
  
5.) In power shell cd to your directory for the app you want to work on for example: C:\Users\Het Patel\Restaurant-Kiosk-Project\front-end\customerApp
  
    5.0.) Type the below command
  
    5.1.) npx react-native run-android
  
    5.1.2) if you have a debug error which says failed to generate debug file re-run npx react-native run-android
  
    5.1.3) if you have a debug error then go to android\app\build\generated\res\google-services\debug and delete the debug folder and re-run npx react-native run-android

6.) if all goes well you should see your app on your virtual device and you can add data through the firebase console. Go to database and on the top left select Cloud Firestore


7.) Documentation for database usage: https://firebase.google.com/docs/firestore

8.) Documentation for Firebase user authentication: https://firebase.google.com/docs/auth/android/firebaseui
