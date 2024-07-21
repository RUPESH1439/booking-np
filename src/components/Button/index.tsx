import clsx from 'clsx';

interface IButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  variant?: 'filled' | 'outlined' | 'link';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
  variant = 'filled',
  startIcon,
  endIcon,
  size = 'sm',
  children,
  ...rest
}: IButtonProps) => {
  const _className = clsx(
    {
      'flex flex-row justify-center items-center px-4 py-2 font-davidLibre font-medium rounded-[0.2rem]':
        true,
    },
    { border: variant === 'outlined' },
    { 'bg-white text-primaryLight': variant === 'filled' },
    {
      'px-2 py-0.5 text-sm': size === 'sm',
    },
    {
      'px-6 py-1 text-md rounded-md': size === 'md',
    },
    {
      'px-8 text-lg rounded-lg': size === 'lg',
    },
  );
  return (
    <button {...rest} type="button">
      <div className={_className}>
        {startIcon ? startIcon : null}
        {children}
        {endIcon ? endIcon : null}
      </div>
    </button>
  );
};
