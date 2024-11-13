import PollForm from '../../components/PollForm';
import { render, screen, fireEvent } from '@testing-library/react';

describe('PollForm Integration Test', () => {
  it('progresses through all questions and shows the summary', () => {
    render(<PollForm />);
    
    // Simulate answering first question
    fireEvent.click(screen.getByText('👍'));
    // Simulate answering second question
    fireEvent.click(screen.getByText('🤔'));
    // Simulate answering third question
    fireEvent.click(screen.getByText('👍'));
    // Simulate answering fourth question
    fireEvent.click(screen.getByText('👎'));

    // Check that the summary slide is shown
    expect(screen.getByText(/Your Responses:/i)).toBeInTheDocument();
    expect(screen.getByText(/How was your day overall\?: 👍/i)).toBeInTheDocument();
    expect(screen.getByText(/How was your week overall\?: 🤔/i)).toBeInTheDocument();
    expect(screen.getByText(/How was your month overall\?: 👍/i)).toBeInTheDocument();
    expect(screen.getByText(/How was your year overall\?: 👎/i)).toBeInTheDocument();
  });
});
