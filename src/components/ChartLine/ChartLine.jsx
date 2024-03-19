import { Line, LineChart, XAxis, YAxis } from "recharts";

const ChartLine = () => {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page K", uv: 200, pv: 3200, amt: 3200 },
    { name: "Page L", uv: 300, pv: 4000, amt: 4000 },
    { name: "Page M", uv: 500, pv: 2800, amt: 2800 },
    { name: "Page N", uv: 100, pv: 3600, amt: 3600 },
    { name: "Page O", uv: 900, pv: 3000, amt: 3000 },
    { name: "Page T", uv: 50, pv: 3000, amt: 3000 },
    { name: "Page S", uv: 250, pv: 3000, amt: 3000 },
    { name: "Page X", uv: 780, pv: 3000, amt: 3000 },
  ];

  return (
    <div>
      <LineChart width={800} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default ChartLine;
