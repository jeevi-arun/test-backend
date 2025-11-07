import express from 'express';
import dotenv from 'dotenv';


dotenv.config();


const app = express();

// Middleware to parse JSON
app.use(express.json());



// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
