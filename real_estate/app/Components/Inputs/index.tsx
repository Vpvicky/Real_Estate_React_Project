// src/TextInput.tsx
import React, { Component } from "react";
import styles from "./TextInput.module.scss";

interface TextInputProps {
  name: string;
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  className,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  disabled,
  error,
}) => {
  return (
    <div className={`${styles.textInputWrapper} ${className}`}>
      <input
        type={type || "text"}
        name={name}
        className={`${styles.textInput} ${error ? styles.error : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default TextInput;
