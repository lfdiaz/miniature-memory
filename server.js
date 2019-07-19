const express = require("express");
const path = require("path");
const app = express();
var bodyParser = require('body-parser')

// app.use(express.static(path.join(__dirname, "build")));

app.use(bodyParser.json());

app.set("port", process.env.PORT || 3001);

let usersInfo = [
  {
    username: "luis",
    password: "luis"
  },
  {
    username: "adam",
    password: "adam"
  }
];

app.post("/login", (req, res) => {
  
  const { username, password } = req.body;
  
  const userData = usersInfo.filter(person => person.username === username);
  
  if (userData.length > 0) {
    if (userData[0].password === password) {
      res.status(200);
      res.send("success");
    } else {
      res.status(404);
      res.send("Incorrect password");
    }
  } else {
    res.status(404);
    res.send("User not found");
  }
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  usersInfo.push({ username, password });
  res.status(200);
  res.send("User added successfully");
});

let profileData = [
  {
    username: "luis",
    name: "Luis Diaz",
    address1: "Some Address in Houston",
    address2: "",
    city: "Houston",
    state: "TX",
    zipcode: "77204"
  }
];

app.post("/profile", (req, res) => {
  const { username, name, address1, address2, city, state, zipcode } = req.body;
  profileData.push({
    username,
    name,
    address1,
    address2,
    city,
    state,
    zipcode
  });
  res.status(200);
  res.send("Profile Added");
});

app.get("/profile", (req, res) => {
  const { username } = req.params;
  const userData = profileData.filter(
    person => person.username === username
  )[0];
  if (userData) {
    res.status(200);
    res.send(userData);
  } else {
    res.status(400);
    res.send("Data not found for user");
  }
});

const userHistory = [{
  deliveryDate: new Date(),
  gallons: 10,
  address: 'New Address in Houston',
  suggestedPrice: 100,
  amount: 10 * 100
},
{
  deliveryDate: new Date(),
  gallons: 5,
  address: 'Separate Address in Texas',
  suggestedPrice: 10,
  amount: 10 * 5
},
]

app.get('/quote', (req, res) => {
  res.send(userHistory)
})

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
