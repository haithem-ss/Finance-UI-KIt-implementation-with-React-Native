import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";

// ...
const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];

export default function () {
  return (
    <>
      <BarChart data={data} />
      <LineChart data={data} />
      <PieChart data={data} />
      // For Horizontal Bar chart, just add the prop horizontal to the{" "}
      <BarChart /> component
      <BarChart data={data} horizontal />
      // For Area chart, just add the prop areaChart to the <LineChart />{" "}
      component
      <LineChart data={data} areaChart />
      // For Donut chart, just add the prop donut to the <PieChart /> component
      <PieChart data={data} donut />
    </>
  );
}
