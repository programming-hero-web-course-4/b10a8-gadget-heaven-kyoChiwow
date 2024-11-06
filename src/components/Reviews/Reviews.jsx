import { useEffect, useState } from "react";
import ReviewsCard from "../ReviewsCard/ReviewsCard";
import { Helmet } from "react-helmet-async";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('customerReviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div className="xl:max-w-[80%] mx-auto mt-10">
            <Helmet>
                <title>Reviews | Gadget Heaven</title>
                <link rel="icon" href="/assets/favicon-16x16.png" />
            </Helmet>
            {/* Reviews Header Div */}
            <div className="text-center">
                <h1 className="text-black text-3xl font-bold mb-4">Customer Reviews</h1>
                <p>Welcome to our customer review section. Here you will be able to see our latest reviews of our products. Our customers give their reviews in their own words, So you will be able to get a grasp of our product quality!</p>
            </div>
            {/* Reviews Header Div */}

            {/* Reviews Cards */}
            <div>
                {
                    reviews.map(review => <ReviewsCard key={review.review_id} review={review}></ReviewsCard>)
                }
            </div>
            {/* Reviews Cards */}
        </div>
    );
};

export default Reviews;