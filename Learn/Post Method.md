# Post Method

<form method="post" action="">
    <div class="mb-3">
        <input type="text" name="q" class="form-control" placeholder="Nhập từ khóa tìm kiếm...">
    </div>
    <button type="submit" class="btn btn-primary">Tìm kiếm</button>
</form>

- Lúc này nó sẽ gửi 1 form data chứ không gửi query parameters gắn lên url nx

- Xem form data ở Network -> Payload, nếu muốn xem ta cần sd req.body nhưng cần add thư viện express.json vì nó ko đc middleware hỗ trợ sẵn như query parameters

Code add thư viện cho middleware: app.use(express.json())
Tiếp theo ta phải add thêm phg thức post cho router nhận đó: app.post('name_router', (req, res) => console.log(req.body))
 + Nhưng vẫn cần phải có phg thức get nx thì trang router đó mới hiển thị được