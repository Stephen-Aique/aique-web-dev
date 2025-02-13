"use client"

import { useState } from "react";

type InputFieldProps = {
    type: string;
    label: string;
    placeholder: string;
    constant: string;
    name: string;
}

const InputField = ({ type, label, placeholder = "", constant = "", name }: InputFieldProps) => {
    const [input, setInput] = useState("");

    return (
        <div className="flex flex-col relative group">
            <label className="input-label" htmlFor={name}>{label}</label>
            <input 
                className="input"
                name={name}
                type={type}
                placeholder={placeholder}
                value={constant + input}
                onChange={(e) => setInput(e.target.value.slice(constant.length))}
            />
        </div>
    );
};

export default InputField;
