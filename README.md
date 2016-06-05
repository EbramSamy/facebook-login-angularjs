Login system with Facebook in AngularJS
====================================================

Facebook give a example about how to do a login system with facebook in a web page, but the problem that i had was the facebook user data wasn't catch in the scope, and i wanted to do something else with this data in the rest of controller.

This repo contains a html file (index.html) with its controller (indexCtrl.js), which one has a methods to do login with our facebook account, to do this the controller needs the module "angular-facebook.js".

Run index.html (with the others files) in a server. In Linux/Ubuntu could be Apache in the var/www/html folder. Or in Windows with Xampp. In iOS i don't know.

In http://localhost/ you will see a "Login with facebook" button. When you click it and accept the permissions to connect your facebook account with your facebokk application, you will see in the console (In Chrome Browser -> Developers Tools ... Ctrl + shift + i) a print that show your facebook account data (user name and user id).

# Steps to create and configure the facebook application and put id in our js application (controller)

* In https://developers.facebook.com/ sign in with your facebook account.

* Create a new facebook application.

* The URL of the site will be http://localhost/

* Be sure that the configuration is:

  * URL site = http://localhost/

  * App domains = localhost

* Copy the application id and paste in indexCtrl.js in this part:

``````
var idAplicationFacebook = 'put-here-the-application-id';

``````

* If you want your application will be tested by other facebook users, configure your application in mode "public application"
