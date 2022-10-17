import React, {
    InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface inputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

export const Input = memo((props: inputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.input, { [cls.placeholderForm]: placeholder }, [className])}>
            <div className={cls.placeholderContainer}>
                <input
                    id="a"
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    placeholder={placeholder && ' '}
                    {...otherProps}
                />
                {placeholder && (
                    <label htmlFor="a">
                        {placeholder}
                    </label>
                )}
            </div>
        </div>
    );
});
export default Input;
