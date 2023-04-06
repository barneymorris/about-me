
# about-me
**Personal website**

https://syrpinboris.ru

![enter image description here](https://i.ibb.co/WWLQb6x/photo-2023-04-06-23-07-05.jpg)

That's my personal site.

You can freely fork and use this site for you purposes (as well as use it as you personal site and change something for you)

# How to run it???

First of all, if you want you publish this site to WWW, make sure you've opened the following ports:

 - 3000 
 - 80 
 - 443 
 - 1337

After that, create in root folder that called **enviroment** and make sure it has the following structure as it showed below

enviroment -> certs -> YOUDOMAIN.crt
enviroment -> certs -> YOUDOMAIN.key
enviroment -> strapi -> .env

Where YOUDOMAIN.crt is a SSL certificate, YOUDOMAIN.key is a private key for you SLL certificate and .env file is a files with enviroment variables for strapi. For me it looks like this: 
![https://i.ibb.co/8DhJ3pt/photo-2023-04-06-23-03-26.jpg](https://i.ibb.co/8DhJ3pt/photo-2023-04-06-23-03-26.jpg)
Next:

copy .env file to strapi/.env file (create this one if this does not exist)

Next:
Go to frontend/next.config.js and paste you strapi host url
Make similar at the end of nginx file at frontend/nginx/default.conf

After that, you can run it: docker-compose up
After that it should works fine
