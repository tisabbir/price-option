import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const options = [
    {
      id: 1,
      name: "Basic",
      price: 29.99,
      features: ["Access to cardio equipment", "Group fitness classes"],
    },
    {
      id: 2,
      name: "Standard",
      price: 49.99,
      features: [
        "Access to all equipment",
        "Group fitness classes",
        "Access to swimming pool",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 79.99,
      features: [
        "Access to all equipment",
        "Group fitness classes",
        "Access to swimming pool",
        "Personal training sessions",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold">Best Price in the Town</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {options.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
