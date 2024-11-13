const expenseForm = document.getElementById('expenseForm')
const expenseList = document.getElementById('expenseList')

expenseForm.addEventListener('submit', function(event){
    event.preventDefault();

    const description = document.getElementById('expenseDescripion').value;
    const category = document.getElementById('expenseCategory').value;
    const amount = document.getElementById('expenseAmount').value;

    if(document && category && !isNaN(amount)){
        const newRow = document.createElement('tr')

        newRow.innerHTML = `<td>${description}</td> <td>${category}</td> <td>${amount} /-</td>`

        expenseList.appendChild(newRow)
        document.getElementById('expenseDescripion').value = '';
        document.getElementById('expenseCategory').value = '';
        document.getElementById('expenseAmount').value = '';

    }
})