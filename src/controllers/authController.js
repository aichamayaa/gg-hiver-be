

const register = (req, res) => {

    console.log(req.body);

    return res.json({
        message: "Register works!"
    });
}

module.exports = { register };