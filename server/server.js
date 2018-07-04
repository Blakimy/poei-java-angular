var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var urlServer = 'http://localhost:5000';

var app = express();

var teams = [

];

var players = [
];

var students = [
  {
      id:1,
      image: 'https://www.thehindu.com/sport/football/article18590831.ece/alternates/FREE_300/Paulo%20Dybala',
      firstname: 'Paolo',
      lastname: 'Dybala',
      notes: [14, 5, 7],
      group: 'POEI Java'
    },
    {
        id:2,
      image: 'https://www.thehindu.com/sport/football/article18590831.ece/alternates/FREE_300/Paulo%20Dybala',
      firstname: 'Chris',
      lastname: 'Chris',
      notes: [19, 15, 17],
      group: 'POEI Java'
    },
    {
        id:3,
      image: 'https://www.thehindu.com/sport/football/article18590831.ece/alternates/FREE_300/Paulo%20Dybala',
      firstname: 'Jean-François',
      lastname: 'El Flouz',
      notes: [4, 12, 20],
      group: 'ESD'
    },
    {
      id:4,
      image: 'https://www.thehindu.com/sport/football/article18590831.ece/alternates/FREE_300/Paulo%20Dybala',
      firstname: 'Francesco',
      lastname: 'El Flouz',
      notes: [4, 12, 20],
      group: 'ESD'
    }
  ]
// Middlewares
app.use(bodyParser.json());

//allow cross domain query
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, DELETE");
  next();
});

// Routes
app.get('/teams', (req, res) => res.json(teams));
app.get('/students', (req, res) => res.json(students));
app.get('/players', (req, res) => res.json(players));
app.get('/teams/:team/players', (req, res) => {
  var team = req.params.team;
  var playersFiltered = players.filter(player => player.current_team == team);
  return res.json(playersFiltered);
})

app.post('/teams', function(req, res) {
  var id = getLastId(teams);
  var team = {
    id: id + 1,
    logo: req.body.logo,
    name: req.body.name,
    country: req.body.country,
    stadium: req.body.stadium,
    coach: req.body.coach,
    founded: req.body.founded,
    nbCup: req.body.nbCup
  };
  teams.push(team);
  res.json(team);
})

// Helper functions
function getLastId(arr) {
  var maxId = 0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i].id > maxId) {
      maxId = array[i].id
    }
  }
  return maxId;
}

app.listen(5000, () => console.log('Serveur écoute le port 5000...'));
