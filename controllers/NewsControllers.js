const getNewsControllers = (req, res) => {
    res.render('news')
}

const detailNewsControllers = (req, res) => {
    res.render('news')
    res.send('News Detail')
}

export {
    getNewsControllers,
    detailNewsControllers
}