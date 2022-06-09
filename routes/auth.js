const router = require("express").Router();


router.get("/test", (req, res) => {
    res.send("testing user");
})

module.exports = router