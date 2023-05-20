import React, { useState, useRef, useImperativeHandle } from 'react';
import { TextFieldProps, TextField } from '@mui/material';
import InputMask from 'react-input-mask';

interface InputWithMaskProps
  extends Omit<TextFieldProps, 'value' | 'onChange'> {
  value?: string;
  defaultValue?: string;
  mask: string | (string | RegExp)[];
  onChange?: (value: string) => void;
}

export const InputWithMask = React.forwardRef<
  HTMLInputElement,
  InputWithMaskProps
>(({ value, defaultValue, mask, onChange, onBlur, ...rest }, ref) => {
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
      value={value || inputValue}
      onChange={handleChange}
      onBlur={onBlur}
    >
      <TextField {...rest} variant="outlined" fullWidth inputRef={ref} />
    </InputMask>
  );
});
