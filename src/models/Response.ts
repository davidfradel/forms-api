import mongoose from 'mongoose';

const AnswerSchema = new mongoose.Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const ResponseSchema = new mongoose.Schema({
  questionnaireId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  answers: [AnswerSchema],
});

export default mongoose.model('Response', ResponseSchema);