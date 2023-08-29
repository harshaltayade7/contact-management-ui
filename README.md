# Contact Management Portal

# System Design:
![SYS-DESIGN](https://github.com/harshaltayade7/contact-management-ui/assets/41384406/dd1e915d-9663-4925-830b-39d88301721e)













# Technology used:
# Front end -> 
React, Redux, React-Router, Lodash, Axios, React-Bootstrap, Bootstrap
# Back end ->
Java, Spring boot

# Repositories:
contact-management-ui:  https://github.com/harshaltayade7/contact-management-ui 

contact-service:  https://github.com/harshaltayade7/contact-service

user-service:  https://github.com/harshaltayade7/user-service


Please follow following steps to run Contact Management Portal
# Step 1: 
Create following databases in your mongodb 
	`user-service`,  `product-service`

# Step 2: 
Clone all above repositories 
	
  ```
git clone https://github.com/harshaltayade7/contact-management-ui.git
git clone https://github.com/harshaltayade7/contact-service.git
git clone https://github.com/harshaltayade7/user-service.git
```

# Step 3: 
Open `user-service` and `contact-service` using Intellij Idea
# Step 4: 
Do required installation and start the services
# Step 5: 
Go inside on `contact-management-ui` folder and open terminal
# Step 6: 
Run command – `npm install`
# Step 7: 
Run command – `npm start` which will launch `contact-management portal` 
# Step 8: 
Create your user by hitting this api 
http://localhost:7070/swagger-ui/index.html#/user-controller/createUser

# Step 9: 
Open Chrome browser and navigate to `http://localhost:3000/login`
# Step 10: 
Login using your created user credentials
# Step 11: 
Once you login successfully you can do following actions on contact-management-portal
``
Add contacts, Delete Contacts, Edit Contact, Get Contacts
``


Thank you

