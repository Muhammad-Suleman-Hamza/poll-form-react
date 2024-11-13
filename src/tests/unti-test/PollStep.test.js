import PollStep from '../../components/PollStep';
import { render, screen, fireEvent } from '@testing-library/react';

describe('PollStep Component', () => {
  const options = ['👍', '🤔', '👎'];
  const mockOnOptionSelect = jest.fn();
  const question = {
    options,
    title: 'How was your week overall?'
  };

  it('render question title', () => {
    render(<PollStep question={question} options={options} onOptionSelect={mockOnOptionSelect} />);
    expect(screen.getByText(question.title)).toBeInTheDocument();
  });

  it('renders question options', () => {
    render(<PollStep question={question} options={options} onOptionSelect={mockOnOptionSelect} />);
    options.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('triggers onOptionSelect when an option is clicked', () => {
    render(<PollStep question={question} options={options} onOptionSelect={mockOnOptionSelect} />);
    const optionButton = screen.getByText('👍');
    fireEvent.click(optionButton);
    expect(mockOnOptionSelect).toHaveBeenCalledWith('👍');
  });
});
