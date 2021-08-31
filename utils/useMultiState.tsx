import React, { useReducer } from 'react'


const useMultiState = (...initialState: any) => {
    const reducer = (state: any, payload: any) => ({ ...state, ...payload })
    return useReducer(reducer, initialState)
}

export default useMultiState
