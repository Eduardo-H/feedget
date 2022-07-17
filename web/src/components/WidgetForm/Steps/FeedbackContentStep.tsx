import { FormEvent, useState } from 'react';
import { ArrowLeft } from 'phosphor-react';

import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from '../ScreenshotButton';
import { api } from '../../../lib/api';
import { Loading } from '../../Loading';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  handleRestartFeedback: () => void;
  handleFeedbackSent: () => void;
}

export function FeedbackContentStep({ 
  feedbackType, 
  handleRestartFeedback,
  handleFeedbackSent
}: FeedbackContentStepProps) {
  const [comment, setComment] = useState('');
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSubmitingFeedback, setIsSubmitingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setIsSubmitingFeedback(true);

    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot
    });

    handleFeedbackSent();
  }

  return (
    <>
      <header>
        <button 
          type="button" 
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100 transition-colors"
          onClick={handleRestartFeedback}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="flex items-center gap-2 text-xl leading-6">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Describe with details what's happening..."
          onChange={(event) => setComment(event.target.value)}
        />

        <div className="flex gap-2 mt-2">
          <ScreenshotButton 
            screenshot={screenshot}
            handleScreenshotTaken={setScreenshot}
          />

          <button
            type="submit"
            className="p-2 bg-brand-500 font-medium rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled={comment.trim().length === 0 || isSubmitingFeedback}
          >
            { isSubmitingFeedback 
              ? <Loading />
              : 'Submit Feedback'
            }
          </button>
        </div>
      </form>
    </>
  );
}