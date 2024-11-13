import PollForm from '../../components/PollForm';
import { render, screen, fireEvent } from '@testing-library/react';

describe('PollForm Component', () => {
  const question = "How was your day overall?";

  it('renders the first question', () => {
    render(<PollForm />);
    expect(screen.getByText(question)).toBeInTheDocument();
  });

  it('progresses to the next question when an option is selected', () => {
    render(<PollForm />);
    const optionButton = screen.getByText('👍');
    fireEvent.click(optionButton);
    expect(screen.queryByText(question)).not.toBeInTheDocument();
  });
});
