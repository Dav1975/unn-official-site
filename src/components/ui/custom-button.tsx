import * as React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  animate?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'right',
      fullWidth = false,
      animate = true,
      className = '',
      disabled = false,
      ...props
    },
    ref
  ) => {
    // Tailles
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    // Variantes de couleurs
    const variantClasses = {
      primary:
        'bg-[#2f4858] text-white border-2 border-[#2f4858] hover:bg-white hover:text-[#2f4858]',
      secondary:
        'bg-[#12283E] text-white border-2 border-[#12283E] hover:bg-white hover:text-[#12283E]',
    };

    // Classes de base
    const baseClasses = `
      rounded-sm
      font-semibold
      transition-all
      duration-300
      shadow-md
      hover:shadow-xl
      disabled:opacity-50
      disabled:cursor-not-allowed
      disabled:hover:bg-[#2f4858]
      disabled:hover:text-white
      inline-flex
      items-center
      justify-center
      gap-2
      ${fullWidth ? 'w-full' : ''}
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${className}
    `;

    const buttonContent = (
      <>
        {Icon && iconPosition === 'left' && (
          <Icon className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'}`} />
        )}
        {children}
        {Icon && iconPosition === 'right' && (
          <Icon className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'}`} />
        )}
      </>
    );

    if (animate) {
      return (
        <motion.button
          ref={ref}
          whileHover={!disabled ? { scale: 1.02 } : {}}
          whileTap={!disabled ? { scale: 0.98 } : {}}
          className={baseClasses}
          disabled={disabled}
          type={props.type}
          onClick={props.onClick}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          form={props.form}
          name={props.name}
          value={props.value}
          aria-label={props['aria-label']}
          aria-disabled={props['aria-disabled']}
          aria-describedby={props['aria-describedby']}
          role={props.role}
          tabIndex={props.tabIndex}
          id={props.id}
        >
          {buttonContent}
        </motion.button>
      );
    }

    return (
      <button
        ref={ref}
        className={baseClasses}
        disabled={disabled}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export default CustomButton;

