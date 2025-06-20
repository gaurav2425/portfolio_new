import "./ShinyText.css";

const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
      style={{
        animationDuration,
        fontSize: 20,
        fontWeight: 600,
        fontFamily: "Lora, serif",
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
