const app = require('./server');

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Express server is listening at http://127.0.0.1:${PORT}`);
});
