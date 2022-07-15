import { SubmitFeedbackUseCase } from './submitFeedbackUseCase';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Example comment',
      screenshot: 'data:image/png;base64,test'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toBeCalled();
    expect(sendMailSpy).toBeCalled();
  });
  
  it('should   be able to submit feedback without a type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'Example comment',
      screenshot: undefined
    })).rejects.toThrow();

    expect(createFeedbackSpy).not.toBeCalled();
    expect(sendMailSpy).not.toBeCalled();
  });
  
  it('should not be able to submit feedback without a comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,test'
    })).rejects.toThrow();

    expect(createFeedbackSpy).not.toBeCalled();
    expect(sendMailSpy).not.toBeCalled();
  });

  it('should not be able to submit feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Example comment',
      screenshot: 'test'
    })).rejects.toThrow();

    expect(createFeedbackSpy).not.toBeCalled();
    expect(sendMailSpy).not.toBeCalled();
  });
});