/* Typescript standard set of typeching interfaces */

/* used for typping the action passed as second argument to the reducer...*/
export interface Waction {
    type: string,
    payload: Wsheep 
}

/* used for the typing the state passed as the first argument to the reducer function*/
export interface Wstate {
    sheep: Wsheep[],
    breedPair: any[],
    isLoaded: boolean,
    isBranded: boolean
}

/* Typechecking for each sheep object */
export interface Wsheep {
    name: string,
    gendar: string,
    brandable: boolean,
    breedable: boolean
}

/* Signature typing for the reducer function */
export interface Wreducer {
    (state: Wstate, action: any): Wstate;
}