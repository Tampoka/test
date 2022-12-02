import {useState} from 'react';

export const useFetching = (callback: { <T>(...args: T[]) : Promise<void> }): [{ <T>(...args: T[]): Promise<void> }, boolean, string] => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching: {<T>(...args:T[]): Promise<void> } = async<T> (...args: T[]):Promise<void> => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e: any) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error]
}