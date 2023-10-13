import express from 'express';
import Response from '../models/Response';

const router = express.Router();

// Answer at a questionnaire
router.post('/:id/responses', async (req, res) => {
  try {
    const response = new Response({
      questionnaireId: req.params.id,
      ...req.body,
    });
    await response.save();
    res.status(201).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get the responses by user
router.get('/:id/responses/:userId', async (req, res) => {
  try {
    const responses = await Response.find({
      questionnaireId: req.params.id,
      userId: req.params.userId,
    });
    if (!responses) {
      return res.status(404).send();
    }
    res.send(responses);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
