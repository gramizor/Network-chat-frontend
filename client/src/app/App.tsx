import "./Palette.css";
import "@mantine/core/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import { WebSocketProvider } from "./provides/WebSocketProvider";
import { MantineProvider } from "@mantine/core";

function App() {
  const router = createBrowserRouter(routes);
  return (
    <MantineProvider>
      <WebSocketProvider>
        <RouterProvider router={router} />
      </WebSocketProvider>
    </MantineProvider>
  );
}

export default App;
