import { useState } from "react";
import Card from "../../common/components/Card";
import StyledCardDescription from "../../common/components/Card/StyledCardContent/StyledCardDescription";
import StyledCardResult from "../../common/components/Card/StyledCardContent/StyledCardResult";
import TableInputForm from "./ValueTableCard/TableInputForm";
import { useSampleState } from "../../common/hooks/useSampleState";
import * as ss from "simple-statistics"
import filterInputs from "../formulas/filterInputs";
import { useEffect } from "react";

const CorrelationAnalysis = () => {
    const [correlations, setCorrelations] = useState({})

    const initialSampleState = [null, null, null]
    const { sample: xSample, handleAdd: handleXSampleAdd, handleChange: handleXSampleChange } = useSampleState(initialSampleState);
    const { sample: ySample, handleAdd: handleYSampleAdd, handleChange: handleYSampleChange } = useSampleState(initialSampleState);
    const { sample: zSample, handleAdd: handleZSampleAdd, handleChange: handleZSampleChange } = useSampleState(initialSampleState);

    useEffect(() => {
        const getCorrelations = () => {
            try {
                const x = filterInputs(xSample)
                const y = filterInputs(ySample)
                const z = filterInputs(zSample)

                return {
                    xy: ss.sampleCorrelation(x, y),
                    xz: ss.sampleCorrelation(x, z),
                    yz: ss.sampleCorrelation(y, z),
                }
            } catch (error) {
            }
        }
        setCorrelations(getCorrelations())
    }, [xSample, ySample, zSample])

    return (
        <Card title="Корреляционный анализ">
            <StyledCardDescription>Выборка X:</StyledCardDescription>
            <TableInputForm handleAdd={handleXSampleAdd} handleChange={handleXSampleChange} data={xSample} />
            <StyledCardDescription>Выборка Y:</StyledCardDescription>
            <TableInputForm handleAdd={handleYSampleAdd} handleChange={handleYSampleChange} data={ySample} />
            <StyledCardDescription>Выборка Z:</StyledCardDescription>
            <TableInputForm handleAdd={handleZSampleAdd} handleChange={handleZSampleChange} data={zSample} />
            
            {!correlations ? <StyledCardDescription>Для формирования корреляций все выборки должны быть одинакового размера</StyledCardDescription> :
                <>
                    <StyledCardDescription>Корреляция X и Y: </StyledCardDescription>
                    <StyledCardResult>{correlations.xy}</StyledCardResult>
                    <StyledCardDescription>Корреляция X и Z: </StyledCardDescription>
                    <StyledCardResult>{correlations.xz}</StyledCardResult>
                    <StyledCardDescription>Корреляция Y и Z: </StyledCardDescription>
                    <StyledCardResult>{correlations.yz}</StyledCardResult>
                </>}
        </Card>
    )
}

export default CorrelationAnalysis