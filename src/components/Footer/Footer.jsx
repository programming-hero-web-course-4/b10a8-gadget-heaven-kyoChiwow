const Footer = () => {
  return (
    <div className="bg-white mt-24">
      {/* Footer Wrapping div */}
      <div className="xl:max-w-[80%] mx-auto py-20 text-center">
        {/* Footer Header Div */}
        <div>
          <h1 className="font-bold text-4xl text-black mb-3">Gadget Heaven</h1>
          <p className="font-medium text-base text-graySixtyp mb-8">Leading the way in cutting-edge technology and innovation</p>
        </div>
        <div className="divider"></div>
        {/* Footer Header Div */}

        {/* footer info div */}
        <div className="flex justify-center gap-40 mt-8">
            {/* Info left Part */}
            <div>
                <p className="text-black text-lg font-bold mb-4">Services</p>
                <ul>
                    <li className="text-graySixtyp text-base font-normal mb-3">Product Support</li>
                    <li className="text-graySixtyp text-base font-normal mb-3">Order Tracking</li>
                    <li className="text-graySixtyp text-base font-normal mb-3">Shipping & Delivery</li>
                    <li className="text-graySixtyp text-base font-normal mb-3">Returns</li>
                </ul>
            </div>
            {/* Info left Part */}

            {/* Info Middle Part */}
            <div>
                <p className="text-black text-lg font-bold mb-4">Company</p>
                <ul>
                    <li className="text-graySixtyp text-base font-normal mb-3">About Us</li>
                    <li className="text-graySixtyp text-base font-normal mb-3">Career</li>
                    <li className="text-graySixtyp text-base font-normal mb-3">Contact</li>
                </ul>
            </div>
            {/* Info Middle Part */}

            {/* Info Right Part */}
            <div>
                <p className="text-black text-lg font-bold mb-4">Legal</p>
                <ul>
                    <li className="text-graySixtyp text-base font-normal mb-3">Terms and Service</li>
                    <li className="text-graySixtyp text-base font-normal mb-3">Privacy Policy</li>
                    <li className="text-graySixtyp text-base font-normal mb-3">Cookie Policy</li>
                </ul>
            </div>
            {/* Info Right Part */}
        </div>
        {/* footer info div */}
      </div>
      {/* Footer Wrapping div */}
    </div>
  );
};

export default Footer;
