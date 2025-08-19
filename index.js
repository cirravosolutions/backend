const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allow all origins (for testing)
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello from Render backend 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
