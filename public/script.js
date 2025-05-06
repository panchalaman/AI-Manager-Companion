// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
         event.preventDefault();

         const numEmployees = parseInt(document.querySelector('#num-employees').value);
         const numShifts = parseInt(document.querySelector('#num-shifts').value);

         const command = `python main.py ${numEmployees} ${numShifts}`;

         fetch('/execute', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({ command: command })
         })
         .then(response => response.json())
         .then(data => {
             console.log('Response from Python script:', data.output);
             const shiftPlan = JSON.parse(data.output)
             const tbody = document.querySelector('tbody');
            tbody.innerHTML = '';
             
             shiftPlan.forEach(shift => {
                 const row = document.createElement('tr');
                 shift.forEach(employee => {
                     const cell = document.createElement('td');
                     cell.textContent = employee;
                     row.appendChild(cell);
                 });
                 tbody.appendChild(row);
             });
             const thead = document.querySelector('thead');
             thead.innerHTML = '';
             const headerRow = document.createElement('tr');
             for(let i=0; i< shiftPlan.length; i++){
                const headerCell = document.createElement('th');
                headerCell.textContent = `Shift ${i+1}`;
                headerRow.appendChild(headerCell)
             }
             thead.appendChild(headerRow);

         })
         .catch(error => {
             console.error('Error executing Python script:', error);
         });
 
    });
});
