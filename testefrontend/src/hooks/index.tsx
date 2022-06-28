import {
    ReactNode
} from 'react';

import { EquipmentProvider } from './equipment';

interface AppProviderProps {
    children: ReactNode; 
}

function AppProvider({ children }: AppProviderProps) {
    return (
        <EquipmentProvider>
            { children }
        </EquipmentProvider>
    )
}

export { AppProvider };