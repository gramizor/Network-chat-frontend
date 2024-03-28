import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./core/store/index.ts";
import { WebSocketProvider } from "./hooks/WebSocketProvider.tsx";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <WebSocketProvider>
      <App />
    </WebSocketProvider>
  </Provider>
);
