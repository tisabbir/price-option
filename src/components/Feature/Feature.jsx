import { IoIosCheckmarkCircle } from "react-icons/io";
const Feature = ({ feature }) => {
  return (
    <div className="text-left text-xl flex gap-2 items-center">
      <IoIosCheckmarkCircle></IoIosCheckmarkCircle> {feature}
    </div>
  );
};

export default Feature;
