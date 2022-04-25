const getUser = (req,res) => {
    res.json({statusCode: 200, message:"Success", data: {"name" : "Saqib", "age": "24" }});
}

module.exports = {
    getUser
}