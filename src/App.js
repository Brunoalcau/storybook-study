import { Provider } from 'react-redux';
// Store
import store from './lib/redux';
import InboxScreen from './components/InboxScreen';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    </div>
  );
}

export default App;
