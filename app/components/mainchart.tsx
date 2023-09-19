'use client'
import React from 'react';
import Chart from 'react-apexcharts'

interface State {
  options: {};
  series: number[];
}

class MainChart extends React.Component<State> {
  state: State = {
    options: {
      chart: {
        type: 'radialBar',
        animations: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false,
      },
      labels: ['자아 탄력성'],
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
        'rgb(68, 195, 76)',
      ],
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            margin: 0,
            size: '75%',
            background: 'transparent',
            position: 'front',
            dropShadow: {
              enabled: false
            }
          },
          track: {
            show: false
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -80,
            },
            value: {
              show: true,
              fontSize: '50px',
              fontWeight: 700,
              offsetY: -40,
              formatter: function (val: any) {
                return val
              }
            }
          }
        },
      },
    },

    series: [54],
  }

  render() {
    return (
      <div className="main">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          width={500}
          height={500}
        />
      </div>
    );
  }
}

export default MainChart;