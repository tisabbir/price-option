import axios from "axios";
import { useState } from "react";
import { Audio, DNA } from "react-loader-spinner";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  //   useEffect(() => {
  //     fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
  //       .then((res) => res.json())
  //       .then((data) => setPhones(data.data));
  //   }, []);

  axios
    .get("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then((data) => {
      const phonesData = data.data.data;

      const fakePhoneData = phonesData.map((phone) => {
        const obj = {
          name: phone.phone_name,
          price: parseInt(phone.slug.split("-")[1]),
        };
        return obj;
      });
      setPhones(fakePhoneData);
    });

  return (
    <div>
      <h1>Phones : {phones.length}</h1>

      <Audio
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />

      <BarChart width={1200} height={300} data={phones}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="price" barSize={30} fill="#8884d8" />
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phones;
