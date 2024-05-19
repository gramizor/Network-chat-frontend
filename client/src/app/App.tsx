import "./Palette.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import { WebSocketProvider } from "./provides/WebSocketProvider";

function App() {
  const router = createBrowserRouter(routes);
  return (
      <WebSocketProvider>
        <RouterProvider router={router} />
      </WebSocketProvider>
  );
}

export default App;
