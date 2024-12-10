import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import route from './routes/index.js';

const app = express();
const port = 3000;

// Middleware req.body
app.use(express.json());

// Public static file
app.use(express.static('./public'));

// Template Engine
app.engine('.hbs', engine({ extname: '.hbs' }));
        app.set('view engine', '.hbs');
app.set('views', './views');

// HTTP Debug
app.use(morgan('combined'));

// Route
route(app);
// -> Gọi function route ra cho nó chạy,
// sau đó truyền đối số app vào để bên function có thể dùng thằng app này chạy các router bên trong hàm

app.listen(port, () => {
  console.log(`Start ${port}`);
});
