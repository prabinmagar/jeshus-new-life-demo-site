import PropTypes from "prop-types";

const Title = ({ title, description, classes }) => {
  return (
    <div className={`section-title py-10 relative z-10 ${classes}`}>
      <h2 className="uppercase drop-shadow-md text-4xl text-center font-semibold">
        {title}
      </h2>
      <p
        className={`text text-center ${
          classes ? "text-white/80" : "text-gray"
        } text-lg max-w-[800px] mx-auto mt-4 leading-relaxed`}
      >
        {description}
      </p>
    </div>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  classes: PropTypes.string,
};
