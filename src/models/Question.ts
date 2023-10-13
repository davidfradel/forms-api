import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
});

const QuestionnaireSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  questions: {
  type: [QuestionSchema],
  required: true,
  validate: {
    validator: function(questionsArray: any[]) {
      return questionsArray.length > 0;
    },
    message: 'Le tableau de questions ne peut pas être vide.'
    }
  }
});

export default mongoose.model('Question', QuestionnaireSchema);