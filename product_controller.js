
module.exports = {
    create: (req, res ) => {
        const db = req.app.get('db'); 
        const {name, description, price, image_url} = req.body; 

        db.create_product([name, description, price, image_url])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send('Error on create_product')
                console.log(err); 
            }); 
    }, 
    getOne: (req, res) => {
        const db = req.app.set('db');
        const {id} = req.params; 

        db.read_product(id)
            .then(product => res.status(200).send(product))
            .catch(err => {
                res.status(500).send('Error on read_product')
                console.log(err); 
            }); 
    }, 
    getAll: (req, res) => {
        const db = req.app.set('db'); 

        db.read_products()
            .then(products => res.status(200).send(products))
            .catch(err => {
                res.send(500).send('Error on getAll ')
                console.log(err); 
            })

    }, 
    update: (req, res) => {
        const db = req.app.set('db'); 
        const {id} = req.params; 
        const {desc} = req.query; 

        db.update_product([id, desc])
            .then(()=>res.sendStatus(200))
            .catch(err => {
                res.status(500).send('Error on update ')
                console.log(err); 
            })
    }, 
    delete: (req, res) => {
        const db = req.app.set('db'); 
        const {id} = req.params; 

        db.delete_product(id)
            .then(() => res.sendStatus(200))
            .catch(err => {
                req.status(500).send('Error on delete')
                console.log(err); 
            })
    }
}