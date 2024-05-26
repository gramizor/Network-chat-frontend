const WebSocket = require("ws");
const axios = require("axios");

const connections = {}

async function websocket(expressServer, app) {
  // Создаем сервер WebSocket
  const websocketServer = new WebSocket.Server({
    noServer: true,
    path: "/websockets",
  });

  // Обрабатываем обновление HTTP сервера
  expressServer.on("upgrade", (request, socket, head) => {
    // Перенаправляем обновление на сервер WebSocket для обработки
    websocketServer.handleUpgrade(request, socket, head, (websocket) => {
      // Вызываем событие подключения
      websocketServer.emit("connection", websocket, request);
    });
  });

  // Обрабатываем соединение по WebSocket
  websocketServer.on("connection", function connection(websocketConnection, request) {
    const id = Math.random().toString(36).substr(2, 9); // Генерируем уникальный ID для соединения
    connections[id] = websocketConnection; // Сохраняем соединение

    console.log("WebSocket Connection Established!");

    // Обрабатываем сообщение от клиента через WebSocket
    websocketConnection.on("message", async (messageData) => {
      try {
        const message = JSON.parse(messageData.toString("utf8"));
        console.log("New message from client:", message);

        // Пересылаем сообщение на HTTP POST эндпоинт
        await axios.post(
          `http://${process.env.SERVER_URL || '192.168.0.84:8082'}/api/send-message`,
          messageData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Рассылаем сообщение всем клиентам, кроме отправителя
        websocketServer.clients.forEach((client) => {
          if (client !== websocketConnection && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(message));
          }
        });
      } catch (error) {
        console.error("Error sending message to other backend:", error);
      }
    });

    // Удаляем соединение при его закрытии
    websocketConnection.on("close", () => {
      delete connections[id];
    });
  });

  // Обрабатываем HTTP POST запрос на эндпоинт '/api/send-message'
  app.post(`/api/send-message`, (req, res) => {
    try {
      const message = req.body;
      console.log("Message from back:", message);

      // Отправляем сообщение клиенту через WebSocket
      websocketServer.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(message));
        }
      });
      res.status(200).json({ message: "Message received." });
    } catch (error) {
      console.error("Error processing message:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  });

  return websocketServer;
}

module.exports = websocket;
