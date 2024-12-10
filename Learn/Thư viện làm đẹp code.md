# Thư viện làm đẹp code

# Cài npm: 'npm i prettier lint-staged husky --save-dev'

# pakage {
    "beautiful": "prettier --single-quote --trailing-comma all --write \"*.{js,json,scss}\" ",
}

# Giải thích:
\"*.{js,json,scss}\"
* là áp dụng cho tất cả các file
.{js, json, scss} chỉ định áp dụng cho tất cả các file có đuôi file như vậy

# Trong trường hợp nằm trong 1 thư mục src thì viết như sau:
"beautiful": "prettier --single-quote --trailing-comma all --write \"src/**/*.{js,json,scss}\"",

# Cách sử dụng:
- Vào terminal chạy lệnh npm run beautiful là nó sẽ format lại code 