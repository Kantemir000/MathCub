import Card from "../../common/components/Card"
import { Bar } from "react-chartjs-2"
import { useSelector } from "react-redux"
import filterInputs from "../formulas/filterInputs"
import inputRepeats from "../formulas/inputRepeats"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js"

const HistogramCard = () => {
    const { inputs } = useSelector((state) => state.randomInputSlice)
    const filteredInputs = filterInputs(inputs);
    const histogramMap = inputRepeats(filteredInputs);
    const labels = Object.keys(histogramMap);
    const data = Object.values(histogramMap);

    ChartJS.register(
        BarElement,
        CategoryScale,
        LinearScale
    )

    return (
        <Card title={"Гистограмма"}>
            <Bar
                data={{
                    labels,
                    datasets: [
                        {
                            borderColor: "blac",
                            backgroundColor: "white",
                            lineTension: 0,
                            fill: "white",
                            borderJoinStyle: "round",
                            data,
                            borderWidth: 0.2,
                            barPercentage: 1,
                            categoryPercentage: 1,
                            hoverBackgroundColor: "darkgray",
                            barThickness: "flex",
                        }
                    ]
                }}
            />
        </Card>
    )
}

export default HistogramCard