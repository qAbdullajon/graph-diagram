import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const RealTimeGraph = () => {
  const [data, setData] = useState([]);

  // Har 1s da yangi data qo‘shiladi
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev];

        // Yangi nuqta
        const newPoint = {
          time: new Date().toLocaleTimeString().split(' ')[0],
          value: Math.floor(Math.random() * 100),
        };

        newData.push(newPoint);

        // Faqat oxirgi 20 nuqtani saqlab qolish
        if (newData.length > 20) {
          newData.shift(); // eng eski nuqtani o‘chiradi
        }

        return newData;
      });
    }, 1000); // 1 soniyada yangilanadi

    return () => clearInterval(interval); // tozalash
  }, []);

  return (
    <Card sx={{ maxWidth: 700, mx: 'auto', mt: 5 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Real-Time Burchakli Grafik
        </Typography>

        <LineChart
          width={600}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="linear" dataKey="value" stroke="#1976d2" dot={false} />
        </LineChart>
      </CardContent>
    </Card>
  );
};

export default RealTimeGraph;
