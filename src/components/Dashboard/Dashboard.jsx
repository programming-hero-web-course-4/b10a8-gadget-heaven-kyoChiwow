const Dashboard = () => {
  return (
    <div>
      <div className="bg-purpleBg mt-6 text-center">
        {/* Dashboard Header Div */}
        <div className="pt-8 lg:max-w-[60%] mx-auto">
          <h1 className="text-white font-bold text-4xl mb-4">Dashboard</h1>
          <p className="text-base font-normal text-white mb-8">
            Gadget Heaven, is where you come to buy the latest technology. We
            provide you with the best. Please go to cart for purchasing the
            goods you have already added or go to wishlist to see what you have
            added in the past!
          </p>
        </div>
        {/* Dashboard Header Div */}
        {/* Buttons Div */}
        <div className="flex gap-6 justify-center pb-8">
          <button>Cart</button>
          <button>Wishlist</button>
        </div>
        {/* Buttons Div */}
      </div>
      
    </div>
  );
};

export default Dashboard;
