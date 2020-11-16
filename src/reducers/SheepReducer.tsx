/*
Reducer: The main app reducer for the manipulation of the state tree.
The state management was built using both the useReducer and the useState hooks.
using a single reducer for the state management simplifies the implementation giving
the structure of the sample project.
reducer function: 
    parameter: (state and action)
    return: state
*/
import {Waction, Wstate, Wsheep} from '../../types/TypeUtils'

let getSheep = function(sheep: Wsheep[], action: Waction): Wsheep[] {
    return sheep.concat([action.payload])
}

let filterHelper = (sheep: Wsheep[]) => {
    return sheep.map((item) => {
        let isBrandable = Math.round(Math.random()) ? true : false;
        let tmp = {...item, brandable:isBrandable}
        return tmp
    })
}

let getBreedablePair = (sheep: Wsheep[]) => {
    let isBreedable = Math.floor(Math.random() * 100) + 1 > 50 ? true : false;
    const randomFemale =  sheep.reduce((acc:any, curr: any) => {
        return curr.gendar == "Female" && !curr.brandable ? [...acc, {...curr, breedable: isBreedable}] : [...acc]
    }, [])

    const randomMale =  sheep.reduce((acc:any, curr: any) => {
        return curr.gendar == "Male" && !curr.brandable ? [...acc, {...curr, breedable: isBreedable}] : [...acc]
    }, [])

    const index1 = Math.floor(Math.random() * randomFemale.length)
    const index2 = Math.floor(Math.random() * randomMale.length)

    if (randomFemale.length && randomMale.length)
        return [randomMale[index2], randomFemale[index1]]
    else 
        return []
}


let reducer = function(state: Wstate, action: Waction): Wstate {
    switch(action.type){
        case "ADD_SHEEP": 
            return {
                ...state,
                sheep: getSheep(state.sheep,action),
                isLoaded: true,
                isBranded: false
            }
        case "BRAND_SHEEP": 
            return {
                ...state,
                sheep: filterHelper(state.sheep),
                isLoaded: false,
                isBranded: true
            }
        case "BREEDABLE_PAIR": 
            return {
                ...state, breedPair: getBreedablePair(state.sheep)
            }
        default: 
            return state;

    }
}
export { reducer }