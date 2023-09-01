const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

const bankBranches = [
    { id: 1, brand: 'Bank A', facilities: ['ATM', 'Savings'] },
    { id: 2, brand: 'Bank B', facilities: ['ATM', 'Loan'] },
    { id: 3, brand: 'Bank C', facilities: ['ATM', 'Checking', 'Loan'] },
    { id: 4, brand: 'Bank D', facilities: ['ATM', 'Savings', 'Checking'] },
    { id: 5, brand: 'Bank E', facilities: ['ATM', 'Loan'] },
    { id: 6, brand: 'Bank F', facilities: ['ATM', 'Savings', 'Loan'] },
    { id: 7, brand: 'Bank G', facilities: ['ATM', 'Checking'] },
    { id: 8, brand: 'Bank H', facilities: ['ATM', 'Savings', 'Checking', 'Loan'] },
    { id: 9, brand: 'Bank I', facilities: ['ATM'] },
    { id: 10, brand: 'Bank J', facilities: ['ATM', 'Savings', 'Loan'] },
  ];
  

app.use(cors());

app.get('/api/search', (req, res) => {
  const location = req.query.location; 
  const filteredBranches = bankBranches.filter((branch) => {
    return branch.facilities.includes(location);
  });

  res.json({ branches: filteredBranches });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
