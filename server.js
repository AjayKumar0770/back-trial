const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS so the Vercel frontend can make requests to this API
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Space, physics, and motivational quotes array
const quotes = [
  {
    text: "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.",
    author: "Carl Sagan",
    category: "Cosmology"
  },
  {
    text: "Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious.",
    author: "Stephen Hawking",
    category: "Inspiration"
  },
  {
    text: "Somewhere, something incredible is waiting to be known.",
    author: "Carl Sagan",
    category: "Discovery"
  },
  {
    text: "The universe is under no obligation to make sense to you.",
    author: "Neil deGrasse Tyson",
    category: "Astrophysics"
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    category: "Philosophy"
  },
  {
    text: "For small creatures such as we the vastness is bearable only through love.",
    author: "Carl Sagan",
    category: "Philosophy"
  },
  {
    text: "We are all in the gutter, but some of us are looking at the stars.",
    author: "Oscar Wilde",
    category: "Inspiration"
  },
  {
    text: "That's one small step for man, one giant leap for mankind.",
    author: "Neil Armstrong",
    category: "Exploration"
  },
  {
    text: "Equipped with his five senses, man explores the universe around him and calls the adventure Science.",
    author: "Edwin Hubble",
    category: "Science"
  },
  {
    text: "The stars don't look bigger, but they do look brighter.",
    author: "Sally Ride",
    category: "Exploration"
  },
  {
    text: "To orbit the Earth is to see our planet as a fragile blue marble suspended in a vast cosmic dark.",
    author: "Unknown Astronaut",
    category: "Perspective"
  },
  {
    text: "Time and space are modes by which we think and not conditions in which we live.",
    author: "Albert Einstein",
    category: "Physics"
  }
];

// Root endpoint with API status
app.get('/', (req, res) => {
  res.json({
    status: "online",
    message: "Welcome to the Zero-Gravity Quotes API. Get a random quote at /api/quote"
  });
});

// Endpoint to fetch a random quote
app.get('/api/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json(randomQuote);
});

// Port setup for Render deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Zero-Gravity Quote API orbiting at: http://localhost:${PORT}`);
});
