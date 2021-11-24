import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
function CustomAreaChart(props: any) {
  return (
    <ResponsiveContainer width="100%" height={props.height}>
      <AreaChart
        data={props.data}
        margin={{
          top: 20,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id={props.id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={props.stroke} stopOpacity={0.5} />
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <Tooltip />
        <Area
          type={props.type || "monotone"}
          dataKey={props.dataKey}
          stroke={props.stroke}
          fill={"url(#" + props.id + ")"}
          strokeWidth={props.strokeWidth || 0}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default CustomAreaChart;
