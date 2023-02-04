import "src/styles/input-field.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

function InputField(props: InputProps) {
  const { type, label, inputRef, ...restProps } = props;
  return (
    <div className="input-field-wrap">
      <label>{label}</label>
      <input type={type} ref={inputRef} {...restProps} />
    </div>
  );
}

export default InputField;
