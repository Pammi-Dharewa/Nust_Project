const express = require('express');
const cors = require('cors');

// Create an instance of Express
const app = express();

// Enable CORS for all requests
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Mock items for listing
const mockItems = [
  { id: 1, name: 'AC-DC Converter 1', price: 100, category: 'AC-DC Converters', description: 'High-efficiency AC-DC converter with 90% efficiency.' },
  { id: 2, name: 'Offline Switcher 1', price: 150, category: 'Offline Switchers', description: 'Reliable offline switcher with overvoltage protection.' },
  { id: 3, name: 'AC-DC Converter 2', price: 110, category: 'AC-DC Converters', description: 'Compact AC-DC converter with 85% efficiency.' },
  { id: 4, name: 'Offline Switcher 2', price: 160, category: 'Offline Switchers', description: 'High-performance offline switcher with thermal shutdown feature.' },
  { id: 5, name: 'AC-DC Converter 3', price: 120, category: 'AC-DC Converters', description: 'Rugged AC-DC converter for industrial applications.' },
  { id: 6, name: 'Offline Switcher 3', price: 170, category: 'Offline Switchers', description: 'Efficient offline switcher with low standby power consumption.' },
  { id: 7, name: 'AC-DC Converter 4', price: 130, category: 'AC-DC Converters', description: 'High-reliability AC-DC converter with short-circuit protection.' },
  { id: 8, name: 'Offline Switcher 4', price: 180, category: 'Offline Switchers', description: 'Compact offline switcher with high power density.' },
  { id: 9, name: 'AC-DC Converter 5', price: 140, category: 'AC-DC Converters', description: 'Low-noise AC-DC converter suitable for sensitive electronics.' },
  { id: 10, name: 'Offline Switcher 5', price: 190, category: 'Offline Switchers', description: 'Versatile offline switcher with multiple protection features.' },
  { id: 11, name: 'AC-DC Converter 6', price: 150, category: 'AC-DC Converters', description: 'High-voltage AC-DC converter for power distribution systems.' },
  { id: 12, name: 'Offline Switcher 6', price: 200, category: 'Offline Switchers', description: 'Advanced offline switcher with soft-start functionality.' },
  { id: 13, name: 'AC-DC Converter 7', price: 160, category: 'AC-DC Converters', description: 'Energy-efficient AC-DC converter for green technologies.' },
  { id: 14, name: 'Offline Switcher 7', price: 210, category: 'Offline Switchers', description: 'Robust offline switcher for harsh environmental conditions.' },
  { id: 15, name: 'AC-DC Converter 8', price: 170, category: 'AC-DC Converters', description: 'High-power AC-DC converter for industrial machinery.' },
];


// Handle login API request
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required.',
    });
  }

  if (email === 'user@example.com' && password === 'password') {
    const token = 'mocked-token';
    return res.json({
      success: true,
      token,
    });
  } else {
    return res.status(401).json({
      success: false,
      message: 'Invalid credentials!',
    });
  }
});

// Mock API endpoint for fetching items
app.get('/api/mock-items', (req, res) => {
  return res.json(mockItems);
});

// Define the port for the server to listen on
const PORT = 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
