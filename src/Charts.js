import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, LabelList } from 'recharts';
import axios from 'axios';
import styled from './Charts.module.css';
import iconeFlash from './icons8-flash-on.svg';

const renderCustomizedLabel = (props) => {
  const { x, y, width } = props;
  return (
    <g>
      <line x1={x} y1={y} x2={x + width} y2={y} style={{ stroke: '#7786f2', strokeWidth: 5 }} />
    </g>
  );
};

const Charts = (props) => {
  const [affluenceToday, seAffluenceToday] = useState(null);

  useEffect(() => {
    axios.get('/getAffluence').then((affluenceArray) => {
      seAffluenceToday(affluenceArray.data.affluence);
    });
  }, []);

  if (!affluenceToday) return null;
  return (
    <ResponsiveContainer width={'100%'} height={'60%'} className={styled.ResponsiveContainer}>
      <div className={styled.ResponsiveContainerDiv}>
        <p className={styled.ResponsiveContainerDivP}>
          <img src={iconeFlash} alt="Eclair"></img>Affluence pour la journée
        </p>
        <BarChart
          height={props.window < 450 ? 200 : 250}
          width={props.window < 450 ? 250 : 515}
          data={affluenceToday}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Bar
            dataKey="value"
            fill="#dde1ff"
            barSize={props.window < 450 ? 10 : 30}
            label={renderCustomizedLabel}
          />
          <Bar />

          <XAxis
            dataKey="hour"
            className={styled.BarChartXAxis}
            interval="preserveStartEnd"
            padding={{ left: 40, right: 40 }}
            stroke={'#d7d1d9'}
          ></XAxis>
        </BarChart>
      </div>
    </ResponsiveContainer>
  );
};

export default Charts;
