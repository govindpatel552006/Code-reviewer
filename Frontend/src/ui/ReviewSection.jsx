// ReviewSection.jsx



import Markdown from 'react-markdown';
import './Ui.css';

export default function ReviewSection({ reviewResult }) {
  return (
    <div className="reviewsection">
      <h2>Review Output</h2>
    <Markdown>{reviewResult}</Markdown>
    </div>
  );
}



