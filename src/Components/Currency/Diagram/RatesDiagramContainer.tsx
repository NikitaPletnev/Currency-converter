import React, {useEffect, useState} from "react";
import {getTimeline} from "../../../requests/getTimeLine";
import RatesDiagram from "./RatesDiagram";
import '../../../Styles/ratesDiagramContainer.css'
import {prepareDataForDiagrams} from "../../../helpers/prepareDataForDiagram";

interface RatesDiagramContainerInterface {
    firstVal: string;
    secondVal: string;
    result: string;

    setLoading(loading: boolean): void;
}

const RatesDiagramContainer = ({firstVal, secondVal, setLoading, result}: RatesDiagramContainerInterface) => {

    useEffect(() => {
        const from = firstVal.split('|')[0];
        const to = secondVal.split('|')[0];
        getTimeline(from, to).then(res => {
            setLoading(false);
            const data = prepareDataForDiagrams(res);
            const dataX = data.map((opt: any) => opt[0].toString());
            const dataY = data.map((opt: any) => parseInt((opt[1] as any).toString()));
            RatesDiagram(dataX, dataY);
        })
    }, [result])

    return (
        <div id='chart'/>
    )
}

export default RatesDiagramContainer;
