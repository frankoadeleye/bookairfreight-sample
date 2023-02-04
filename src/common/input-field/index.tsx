import "src/styles/input-field.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
}

function InputField(props: InputProps) {
  const { type, label, ...restProps } = props;
  return (
    <div className="input-field-wrap">
      <label>{label}</label>
      <input type={type} {...restProps} />
    </div>
  );
}

export default InputField;
