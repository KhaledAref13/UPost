import app from './app.js';
const PORT = app.get('port');

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
