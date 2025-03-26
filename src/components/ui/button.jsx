// filepath: c:\Users\usuario\taller-vercel\src\components\ui\button.jsx
export function Button({ children, className, ...props }) {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
}