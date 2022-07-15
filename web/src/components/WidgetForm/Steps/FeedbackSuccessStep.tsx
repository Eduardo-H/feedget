import { CloseButton } from '../../CloseButton';

import successImageUrl from '../../../assets/success.svg';

interface FeedbackSuccesStepProps {
  handleRestartFeedback: () => void;
}

export function FeedbackSuccesStep({
  handleRestartFeedback
}: FeedbackSuccesStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImageUrl} alt="" className="w-10 h-10" />
        <span className="text-xl mt-2">Thanks for the feedback!</span>

        <button
          type="button"
          className="py-2 px-6 mt-6 bg-zinc-600 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          onClick={handleRestartFeedback}
        >
          Send another feedback
        </button>
      </div>
    </>
  );
}