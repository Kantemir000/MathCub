import Card from "../../common/components/Card"
import { Line } from "react-chartjs-2"
import { useSelector } from "react-redux"
import distributionChart from "../formulas/distributionChart"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js"
import filterInputs from "../formulas/filterInputs"

const DistributionFunctionCard = () => {
    const { inputs } = useSelector((state) => state.randomInputSlice)
    const filteredInputs = filterInputs(inputs);
    const chartData = distributionChart(filteredInputs);
    const labels = chartData.map(item => item.x);
    const data = chartData.map(item => item.y);


    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement
    )

    return (
        <Card title={"Статистическая функция распределения"}>
            <Line
                data={{
                    labels,
                    datasets: [
                        {
                            borderColor: "#2a2c3c",
                            borderRadius: 7,
                            backgroundColor: "rgb(78, 68, 165)",
                            lineTension: 0,
                            fill: "white",
                            borderJoinStyle: "round",
                            data,
                            borderWidth: 1,
                            barPercentage: 1,
                            categoryPercentage: 1,
                            hoverBackgroundColor: "rgba(78, 68, 165, 0.8)",
                            barThickness: "flex",
                        }
                    ]
                }}
            />
        </Card>
    )
}

export default DistributionFunctionCard