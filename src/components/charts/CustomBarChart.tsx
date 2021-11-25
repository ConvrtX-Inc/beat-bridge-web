import { BarChart, Area, Tooltip, ResponsiveContainer, Bar } from "recharts";
function CustomBarChart(props: any) {
  return (
    <ResponsiveContainer width="100%" height={props.height}>
      <BarChart
        data={props.data}
        margin={{
          top: 20,
          left: 0,
          bottom: 0,
        }}
      >
        <Bar barSize={10} dataKey={props.dataKey} fill={props.fill} radius={[10, 10, 0, 0]}/>

        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CustomBarChart;
