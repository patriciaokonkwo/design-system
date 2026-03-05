import React from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  loading?: boolean;
}

const styles: Record<Variant, string> = {
  primary:   'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
  ghost:     'bg-transparent text-blue-600 hover:bg-blue-50',
  danger:    'bg-red-600 text-white hover:bg-red-700',
};

export function Button({ variant = 'primary', loading, children, ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded font-medium ${styles[variant]}`}
      disabled={loading || props.disabled}
      aria-busy={loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}
