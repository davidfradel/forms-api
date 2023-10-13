import { expect } from 'chai';
import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Tests for Questionnaires and responses API', () => {

  let createdQuestionnaireId: string;
  let createdQuestionId: string;
  const userId = 1234;

  describe('POST /questionnaires', () => {
    it('should create a new questionnaire', async () => {
      const response = await request.post('/api/questionnaires').send({
        title: 'Sample Questionnaire',
        description: 'This is a sample questionnaire for testing',
        questions: [
            { "question" : "Quelle est la couleur du cheval blanc d'Henri IV"}
        ]
      });

      expect(response.status).to.equal(201);
      expect(response.body).to.have.property('_id');
      createdQuestionnaireId = response.body._id;
      createdQuestionId = response.body.questions[0]._id;
      expect(response.body.title).to.equal('Sample Questionnaire');
    });
  });

  describe('GET /questionnaires', () => {
    it('should fetch all questionnaires', async () => {
      const response = await request.get('/api/questionnaires');

      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('array');
    });
  });

  describe('GET /questionnaires/:id', () => {
    it('should fetch a specific questionnaire', async () => {
      const response = await request.get(`/api/questionnaires/${createdQuestionnaireId}`);

      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('_id', createdQuestionnaireId);
      expect(response.body.title).to.equal('Sample Questionnaire');
    });
  });

  describe('POST /responses', () => {
    it('should create a new response', async () => {
      const response = await request.post(`/api/questionnaires/${createdQuestionnaireId}/responses`).send({
        userId,
        answers: [
          { questionId: createdQuestionId, answer: 'Blue' }
        ]
      });

      expect(response.status).to.equal(201);
      expect(response.body).to.have.property('_id');
      expect(response.body.answers[0].answer).to.equal('Blue');
    });
  });

  describe('GET /responses', () => {
    it('should fetch all responses', async () => {
      const response = await request.get(`/api/questionnaires/${createdQuestionnaireId}/responses/${userId}`);

      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('array');
      expect(response.body[0].userId).to.equal("1234");
      expect(response.body[0].answers[0].answer).to.equal('Blue');
    });
  });
});
