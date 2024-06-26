const express = require("express")
const router = express.Router()
const verifyJWT =require("../middleware/verifyJWT")

const branchesController=require("../controller/branchesController")

router.get("/",branchesController.getAllBranches)
// router.post("/create", branchesController.createBranch)
router.post("/create",verifyJWT, branchesController.createBranch)
router.delete("/:id",verifyJWT,branchesController.deleteBranch)
router.put("/update",verifyJWT,branchesController.updateBranch)

module.exports = router 