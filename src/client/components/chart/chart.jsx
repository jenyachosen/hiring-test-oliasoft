import React from 'react';
import { useSelector } from 'react-redux';
import {ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar, Cell} from 'recharts';
import {Card, Heading} from '~gui-library';
import {selectSiteDataForChart} from '~store/entities/sites/sites.selectors';
import styles from './chart.module.less';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const colors = scaleOrdinal(schemeCategory10).range();

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Chart = () => {
  const chartData = useSelector(selectSiteDataForChart);
  
  return (
    <div className={styles.chartWrapper}>
      <Card
        heading={
          <Heading>Chart</Heading>
        }
      >
        <ComposedChart width={730} height={250} data={chartData}>
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke='#f5f5f5' />
          <Bar dataKey="countOfRigs" fill='hsl(120, 40%, 50%)' shape={<TriangleBar />} label={{ position: 'top' }}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </ComposedChart>
      </Card>
    </div>
  );
}

export {Chart};
