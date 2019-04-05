function logRequests(req, res, next) {
  console.log('REQUEST INFO:');
  console.table({
    protocol: req.protocol,
    hostname: req.hostname,
    path: req.path,
  });
  console.log(`JWT: ${req.headers.authorization ? true : false}`);

  if (req.body.username) {
    console.log('REQUEST BODY:');
    console.table({
      username: req.body.username,
      department: req.body.department,
      password: req.body.password,
    });
    console.log(`===END OF LOG===`);
    console.log('');
  } else {
    console.log(`===END OF LOG===`);
    console.log('');
  }
  next();
}

module.exports = logRequests;
