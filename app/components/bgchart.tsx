'use client'
import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {ssr: false});

interface State {
  options?: {};
  series?: number[];
}

class BGChart extends React.Component<State> {
  state: State = {
    options: {
      chart: {
        animations: {
          enabled: false
        },
      },

      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: '#cccccc',
        width: 1,
        dashArray: 0,
      },
      dataLabels: {
        enabled: false,

      },
      legend: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      states: {
        active: {
          filter: {
            type: 'none'
          }
        },
        hover: {
          filter: {
            type: 'none'
          }
        }
      },

      colors: [
        'rgb(255, 248, 230)',
        'rgb(255, 248, 230)',
        'rgb(255, 225, 150)',
        'rgb(255, 237, 193)',
        'rgb(255, 237, 193)'
      ],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          donut: {
            size: "65%"
          }
        },

      },
    },

    series: [20, 20, 20, 20, 20],
  }

  render() {
    return (
      <div className="bg">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width={500}
          height={500}
        />
      </div>
    );
  }
}

export default BGChart;