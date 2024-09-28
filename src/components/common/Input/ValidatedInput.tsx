import React, { useState } from "react";

interface ValidatedInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  inputClassName?: string;
  defaultValue?: string;
}

const ValidatedInput: React.FC<ValidatedInputProps> = ({
  label,
  placeholder = "",
  value = "",
  onChange,
  defaultValue,
  errorMessage = "Supported characters: letters, numbers, spaces, emojis, and basic punctuation [-,.,!,?,%,~,:]",
  inputClassName = "",
}) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [isValid, setIsValid] = useState<boolean>(true);

  const validationPattern = /^[a-zA-Z0-9\s\-\.\,\!\?\%\~\:']*$/;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    const isValidInput = validationPattern.test(newValue);

    setIsValid(isValidInput);
    setInputValue(newValue);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div>
      <label className="text-md mb-3 block font-medium text-dark dark:text-white">
        {label}
      </label>
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={handleInputChange}
        defaultValue={defaultValue}
        className={`w-full rounded-[7px] border-[1.5px] px-5.5 py-3 outline-none transition ${
          isValid
            ? "border-stroke focus:border-primary dark:border-dark-3 dark:focus:border-primary"
            : "border-red-500 focus:border-red-500"
        } bg-transparent text-dark dark:bg-dark-2 dark:text-white ${inputClassName}`}
      />
      {!isValid && <p className="mt-1 text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default ValidatedInput;
