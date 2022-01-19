const {db} = require('../firebase_setup/firebase')

const inventory_add = async (req, res) => {

    const inventory = db.collection('inventory');

    const doc = await inventory.doc(req.body.item).get();

    if (!req.body.item || !req.body.quantity)
        return res.status(400).send("There are missing feilds in request body")
    else if (doc.exists)
        return res.status(400).send("duplicate item")
    else {

        await inventory.doc(req.body.item).set({
            quantity: req.body.quantity
        });
        return res.send("success")
    }
}
const inventory_view = async (req, res) => {

    var temp = JSON.parse('{}')

    const inventory = db.collection('inventory');
    const snapshot = await inventory.get();
    if (snapshot.empty)
        return res.send("Empty inventory")

    snapshot.forEach(doc => {
        temp[doc.id] = doc.data()
    });
    const result = { "items": temp }
    return res.json(result);
}

const inventory_update = async (req, res) => {

    if (!req.body.item || !req.body.quantity)
        return res.status(400).send("There are missing feilds in request body")

    const inventory = db.collection('inventory');
    const doc = await inventory.doc(req.body.item).get();

    if (doc.exists) {
        await inventory.doc(req.body.item).set({
            quantity: parseInt(req.body.quantity)
        });
        return res.send("Update successfull")
    }
    else
        return res.status(404).send("Item not in inventory")

}
const inventory_delete = async (req, res) => {

    const inventory = db.collection('inventory');
    const doc = await inventory.doc(req.params.item_name).get();

    if (doc.exists) {
        await db.collection('inventory').doc(req.params.item_name).delete();
        return res.send("Deleted Successfully");
    }
    else
        return res.status(400).send("Item not in inventory")
}

module.exports= {
    inventory_add,
    inventory_delete,
    inventory_update,
    inventory_view
}
