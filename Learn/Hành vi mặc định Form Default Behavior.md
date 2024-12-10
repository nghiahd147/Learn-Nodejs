# Hành vi mặc định form default behavior

- Ta có 1 form submit:
name trong input có tác dụng là name parameters hiểu q=tu_khoa_trong_o_input
method là phương thức gửi đi
action là router mình muốn chuyển đến và mang theo parameters

<div class="mt-4">
    <form method="get" action="/news">
    <div class="mb-3">
        <input type="text" name="q" class="form-control" placeholder="Nhập từ khóa tìm kiếm...">
    </div>
    <button type="submit" class="btn btn-primary">Tìm kiếm</button>
    </form>
</div>    

- Ví dụ trên gửi đên router /news, sau khi submit xong ta có thể lấy được cái parameters như thường ở router /news

app.get('/news', (req, res) => {
    console.log(req.query.q)
    res.render('news')
})