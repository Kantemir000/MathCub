import { styled } from "styled-components"
import StyledContainer from "../common/components/StyledContainer"
import ValueTableCard from "./Cards/ValueTableCard"
import SampleAverageCard from "./Cards/SampleAverageCard"
import VarianceEstimateCard from "./Cards/VarianceEstimate"
import EmpiricalDistributionLawCard from "./Cards/EmpiricalDistributionLawCard"
import HistogramCard from "./Cards/Histogram"
import DistributionFunctionCard from "./Cards/DistributionFunction"
import AssymetryAndExcessCard from "./Cards/AssymetryAndExcess"
import FisherSnedecorCard from "./Cards/FisherSnedecorCard"


const StyledContentWrapper = styled.main`
    padding: 5rem 0;
`

const Content = () => {
    return (
        <StyledContentWrapper>
            <StyledContainer>
                <ValueTableCard />
                <SampleAverageCard />
                <VarianceEstimateCard />
                <EmpiricalDistributionLawCard />
                <AssymetryAndExcessCard />
                <HistogramCard />
                <DistributionFunctionCard />
                <FisherSnedecorCard />
            </StyledContainer>
        </StyledContentWrapper>
    )
}

export default Content