import React from 'react';
import { StoreInterface } from '../interfaces/Interfaces';
const InterventionsContext = React.createContext<StoreInterface | null>(null);
export default InterventionsContext;
