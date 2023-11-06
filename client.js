const axios = require('axios');

const serverUrl = 'http://localhost:80';

async function performOperation(operation, num1, num2, num3) {
  try {
    const response = await axios.post(`${serverUrl}/${operation}`, { num1, num2, num3 });

    if (response.status === 200) {
      console.log(`Success: ${response.data.result}`);
    } else if (response.status === 400) {
      console.log(`Fail: ${response.data.error}`);
    }
  } catch (error) {
    console.error(`Eroare: ${error.message}`);
  }
}

// Exemple de utilizare
performOperation('add', 5, 3, 6);
performOperation('subtract', 10, 4);
performOperation('multiply', 7, 2);
performOperation('divide', 8, 0);