const express = require("express");

const app = express();

app.use(express.json());

const port = 7868;

let users = [];

app.get("/ping",(req,res) => {
    return res.status(200).send({message:"Hello World!"});
});

app.post("/signup", (req,res) => {
    const { username, email, password, dob } = req.body;

    if(!username){
        return res.status(400).send({error:"Username is required."});
    }
    if(!email){
        return res.status(400).send({error:"Email is required."});
    }
    if(!password.length > 8 && !password.length <= 16){
        return res.status(400).send({error:"Password length should be greater than 8 or less than 16."});
    }

    const newUser = {
        id: Date.now(),
        username,
        email,
        password,
        dob,
    };

    users.push(newUser);
    return res.status(201).send({message:"User created successsfully!", user: newUser});
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});