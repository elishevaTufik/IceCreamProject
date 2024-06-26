const express = require("express")
const router = express.Router()

const verifyJWT =require("../middleware/verifyJWT")

const messagesController=require("../controller/messagesController")
router.use(verifyJWT)

router.get("/getAll",messagesController.getAllMessages)
router.get("/",messagesController.getMessageByIdClient)
router.get("/getMessagesNotChecked",messagesController.getMessagesNotChecked)
router.post("/", messagesController.writeMessage)
router.put("/update/:id",messagesController.updateChecked)

module.exports = router