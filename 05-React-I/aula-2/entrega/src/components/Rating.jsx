import PropTypes from "prop-types";

const Rating = ({ rating }) => {
  const star = "⭐";
  return <span className="rating">{star.repeat(rating)}</span>;
};

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
