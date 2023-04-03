


import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highcharts-gantt.src";
// import customEvents from "highcharts-custom-events";
import {data} from './data'
// const HCcustom = customEvents(Highcharts);

//pass this data from props
const chatoption1 = data

const GanttChart = () => {
//   const [chart, setChart] = useState(null);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType="ganttChart"
        // callback={(chart: any) => setChart(chart)}
        options={chatoption1}
      />
    </div>
  );
};

export default GanttChart;
