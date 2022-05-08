import * as echarts from 'echarts';


const RatesDiagram = (dataX: string[], dataY: number[]) => {
    type EChartsOption = echarts.EChartsOption;
    const chartDom = document.getElementById('chart')!;
    const myChart = echarts.init(chartDom);
    let option: EChartsOption;

    option = {
        xAxis: {
            type: 'category',
            data: dataX,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            show: false
        },
        grid: {
            left: 0,
            right: 0,
            bottom: '20px',
            top: '15px'
        },
        series: [
            {
                data: dataY,
                type: 'line',
                lineStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#9b4481' // color at 0%
                        }, {
                            offset: 1, color: '#8ecfca' // color at 100%
                        }],
                        global: false
                    }
                }
            }
        ]
    };

    option && myChart.setOption(option);

}

export default RatesDiagram;
