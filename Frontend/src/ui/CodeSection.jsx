import { useState } from 'react';
import axios from 'axios';
import './Ui.css';

export default function CodeSection({ setReviewResult }) {
  const [code, setCode] = useState('');

  async function reviewcode() {
    try {
      const response = await axios.post('http://localhost:8000/ai/get-review', { code });
      setReviewResult(response.data); // assume backend returns { result: "..." }
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="codesection">
      <p style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>Code Section</p>

      <textarea
        className="codeinput"
        placeholder="Write your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>

      <button onClick={reviewcode} className="prev-btn">Preview</button>
    </div>
  );
}
