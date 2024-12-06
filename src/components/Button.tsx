export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any;
  endIcon?: any;
  onClick?: () => void;
  fullWidth?: boolean;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-500",
};
const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-1 px-4 text-md",
  lg: "py-3 px-6",
};
const defaultStyles = "rounded-md p-4 m-1.5 items-center justify-center";

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${variantStyles[props.variant]} ${defaultStyles} ${
        props.fullWidth ? " w-full" : ""
      }} ${sizeStyles[props.size]}`}
    >
      <div className="flex items-center">
        {props.startIcon ? (
          <div className="pr-2 py-1 justify-center flex">{props.startIcon}</div>
        ) : null}{" "}
        {props.text}
      </div>
    </button>
  );
};

<Button variant="primary" size="md" text="Add" onClick={() => {}} />;

// colors - 5046e4(p), e0e7ff(s)
