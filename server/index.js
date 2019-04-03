const app = require('./server');

const PORT = 4000; // process.env.PORT || 
app.listen(PORT, () => {
  console.log(`Express server is listening at http://127.0.0.1:${PORT}`);
});
