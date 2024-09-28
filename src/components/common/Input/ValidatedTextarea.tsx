import React from "react";

interface ValidatedTextareaProps {
  label: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (value: string) => void;
  textareaClassName?: string;
  defaultValue?: string;
}

const ValidatedTextarea: React.FC<ValidatedTextareaProps> = ({
  label,
  placeholder = "",
  rows = 6,
  value = "",
  onChange,
  defaultValue,
  textareaClassName = "",
}) => {
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <label className="text-md mb-3 block font-medium text-dark dark:text-white">
        {label}
      </label>
      <textarea
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={handleTextareaChange}
        defaultValue={defaultValue}
        className={`w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary ${textareaClassName}`}
      ></textarea>
    </div>
  );
};

export default ValidatedTextarea;
