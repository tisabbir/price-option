import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="mt-12 bg-cyan-500 text-white p-4 rounded-xl text-center flex flex-col">
      <h1 className="text-7xl">
        ${price}
        <span className="text-2xl">/month</span>
      </h1>
      <hr className="m-4" />
      <h2 className="text-5xl">{name}</h2>
      <hr className="mt-4" />
      <div className="mt-6 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>

      <button className="btn btn-ghost text-3xl bg-lime-400 w-full mt-4 hover:bg-lime-600">
        Subscribe Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
