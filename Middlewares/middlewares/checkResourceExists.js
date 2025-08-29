const resources = ["book", "pen", "laptop"];

export default function checkResourceExists(req, res, next) {
  const { name } = req.params; // נניח מגיע /resources/:name
  if (!resources.includes(name)) {
    return res.status(404).json({ error: "Resource not found" });
  }
  next(); // אם קיים → תמשיך לפונקציה הבאה (controller)
}