### DRESSME APP

DressMe is an app that helps you dress for the weather. Once an account is created and the user is logged in, daily weather information is displayed along with an outfit that corresponds to the conditions and user preferences. Additionally, a user can opt-in to receive a daily text alert with an outfit recommendation.

### TECHNOLOGY
Javascript/JQuery
Node
Express
CSS
HTML
Skeleton

Third Party APIs:
[World Weather Online Local API](http://developer.worldweatheronline.com/api/local-city-town-weather-api.aspx)
Twilio

### USER STORIES

The user must be able to sign in or sign up from the home page.
The user must be able to create a new account using the sign up flow.
The sign up must capture username, password, password confirm, zipcode, temperature preference, text opt in, and gender.
Username must be a 10 digit phone number. Zipcode must be a 5 digit number. Password and password confirm must match. The form must not allow submit unless this criteria is met.
Upon sign up, the user must be saved to the user collection in the database. Their password must be hashed for security.
Registered users must be able to sign in using their username and password.
Upon successful sign in, the user should see a morning, middday, and evening forecast for the zipcode saved in their profile. The user should also see an image of a clothing recommendation. This clothing recommendation is determined by the temperature and precipitation in the zipcode from their profile.
The user must be able to see their saved profile account information.
The user must be able to change and update their profile information.
The user must be able to delete their account.
After an update, the user must see a new forecast and recommendation based on the changes made.
The admin must be able to send a text message to a registered user.
The text message content must reflect the user's profile information(i.e. zipcode and gender) and the current forecast.

### SCREENSHOTS
![alt tag](http://i.imgur.com/sp8BzXp.png)
![alt tag](http://i.imgur.com/KaMgufa.png)
![alt tag](http://i.imgur.com/ji6D5qS.png)
![alt tag](http://i.imgur.com/glgquSK.png)
![alt tag](http://i.imgur.com/WeHu1ld.png)

### APPROACH

When we decided what type of app we wanted to make we spent time researching and deciding what features we wanted to have and make the app as user friendly as possible. We wanted to give the use all the information we think that they would need and not overwhelm them with too much information. After this the team thought it would be best to separate the work into 3 parts and each team member take a part. The 3 parts were getting the weather API info, styling and creating the outfits, and making the general flow of the app. Every night after we wrote code and created new features, we came together as a group and integrated our code and worked out any bugs that we noticed when doing so.

### WIRE FRAMES
![alt tag](http://i.imgur.com/O32EoZ5.png)
![alt tag](http://i.imgur.com/cXk19jE.png)
![alt tag](http://i.imgur.com/kK2yb0G.png)
![alt tag](http://i.imgur.com/y3LbpxO.png)

### FUTURE FEATURES
At present, text messages must be sent manually through the '/text' route. In future versions of this app, we would add restrictions so that only users who have admin status could access that route (currently all users default as non-admins). We would also like to add the ability for a user to specify a time of day to receive their text message and for the program to send it automatically.
