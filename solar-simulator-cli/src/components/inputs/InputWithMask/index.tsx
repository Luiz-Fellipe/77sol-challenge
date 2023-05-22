import React, { useState } from 'react';
import { TextFieldProps, TextField } from '@mui/material';
import InputMask from 'react-input-mask';

export interface InputWithMaskProps
  extends Omit<TextFieldProps, 'value' | 'onChange'> {
  value?: string;
  defaultValue?: string;
  mask: string | (string | RegExp)[];
  onChange?: (value: string) => void;
}

export const InputWithMask = React.forwardRef<
  HTMLInputElement,
  InputWithMaskProps
>(({ value, defaultValue, mask, onChange, onBlur, disabled, ...rest }, ref) => {
  const [inputValue, setInputValue] = useState(defaultValue || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <InputMask
      mask={mask}
      disabled={disabled}
      value={value || inputValue}
      onChange={handleChange}
      onBlur={onBlur}
    >
      <TextField {...rest} variant="outlined" fullWidth inputRef={ref} />
    </InputMask>
  );
});
