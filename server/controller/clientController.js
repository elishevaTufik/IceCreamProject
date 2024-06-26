const Client = require("../models/Client");

const getAllClients = async (req, res) => {

    if(req.user.permission!='admin')
    {
        return res.status(401).json({message:'Unauthorized' })
    }

    const clients = await Client.find().lean()
    if (!clients?.length) {
        return res.status(400).json({ message: 'No clients' })
    }
    res.json(clients)
}

const deleteClient = async (req, res) => {

    if(req.user.permission!='admin')
    {
        return res.status(401).json({message:'Unauthorized' })
    }

    const { id } = req.params
    const client = await Client.findById(id).exec()
    if (!client) 
    {
        return res.status(400).json({ message: 'client not found' })
    }
    const result = await client.deleteOne()
    const reply=`client '${result.name}' ID ${result._id} deleted`
    res.json(reply)
}

const updateClient = async (req, res) => {

    if(req.user.permission!='admin' || req.user.permission!='client')
    {
        return res.status(401).json({message:'Unauthorized' })
    }
    const{id}=req.params
    const {name, password,email, phone,points}= req.body
    if (!id || !name || !password || !username ||!phone) {
    return res.status(400).json({ message: "fields are required" })
    }
    const client= await Client.findById(id)
    if (!client) {
    return res.status(400).json({ message: "client not found" })
    }
    client.name = name
    client.password = password
    client.email = email
    client.phone = phone
    client.points = points
    const updatedclient = await client.save()
    res.json(`"${updatedclient.name}" updated`)

}


module.exports = {
    getAllClients,
    deleteClient,
    updateClient
}