const express = require("express");
const path = require("path");
const axios = require("axios");
const cors = require("cors"); // Import the cors middleware

const app = express();

// Use the cors middleware to allow requests from all origins
app.use(cors());

// Define the directory where your static files are located
const publicDir = path.join(__dirname, "public");
app.use(express.static(publicDir));

// Define a route to serve playersData.json
app.get("http://localhost:5000/playersData.json", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "playersData.json"));
  } catch (error) {
    console.error("Error sending file:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/getAllPlayers"), (req, res) => {
  try {
    res.json([
      {
        "id": 1,
        "name": "LeBron James",
        "team": "Los Angeles Lakers",
        "image": "https://th.bing.com/th/id/OIP.mfxJp0E0EFkhIfWDbGtQ4QAAAA?rs=1&pid=ImgDetMai",
        "careerStats": {
          "G": [1490],
          "PTS": [27.1],
          "TRB": [7.5],
          "AST": [7.4],
          "FG%": [50.6],
          "FG3%": [34.8],
          "FT%": [73.6],
          "eFG%": [54.7],
          "PER": [27.1],
          "WS": [262.7]
        }
      },
    
      {
        "id": 2,
        "name": "Stephen Curry",
        "team": "Golden State Warriors",
        "image": "https://th.bing.com/th/id/OIP.Ayahq97Fgk6_A0PmSGzmOAAAAA?rs=1&pid=ImgDetMain",
        "careerStats": {
          "G": [954],
          "PTS": [24.8],
          "TRB": [4.7],
          "AST": [6.4],
          "FG%": [47.3],
          "FG3%": [42.6],
          "FT%": [91.0],
          "eFG%": [58.2],
          "PER": [23.6],
          "WS": [134.8]
        }
      },
    
      {
        "id": 3,
        "name": "Anthony Davis",
        "team": "Los Angeles Lakers",
        "image": "https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11373/headshot.png",
        "careerStats": {
          "G": [735],
          "PTS": [24.1],
          "TRB": [10.6],
          "AST": [2.5],
          "FG%": [52.3],
          "FG3%": [29.7],
          "FT%": [79.5],
          "eFG%": [79.5],
          "PER": [53.6],
          "WS": [111.8]
        }
      },
    
      {
        "id": 4,
        "name": "Nikola Jokic",
        "team": "Denver Nuggets",
        "image": "https://th.bing.com/th/id/OIP.jgIuZ6dZipMsH6tpfOD6igHaFY?rs=1&pid=ImgDetMain",
        "careerStats": {
          "G": [674],
          "PTS": [21],
          "TRB": [10.7],
          "AST": [6.9],
          "FG%": [55.7],
          "FG3%": [35.0],
          "FT%": [82.7],
          "eFG%": [59.2],
          "PER": [28.1],
          "WS": [111.4]
        }
      },
    
      {
        "id": 1,
        "name": "LeBron James",
        "team": "Los Angeles Lakers",
        "image": "https://th.bing.com/th/id/OIP.mfxJp0E0EFkhIfWDbGtQ4QAAAA?rs=1&pid=ImgDetMai",
        "careerStats": {
          "G": [1490],
          "PTS": [27.1],
          "TRB": [7.5],
          "AST": [7.4],
          "FG%": [50.6],
          "FG3%": [34.8],
          "FT%": [73.6],
          "eFG%": [54.7],
          "PER": [27.1],
          "WS": [262.7]
        }
      },
    
      {
        "id": 1,
        "name": "LeBron James",
        "team": "Los Angeles Lakers",
        "image": "https://th.bing.com/th/id/OIP.mfxJp0E0EFkhIfWDbGtQ4QAAAA?rs=1&pid=ImgDetMai",
        "careerStats": {
          "G": [1490],
          "PTS": [27.1],
          "TRB": [7.5],
          "AST": [7.4],
          "FG%": [50.6],
          "FG3%": [34.8],
          "FT%": [73.6],
          "eFG%": [54.7],
          "PER": [27.1],
          "WS": [262.7]
        }
      },
    
      {
        "id": 1,
        "name": "LeBron James",
        "team": "Los Angeles Lakers",
        "image": "https://th.bing.com/th/id/OIP.mfxJp0E0EFkhIfWDbGtQ4QAAAA?rs=1&pid=ImgDetMai",
        "careerStats": {
          "G": [1490],
          "PTS": [27.1],
          "TRB": [7.5],
          "AST": [7.4],
          "FG%": [50.6],
          "FG3%": [34.8],
          "FT%": [73.6],
          "eFG%": [54.7],
          "PER": [27.1],
          "WS": [262.7]
        }
      },
    
      {
        "id": 1,
        "name": "LeBron James",
        "team": "Los Angeles Lakers",
        "image": "https://th.bing.com/th/id/OIP.mfxJp0E0EFkhIfWDbGtQ4QAAAA?rs=1&pid=ImgDetMai",
        "careerStats": {
          "G": [1490],
          "PTS": [27.1],
          "TRB": [7.5],
          "AST": [7.4],
          "FG%": [50.6],
          "FG3%": [34.8],
          "FT%": [73.6],
          "eFG%": [54.7],
          "PER": [27.1],
          "WS": [262.7]
        }
      },
    
      {
        "id": 1,
        "name": "LeBron James",
        "team": "Los Angeles Lakers",
        "image": "https://th.bing.com/th/id/OIP.mfxJp0E0EFkhIfWDbGtQ4QAAAA?rs=1&pid=ImgDetMai",
        "careerStats": {
          "G": [1490],
          "PTS": [27.1],
          "TRB": [7.5],
          "AST": [7.4],
          "FG%": [50.6],
          "FG3%": [34.8],
          "FT%": [73.6],
          "eFG%": [54.7],
          "PER": [27.1],
          "WS": [262.7]
        }
      },
      {
        "id": 1,
        "name": "LeBron James",
        "team": "Los Angeles Lakers",
        "image": "https://th.bing.com/th/id/OIP.mfxJp0E0EFkhIfWDbGtQ4QAAAA?rs=1&pid=ImgDetMai",
        "careerStats": {
          "G": [1490],
          "PTS": [27.1],
          "TRB": [7.5],
          "AST": [7.4],
          "FG%": [50.6],
          "FG3%": [34.8],
          "FT%": [73.6],
          "eFG%": [54.7],
          "PER": [27.1],
          "WS": [262.7]
        }
      }
    
    ]
    );
  } catch (error) {
    console.error("Error sending file:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
