import Summary from '../../components/Summary';
import { render, screen } from '@testing-library/react';

describe('Summary Component', () => {
  const answers = ['👍', '🤔', '👍', '👎'];
  const questions = [
    { title: "How was your day overall?" },
    { title: "How was your week overall?" },
    { title: "How was your month overall?" },
    { title: "How was your year overall?" },
  ];

  it('displays each question and answer', () => {
    render(<Summary answers={answers} questions={questions} />);

    expect(screen.getByText(/How was your day overall\?: 👍/i)).toBeInTheDocument();
    expect(screen.getByText(/How was your week overall\?: 🤔/i)).toBeInTheDocument();
    expect(screen.getByText(/How was your month overall\?: 👍/i)).toBeInTheDocument();
    expect(screen.getByText(/How was your year overall\?: 👎/i)).toBeInTheDocument();
  });
});
