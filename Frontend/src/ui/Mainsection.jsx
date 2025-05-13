
import ReviewSection from './ReviewSection';
import CodeSection from './CodeSection';
import './Ui.css';
import { useState } from 'react';

export default function MainSection() {
  const [reviewResult, setReviewResult] = useState('');

  return (
    <div className="maincontainer">
      <CodeSection setReviewResult={setReviewResult} />
      <ReviewSection reviewResult={reviewResult} />
    </div>
  );
}
