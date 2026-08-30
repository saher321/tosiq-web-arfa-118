PMS
    - Client
        Components
        Store (zustand)
        Utils
        Layouts
        Pages
            - authentication
            - customers
            - projects
            - employees
            - tasks
        - pkgs: zustand, tailwindcss, axios, toast, hook form, spinners, router, momentjs

    - Server (Services :: APIS)
        - Modules
            - authentication
            - customers
            - projects
            - employees
            - tasks
        - Config
            - db config
        - Utils
            - common functions (generate otp, sending email, others)
        - .env
            - confidentials data
        - Middlewares
            - checks and rules
        pkgs: nodemon, express, mongoose, bcryptjs, jsonwebtoken, cors, dotenv, 