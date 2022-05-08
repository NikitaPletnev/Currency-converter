import React, {useEffect, useState} from 'react';
import '../../Styles/currency.css'
import Box from "../DesignedElements/Box";
import Title from "../DesignedElements/Title";
import {getSymbols} from "../../requests/getSymbols";
import Loader from "../DesignedElements/Loader";
import Button from "../DesignedElements/Button";
import {getCurrency} from "../../requests/getCurrency";
import RatesDiagramContainer from "./Diagram/RatesDiagramContainer";

interface CurrencyContainerInterface {
    setStatus(status: 'login' | 'register' | 'forgotPassword' | 'currency'): void;
}


const CurrencyContainer = ({setStatus}: CurrencyContainerInterface) => {
    const [firstVal, setFirstVal] = useState<string>('');
    const [secondVal, setSecondVal] = useState<string>('');
    const [symbols, setSymbols] = useState();
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState('');

    useEffect(() => {
        if (!symbols) {
            getSymbols().then((res) => {
                setSymbols(res);
                setLoading(false)
            })
        }
    }, [symbols])

    const getResult = () => {
        if (!!firstVal && !!secondVal) {
            const from = firstVal.split('|')[0];
            const to = secondVal.split('|')[0];
            setLoading(true);
            getCurrency(from, to).then(res => {
                if (res === result) {
                    setLoading(false);
                }
                setResult(res);
            })

        }
    }

    const renderSelectContainer = () => {
        if (!symbols) {
            return null
        }
        return (
            <div className='selectorContainer'>
                {renderSelect(setFirstVal)}
                <span>➔</span>
                {renderSelect(setSecondVal)}
            </div>
        )
    }

    const renderSelect = (onChange: (value: string) => void) => {
        if (!symbols) {
            return null
        }
        return (
            <select onChange={(e) => {
                onChange(e.target.value)
            }}>
                {Object.entries(symbols).map((opt: any) => {
                    return <option key={opt?.[0]} value={`${opt?.[0]}|${opt?.[1]}`}>{opt[0]}</option>
                })}
            </select>
        )
    }

    const renderLoader = () => {
        if (!loading) {
            return null
        }
        return <Loader/>
    }

    const renderResult = () => {
        if (!result) {
            return null;
        }
        return <p className='secondVal'>{`${result} ${secondVal.split('|')[1]}` || ''}</p>
    }

    const renderDiagram = () => {
        if (!result) {
            return null;
        }
        return (
            <RatesDiagramContainer firstVal={firstVal} secondVal={secondVal} setLoading={setLoading} result={result}/>
        )
    }

    const renderContent = () => {
        if (!symbols) {
            return null;
        }
        return (
            <>
                <button className='closeButton' onClick={() => {
                    setStatus('login')
                }}>X
                </button>
                <p className='firstVal'> {!!firstVal ? `1 ${firstVal.split('|')[1]} equals` : ''}</p>
                {renderResult()}
                {renderSelectContainer()}
                <Button buttonText={'Result'} disabled={!firstVal || !secondVal} onClick={() => {
                    getResult()
                }}/>
                {renderDiagram()}
            </>
        )
    }


    return (
        <Box>
            <Title text={'currency converter'} size={'big'}/>
            {renderContent()}
            {renderLoader()}
        </Box>
    )
}

export default CurrencyContainer;
