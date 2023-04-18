export default function Button(props) {
  const variants = {
    small: "px-6 py-3 text-xl",
    medium: "px-9 py-3 text-22",
    large: "px-[52px] py-4 text-22",
    large2: "px-[68px] py-[9px] text-22 hover:bg-white/70",
  };
  const pickedVariant = variants[props.variant];
  return (
    <button
      className={` rounded-[3px] ${pickedVariant} ${
        props.transparent
          ? "border border-transparent bg-transparent text-primary hover:border-primary"
          : "text-white border border-primary hover:bg-transparent  hover:text-primary bg-primary"
      }`}
    >
      {props.children}
    </button>
  );
}
