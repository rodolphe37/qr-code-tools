import "./resetButton.css";

const ResetButton = () => {
  return (
    <div className="resetButton-container">
      <button
        title="Click to Reset the application"
        data-toggle="tooltip"
        data-placement="left"
        onClick={() => window.location.replace("/")}
        type="reset"
        className="input-reset"
      >
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
        >
          <path fill="#f50057" d="M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0z" />
          <path
            fill="#FFF"
            d="M13.7 12.3l-1.4 1.4L9 10.42l-3.3 3.3-1.4-1.42L7.58 9l-3.3-3.3L5.7 4.3 9 7.58l3.3-3.3 1.4 1.42L10.42 9l3.3 3.3z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ResetButton;
