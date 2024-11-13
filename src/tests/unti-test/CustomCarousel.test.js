import CustomCarousel from '../../components/CustomCarousel';
import { render, screen, fireEvent } from '@testing-library/react';

describe('CustomCarousel Component', () => {
  const options = ['👍', '🤔', '👎'];
  const mockHandleOptionSelect = jest.fn();
  const question = "How was your day overall?";

  it('renders question correctly', () => {
    render(<CustomCarousel question={question} options={options} onOptionSelect={mockHandleOptionSelect} />);
    expect(screen.getByText(question)).toBeInTheDocument();
  });

  it('renders options correctly', () => {
    render(<CustomCarousel options={options} onOptionSelect={mockHandleOptionSelect} />);
    options.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('click on 👍 option', () => {
    render(<CustomCarousel options={options} onOptionSelect={mockHandleOptionSelect} />);
    const optionButton = screen.getByText('👍');
    fireEvent.click(optionButton);
    expect(mockHandleOptionSelect).toHaveBeenCalledWith('👍');
  });

  it('click on 🤔 option', () => {
    render(<CustomCarousel options={options} onOptionSelect={mockHandleOptionSelect} />);
    const optionButton = screen.getByText('🤔');
    fireEvent.click(optionButton);
    expect(mockHandleOptionSelect).toHaveBeenCalledWith('🤔');
  });
  
  it('click on 👎 option', () => {
    render(<CustomCarousel options={options} onOptionSelect={mockHandleOptionSelect} />);
    const optionButton = screen.getByText('👎');
    fireEvent.click(optionButton);
    expect(mockHandleOptionSelect).toHaveBeenCalledWith('👎');
  });

  it('displays title Thumbs Up on 👍 option hover', () => {
    render(<CustomCarousel options={options} onOptionSelect={mockHandleOptionSelect} />);
    const optionButton = screen.getByText('👍');
    fireEvent.mouseOver(optionButton);
    expect(screen.getByTitle('Thumbs Up')).toBeInTheDocument();
  });

  it('displays title Thinking on 🤔 option hover', () => {
    render(<CustomCarousel options={options} onOptionSelect={mockHandleOptionSelect} />);
    const optionButton = screen.getByText('🤔');
    fireEvent.mouseOver(optionButton);
    expect(screen.getByTitle('Thinking')).toBeInTheDocument();
  });
  
  it('displays title Thumbs Down on 👎 option hover', () => {
    render(<CustomCarousel options={options} onOptionSelect={mockHandleOptionSelect} />);
    const optionButton = screen.getByText('👎');
    fireEvent.mouseOver(optionButton);
    expect(screen.getByTitle('Thumbs Down')).toBeInTheDocument();
  });
});
