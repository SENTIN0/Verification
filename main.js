const express = require('express');

const app = express();

const port = process.env.PORT || 3000; // Use the PORT environment variable, or default to 3000

app.get('/status', (req, res) => {

  const response = {

    status: 'ok',

    tool: 'enabled',

    

    version: 'one'

  };

  res.json(response);

});
app.get('/fibonacci', (req, res) => {

    const response = {
  
      status: 'ok',
  
      tool: 'enabled',
  
      
  
      version: '1.1'
  
    };
  
    res.json(response);
  
  });

app.listen(port, () => {

  console.log(`Server listening on port ${port}`);

});
