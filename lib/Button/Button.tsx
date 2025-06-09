import React from 'react'
import clsx from 'clsx'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    href?: string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
        btnType = 'default',
        className,
        disabled = false,
        size,
        href,
        children,
        ...restProps
                                                                })=> {
    const isLink =  btnType === 'link'
    const classes = clsx('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        disabled: isLink && disabled
    })
    if (isLink && href) {
        return (<a className={classes} href={href} {...restProps}>{children}</a>)
    }
    return (
        <button className={classes} disabled={disabled} {...restProps}>{children}</button>
    )
}

export default Button
