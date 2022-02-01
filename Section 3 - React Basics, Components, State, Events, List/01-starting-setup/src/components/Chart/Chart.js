import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) =>{

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.val);
    //...dataPointValues pulls out all array args and pulled out using ...
    const totalMax = Math.max(...dataPointValues);

    return(
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
            <ChartBar
            key={dataPoint.label}
            value={dataPoint.val}
            maxValue={totalMax}
            label={dataPoint.label}
            />
            ))}
        </div>
    );
};
export default Chart;