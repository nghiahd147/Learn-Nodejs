import routerNews from "./news.js"

function route(app) {

    app.use('/news', routerNews)

    app.get('/', (req, res) => {
        res.render('home')
    })
    
    // Mặc định là get vs router search
    
    app.get('/search', (req, res) => {
        // Query Paramater
        // Cách viết request http://localhost:3000/search?q=hocnodejs&author=nghiatq 
        // (Query Paramater được viết sau dấu ? muốn viết thêm thì thêm ký tự &)
        // Khi viết req.query nó sẽ hiện ra 1 object chứa các phần tử trong link 
        console.log(req.query) // -> {q: 'hoc nodejs', author: ' nghiatq'}
        console.log(req.query.q) // -> hocnodejs
        res.render('search')
    })
    
    app.post('/search', (req, res) => {
        console.log(req.body)
        res.render('search')
    })
    
}

export default route