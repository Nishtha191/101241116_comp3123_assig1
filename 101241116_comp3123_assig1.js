const { response } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
var user = require("./users.json");

app.get('/', (req, res) => {
    res.send('HOMEPAGE');
});

router.get('/user',(req,res)=>{
    let uid = req.query.uid;
    if(uid <=user.length && uid > 0)
    {
        let response = {
                "id":user[uid-1].id,
                "name":user[uid-1].name,
                "email":user[uid-1].email,
                "address":user[uid-1].address.street +", "+ user[uid-1].address.city +", "+user[uid-1].address.zipcode,
                "phone":user[uid-1].phone
            }
        res.send(response)
    }
    else{
        res.send("No user Found")
    }
    
})
router.get('/users/all',(req,res)=>{
    
    const response = user.sort((a, b) => a.username.localeCompare(b.username));
    res.send(response);
      
})

app.use('/', router);
app.listen(process.env.port || 8000);
console.log('Web Server is listening at port '+ (process.env.port || 8000));
