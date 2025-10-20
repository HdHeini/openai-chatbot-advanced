import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT ?? 3000;

// Simple chat endpoint
app.post("/api/chats/:id/message", (req, res) => {
  const { message } = req.body;
  console.log(`Received message in chat ${req.params.id}:`, message);

  // Mock reply
  const reply = `Echo: ${message}`;
  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
