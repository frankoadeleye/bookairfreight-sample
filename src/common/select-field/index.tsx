import "src/styles/select-field.css";

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<string | object>;
  selectedValue: string;
  selectRef: React.RefObject<HTMLSelectElement>;
}

interface OptionProps {
  name: string;
  value: string;
}

function SelectField(props: SelectFieldProps) {
  const { options, selectedValue, selectRef, ...restProps } = props;
  return (
    <select
      className="select-field"
      defaultValue={selectedValue}
      ref={selectRef}
      {...restProps}>
      {options.map((option: OptionProps, index) => {
        const { name, value } = option;
        return (
          <option key={index} value={value}>
            {name}
          </option>
        );
      })}
    </select>
  );
}

export default SelectField;
