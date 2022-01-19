
const express = require("express")
const router = express.Router()
const {inventory_add,inventory_delete,inventory_view,inventory_update} = require('../controllers/inventory_controller')

router.get('/route_param/:para1/:para2', (req, res) => {
    // req.parms is a dictionary
    //acces them using req.parms.para1  or req.params.para2

    //Query parameter: http://localhost:3000/route_param/1/2?sortbyName=name  
    //access them by req.query
    res.send(req.params);
});

router.post('/add',inventory_add )

router.get('/view',inventory_view)

router.put('/edit', inventory_update)

router.delete('/delete/:item_name',inventory_delete) 

module.exports = router;
