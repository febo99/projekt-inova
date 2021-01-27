import React from 'react';
import {StoreInterface} from './Interfaces';
const InterventionsContext = React.createContext<StoreInterface | null>(null);
export default InterventionsContext;
