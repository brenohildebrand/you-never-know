import { PropsStore } from '../primitive/store';

const AppStore = new PropsStore();

// Set Version
AppStore.setProp('version', '1.0.0');

// Set Active Mode
AppStore.setProp('mode', 'default');

// Set Selected Node
AppStore.setProp('selectedNode', undefined);

export default AppStore;