const CustomButton = ({
    children,
    // onClick,
    className = "",
    type = "button",
  }) => {
    return (
      <button
        type={type}
        // onClick={onClick}
        className={`w-fit md:w-auto bg-custom-indigo text-white hover:bg-blue-700 transition px-6 py-2 text-[16px] ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default CustomButton;
  