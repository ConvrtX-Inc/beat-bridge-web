import {
  Area,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  XAxis,
  Legend,
  Line,
  CartesianGrid,
} from "recharts";

import "./CustomLineChart.scss";
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <div className="content">
          <p>
            Playlist Name: <br />{" "}
            <span>{payload[0].payload.playlist_name} </span>
          </p>
        </div>
        <div className="spacer"></div>
        <div className="content">
          <p>
            Songs Played: <br /> <span>{payload[0].payload.songs_played} </span>
          </p>
        </div>
      </div>
    );
  }

  return null;
};

function CustomLineChart(props: any) {
  return (
    <ResponsiveContainer width="100%" height={props.height}>
      <LineChart
        data={props.data}
      
      >
        <defs>
          <linearGradient id={props.id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={props.stroke} stopOpacity={0.5} />
            <stop offset="95%" stopColor="#5BC4FF" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip content={<CustomTooltip />}  />

        <Line
         
          type="monotone"
          name="Songs Played"
          strokeWidth="4"
          dataKey={props.dataKey}
          stroke={"url(#" + props.id + ")"}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default CustomLineChart;
