const express = require("express");
const path = require("path");
const app = express();
const config = require('./config/database.js')
const mongoose = require('mongoose')
const User = require('./models/User')
const Profile = require('./models/Profile')
const FuelQuote = require('./models/FuelQuote')

mongoose.connect(config.databaseURL, {useNewUrlParser: true})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => {
  console.log('Successfully connected to mongoDB')
})


// app.use(express.static(path.join(__dirname, "build")));

app.set("port", process.env.PORT || 3001);

app.post("/login", express.json(), async (req, res) => {
  
  const { username, password } = req.body;
  
  if(!username || !password){
    res.status(400)
    res.send('Username and password are required')
    return 
  }
  
  await User.findOne({username}, (error, user) => {
    
    if(error || !user){
      res.status(400);
      res.send("User nor found")
    }
    if(user && user.password === password){
      res.status(200);
      res.json({id: user._id, username: user.username})
    }
  })

});

app.post("/signup", express.json(), async (req, res) => {
  
  const { username, password } = req.body;
 
  if(!username || !password){
    res.status(400)
    res.send('Username and password are required')
    return
  }

  const newUser = await new User({username, password}).save()
 
  if(newUser){
    res.status(200);
    res.json({userId: newUser._id, username: newUser.username})
  }
});

app.post("/profile", express.json(), async(req, res) => {
  const { username, name, address1, address2, city, state, zipcode } = req.body;

  try {
    const user = await User.findOne({username}).exec()
    if(!user){
      throw new Error("The username specified was not found")
    }
    const userId = user && user._id
    const newProfile = userId && await new Profile({name, address1, address2, city, state, zipcode, userId}).save()
    res.status(200)
    res.json(newProfile)
  }catch(e){
    if(!name || !address1 || !city || !zipcode ){
      res.status(400)
      res.send('Please fill all the required fields')
    }else{
      res.status(400)
      res.send(e)
    }
  }
});

app.get("/profile", express.json(), async (req, res) => {
  try {
    const { username } = req.query;
   
    const user = await User.findOne({username}).exec()
    
    const userId = user && user._id
    
    const userProfile = userId && await Profile.findOne({userId}).exec()
    if(!userProfile){
      throw new Error('User not found')
    }
    res.status(200);
    res.json(userProfile)
  }catch(e){
    res.status(500)
    res.send('User not found')
  }
 
});

app.post('/quote', express.json(), async (req, res) => {
  const {deliveryDate, gallons, address, suggestedPrice, username} = req.body;

  try{
    if(!deliveryDate || !gallons){
      throw new Error('Please fill the delivery date and gallons fields')
    }

    const user = await User.findOne({username}).exec()
    
    const userId = user && user._id

    const fuelQuote = userId && await FuelQuote.findOneAndUpdate({userId}, {userId, deliveryDate, gallons, address, suggestedPrice}, {upsert: true}).save()
    res.status(200)
    res.json(fuelQuote)


  }catch(e){
    res.status(400)
    res.send(e)
  }
})

app.get('/quote', express.json(), async (req, res) => {
  const {username}= req.query
 
  try{

    const user = await User.findOne({username}).exec()
    const userId = user && user._id
    const profile = userId && await Profile.findOne({userId}).exec();
  
    const fuelQuote = await FuelQuote.find({userId}).exec()
    
    res.status(200)
    res.json({...fuelQuote, name: profile.name})
  }catch(e){
    res.status(400)
    res.send(e)
  }
})

app.post("/pricing",express.json(), async (req, res) => { 
  const { gallons, username } = req.body;
  const currentPricePerGallon = 1.50;
  
  try{
    const user = await User.findOne({username}).exec()
    
    const userId = user && user._id
    
    const profile = userId && await Profile.findOne({userId}).exec();
    const fuelQuoteUser = userId && await FuelQuote.find({userId}).exec();
    
    if(!profile){
      throw new Error("User not found")
    }

    let locationFactor = 0.04;

    if(profile.state && (profile.state.toLowerCase().includes('texas') || profile.state.toLowerCase().includes('tx'))){
      locationFactor = 0.02
    }

    let rateHistoryFactor = 0
    if(fuelQuoteUser){
      rateHistoryFactor = 0.01
    }

    const gallonsRequestedFactor = gallons > 1000 ? 0.02 : 0.03;

    const companyProfitFactor = 0.1;

    const rateFluctuation = 0.04
   
    const margin = currentPricePerGallon * (locationFactor - rateHistoryFactor + gallonsRequestedFactor + companyProfitFactor + rateFluctuation)
    
    const suggestedPrice = currentPricePerGallon + margin
   
    res.status(200)
    res.json(suggestedPrice)

  }catch(e){
    res.status(400)
    res.send(e)
  }

})

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
