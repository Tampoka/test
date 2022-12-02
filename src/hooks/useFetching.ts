import {useState} from 'react';
import {Optional} from '../types/shared-types';


export const useFetching = (callback: { (...args: Optional<number | string>[]): Promise<void> }): [{ (...args: Optional<number | string>[]): Promise<void> }, boolean, string] => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async (...args: Optional<number | string>[]): Promise<void> => {
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