import React, { useReducer } from 'react'

const useMultiState = <T extends {}>(initialState: T) => {
    const reducer = (state: T, payload: Partial<T>) => ({ ...state, ...payload })
    return useReducer(reducer, initialState)
}

export default useMultiState
