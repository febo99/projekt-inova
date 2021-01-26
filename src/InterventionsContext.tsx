import React from 'react';
import {StoreInterface} from './interfaces';
const InterventionsContext = React.createContext<StoreInterface | null>(null);
export default InterventionsContext;
