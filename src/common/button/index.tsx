import "src/styles/form-submit-button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

function Button(props: ButtonProps) {
  const { text, ...restProps } = props;
  return (
    <button {...restProps} className="form-submit-button">
      {text}
    </button>
  );
}

export default Button;
