import express from 'express';
import Question from '../models/Question';

const router = express.Router();

// Create a questionnaire
router.post('/', async (req, res) => {
  try {
    const questionnaire = new Question(req.body);
    await questionnaire.save();
    res.status(201).send(questionnaire);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all questionnaires
router.get('/', async (req, res) => {
  try {
    const questionnaires = await Question.find();
    
    res.status(200).send(questionnaires);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a questionnaire
router.get('/:id', async (req, res) => {
  try {
    const questionnaire = await Question.findById(req.params.id);
    if (!questionnaire) {
      return res.status(404).send();
    }
    res.send(questionnaire);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
