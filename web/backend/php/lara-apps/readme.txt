Steps to run and install Laravel

1. Download and install Composer
    - https://getcomposer.org/download/

2. When we are installing the composer exe then we will give php.exe file
then check on add this to path 
    -> location for php.exe
        - D:\xampp82\php\php.exe     or     C:\xampp\php\php.exe

3. select give option

4. how to run laravel application
    run these two command in separate terminal
    1. npm run dev
    2. php artisan server

5. it will provide url like this, copy this and paste it in browser search bar
    - http://127.0.0.1:8000/
    then you will see welcome page on browser


OTHER SIDE

When you will down my laravel application then you need to config it

1. run this command
    - npm install
    and 
    - composer install

    copy the file .env.example save as .env through terminal
    run these two command one after one
    1. cp .env.example .env
    2. php artisan key:generate

    After that follow step no 4 to run entire application