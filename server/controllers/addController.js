module.exports = {
    addProduct: (req,res,next) => {
        const db = req.app.get('db');
        db.add_product([req.body.title, req.body.price, req.body.desc, req.body.img])
        .then( () => {
            res.status(200).send()
        }).catch( (error) => {
            console.log(error)
            res.status(500).send(error)})
    }
}