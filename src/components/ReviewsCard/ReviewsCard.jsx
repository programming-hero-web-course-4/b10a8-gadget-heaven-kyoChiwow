import PropTypes from "prop-types";
const ReviewsCard = ({ review }) => {
  const {
    customer_name,
    product_title,
    customer_image,
    review_description,
    review_rating,
  } = review;
  return (
    <div className="bg-white rounded-[32px] mt-8 shadow-lg">
      {/* Card Wrapping Div */}
      <div className="flex gap-20">
        {/* Image Div */}
        <div>
          <img
            className="w-[350px] h-[350px] rounded-[32px] object-cover"
            src={customer_image}
            alt=""
          />
        </div>
        {/* Image Div */}

        {/* Review Info Div */}
        <div className="mt-4 flex flex-col gap-3 xl:w-[40%]">
          <h1 className="text-black font-bold text-2xl mt-4">Customer Name: {customer_name}</h1>
          <p className="text-black font-semibold text-lg">Bought Product: {product_title}</p>
          <div className="flex items-center gap-4">
            <p className="text-grayEightyp font-semibold">Rating: </p>
            <div className="rounded-[32px] p-3 bg-grayFivep w-[8%] flex items-center justify-center">
            <p className="text-grayEightyp font-semibold">{review_rating}</p>
          </div>
          </div>
          <p className="font-medium text-grayEightyp">Review:</p>
          <p className="font-medium text-grayEightyp">{review_description}</p>
        </div>
        {/* Review Info Div */}
      </div>
      {/* Card Wrapping Div */}
    </div>
  );
};

ReviewsCard.propTypes = {
  review: PropTypes.object.isRequired,
};
export default ReviewsCard;
