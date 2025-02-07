import { LineChart } from '@mui/x-charts';
import { lineElementClasses } from '@mui/x-charts/LineChart';

const RevenueChart = () => {
  return (
    <div
      style={{
        marginTop: "28px",
        height: "318px",
        width: "662px",
        backgroundColor: "#F7F9FB",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "16px",
      }}
    >
      <LineChart
        width={662}
        height={318}
        margin={"24px"}
        colors={['#A8C5DA', '#1C1C1C', '#1C1C1C']}
        grid={{ horizontal: true }}
        series={[
          { curve: 'natural', data: [10, 18, 13, 11, 12, 14], showMark: false },
          { curve: 'natural', data: [13, 9, 16, 13], showMark: false },
          { curve: 'natural', data: [null, null, null, 13, 9, 12], showMark: false },
        ]}
        sx={{
          [`& .${lineElementClasses.root}:nth-of-type(3)`]: {
            strokeDasharray: '6 6',
            strokeWidth: 3,
          },
        }}
        xAxis={[
          {
            data: [0, 1, 2, 3, 4, 5],
            scaleType: 'point',
            disableTicks: true,
            valueFormatter: (value) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][value],
            stroke: '#CBCDCE',
          },
        ]}
        yAxis={[
          {
            min: 0,
            max: 30,
            tickNumber: 3,
            scaleType: 'linear',
            disableLine: true,
            disableTicks: true,
            valueFormatter: (value) => (value === 0 ? `${value} : ${value}M` : `${value}M`),
          },
        ]}
      />
    </div>
  );
};

export default RevenueChart;
