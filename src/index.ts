import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/testDavid');

// JSON parse
app.use(express.json());

// Routes
import questionsRoutes from './routes/questions';
import responsesRoutes from './routes/responses';

app.use('/api/questionnaires', questionsRoutes);
app.use('/api/questionnaires', responsesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app