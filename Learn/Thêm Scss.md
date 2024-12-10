# Public và add scss vào trong file:
 - app.use(public.static("đường_dẫn_thư_mục"))
 - npm install node-sass --save-dev
 - "watch": "node-sass --watch views/scss/app.scss --output views/css/app.css",
 - npm run watch
 - Nếu muốn reload lại cả scss và hbs, js thì cần tạo 1 thư mục là nodemon.json
    + Bên trong thêm { "ext": "js scss hbs" } lúc này khi ctrl + s thì tự nó sẽ cập nhật