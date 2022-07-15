import { useState } from 'react';

import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccesStep } from './Steps/FeedbackSuccessStep';

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import otherImageUrl from '../../assets/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Bug',
    image: {
      source: bugImageUrl,
      alt: 'Image of a bug'
    }
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideaImageUrl,
      alt: 'Image of a lamp'
    }
  },
  OTHER: {
    title: 'Other',
    image: {
      source: otherImageUrl,
      alt: 'Image of a cloud'
    }
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);    
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      { feedbackSent ? (
        <FeedbackSuccesStep handleRestartFeedback={handleRestartFeedback} />
      ) : (
        <>
          { !feedbackType ? (
            <FeedbackTypeStep handleSelectFeedback={setFeedbackType} />
          ) : (
            <FeedbackContentStep 
              feedbackType={feedbackType} 
              handleRestartFeedback={handleRestartFeedback}
              handleFeedbackSent={() => setFeedbackSent(true)}
            />
          ) }
        </>
      ) }

      <footer className="text-sm text-zinc-300">
        Made with ♥ by <a href="https://github.com/Eduardo-H" className="underline underline-offset-2 hover:text-zinc-100 transition-colors">Eduardo</a>
      </footer>
    </div>
  );
}