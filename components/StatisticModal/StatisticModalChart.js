import React from 'react'
import { UseTextsContext } from '../../contexts/TextsContext';
import { getDaysValuesOfAMonthOfARecord } from '../../functions/getDaysValuesOfAMonthOfARecord';
import { getMonthsSumsOfAYearOfARecord } from '../../functions/getMonthsSumsOfAYearOfARecord';
import { getDate } from '../../helpers/getDate';
import { getArrayOfNumbs } from '../../helpers/getArrayOfNumbs';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Title, Legend, Filler)

function StatisticModalChart(props) {
    
    let { appTexts } = UseTextsContext();

    let { dataType, statisticObj, year, month } = props

    let componenTexts = appTexts.header.RecordsModal;

    function returnLabels() {
        let { year: thisYear, month: thisMonth, day: thisDay } = getDate();
        let labelsArray = getArrayOfNumbs(
            month>-1 ? 1 : 0,
            month>-1 ? (month === thisMonth ? thisDay : 31) : (year === thisYear ? thisMonth : 11)
        );
        let x = (year && month===-1) ? labelsArray.map(label=>componenTexts.months[label]) : labelsArray;
        return x
    }

    return (
        <Line
            // height={"105%"}
            height={"100%"}
            // width={"100%"}
            data={{
                labels: year>-1 && returnLabels(),
                datasets: [{
                    label: dataType,
                    data: (dataType && year>-1) 
                        ? month>-1
                            ? dataType === "Hours" ? getDaysValuesOfAMonthOfARecord(statisticObj, year, month, true) : getDaysValuesOfAMonthOfARecord(statisticObj, year, month)
                            : dataType === "Hours"? getMonthsSumsOfAYearOfARecord(statisticObj, year, true) :getMonthsSumsOfAYearOfARecord(statisticObj, year)
                        : null,
                    borderColor: "#F7FF00",
                    pointRadius: 6,
                    pointBackgroundColor: "#F7FF00",
                    backgroundColor: "#f6ff0015",
                    tension:0.3,
                }]
            }}
            options={{
                fill: true,
                plugins:{
                    tooltip:{
                        display: true
                    },
                    legend:{
                        display: true,
                    }
                },
                scales:{
                    y:{
                        beginAtZero: true,
                        min:0,
                        grid: {color:"hsl(281, 89%, 26%)"},
                        title:{
                            display: true,
                            text:dataType ? dataType==="Scores"?componenTexts.scores:dataType==="Hours"?componenTexts.hours:componenTexts.distractions : "",
                            color: "#F7FF00",
                            font: {
                                size: "17",
                                weight: "bold"
                            },
                        }
                    },
                    x:{
                        grid: {color:"hsl(281, 89%, 26%)"},
                        title:{
                            display: true,
                            text: (year>-1 && month>-1) ? componenTexts.day : (year>-1 && month===-1) ? componenTexts.month : "",
                            color: "#F7FF00",
                            font: {
                                size: "17",
                                weight: "bold"
                            },
                        }
                    },
                },
            }}
        />
    )
}

export default StatisticModalChart