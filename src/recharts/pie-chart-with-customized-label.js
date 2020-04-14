import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Cell, Legend
} from 'recharts';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index, name
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default class DrawPie extends PureComponent {
    render() {
        const { heading, data, COLORS, attributes } = this.props;
        return (
            <>
                <div className={attributes.outerClassName} >
                    <h4>
                        {heading}
                    </h4>
                    <PieChart width={attributes.svgWidth} height={attributes.svgHeight}>
                        <Pie
                            data={data}
                            cx={attributes.cx}
                            cy={attributes.cy}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={attributes.outerRadius}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {
                                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                            }
                        </Pie>
                        <Legend
                            payload={
                                data.map(
                                    (item, index) => ({
                                        id: item.name,
                                        type: "square",
                                        value: item.name,
                                        color: COLORS[index]
                                    })
                                )
                            }
                            />
                    </PieChart>
                </div>
            </>
        );
    }
}