/*
This component is the entry point for the 3 operations performed on the app.
operation: 
    1. Add sheep to field.
    2. brand sheep.
    3. random selection of breed pair.
Each of the operations has the dispatch attached to it. The dispatch function 
of the store dispatches an object with a signature {type: string, payload:{}} and in 
redux it is the object returned from an action creator.
the object signature is dispatched to the reducer for state tree manipulation.
*/
import React, {useReducer, useEffect} from 'react'
import '../styles/style.css';

import { reducer } from '../reducers/SheepReducer'
import { Wstate, Wreducer, Wsheep} from '../../types/TypeUtils'
import {Sheeps, AddSheep, BreedPair} from './index'
 
let initialState: Wstate = {
    sheep: [],
    breedPair: [],
    isLoaded: false,
    isBranded: false,
}



export function Field() {
    const [ store, dispatch ] = useReducer<Wreducer>(reducer, initialState)
    let {sheep, isLoaded, isBranded, breedPair} = store;

    // routine for handling branding of sheep functionality...
    let handleBrandedSheep = () => {
        // dispatch to store: Empty payload and a reactive action type.
        dispatch({type: "BRAND_SHEEP",payload:{}})
    }
    // routine for handling breedable pair functionality...
    let handleBreedPair = () => {
        // dispatch to store: Empty payload and a reactive action type.
        dispatch({type: "BREEDABLE_PAIR",payload:{}})
    }

    // for dev purpose... since the app is not making any remote fetching of data
    // No concern about performance issue on re-rendering. 
    useEffect(() => {
        console.log("updated!!!")
    }, [isLoaded, isBranded])

    return ( 
        <div>
            <div className="push-right">
                <button type="button" className="btn btn-success action-addsheep" 
                    data-toggle="modal" data-target="#addsheepModal">Add sheep</button>
                <button type="button" className="btn btn-success action-brandsheep" onClick={handleBrandedSheep}>Brand sheep</button>
                <button type="button" className="btn btn-success action-breedablepair" 
                    data-toggle="modal" data-target="#pairModal" onClick={handleBreedPair}>Breedable pair</button>
            </div>
            <AddSheep dispatch={ dispatch }/>
            <BreedPair breedpair={breedPair}/>
            { isLoaded ? 
            (<table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gendar</th>
                    </tr>
                </thead>
                <tbody>
                    {sheep.map((sheep:Wsheep,index:any) => {
                        return <Sheeps key={index} item= {sheep} />
                    })}  
                </tbody>
            </table>) : null }
            { isBranded && sheep.length > 0 ? 
            (<table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gendar</th>
                    </tr>
                </thead>
                <tbody>
                    {sheep.map((sheep:Wsheep,index:any) => {
                        return <Sheeps key={index} item= {sheep} />
                    })}  
                </tbody>
            </table>) : null }
        </div>
    )
}

