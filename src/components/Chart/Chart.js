import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maximumValue = Math.max(...dataValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
          if(dataPoint.value > 0)console.log(dataPoint.label,dataPoint.value);
          return (
        <ChartBar
          key = {dataPoint.label}
          value = {dataPoint.value}
          label = {dataPoint.label}
          maxVal = {maximumValue}
        />
      )})}
    </div>
  );
};

export default Chart;
