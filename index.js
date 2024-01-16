let employee = {}
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const emp = { ...employee }
  emp[key] = value
  return emp
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value
  return employee
}

function deleteFromEmployeeByKey(employee, key) {
  let emp = {...employee} 
  delete emp[key]
  return emp
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]
  return employee
}