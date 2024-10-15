import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: "0123456789" }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const personsToShow = persons.filter((person) => person.name.includes(filter))

  const onAdd = (event) => {
    //prevent page reloading
    event.preventDefault()
    for (let i = 0; i < persons.length; i++) {
      if (newName === persons[i].name) {
        alert(`${newName} is already existed.`)
        return
      }
    }
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    console.log('Add:', newName)
    setNewName('')
    setNewNumber('')
  }

  const handleNewNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(`filter: ${event.target.value}`)
    setFilter(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <span>filter:</span>
        <input 
        type="filter" 
        onChange={handleFilterChange}/>
      </div>
      <h2>Add</h2>
      <form>
        <div>
          <span>name:</span>
          <input
            value={newName}
            onChange={handleNewNameChange} />
        </div>
        <div>
          <span>number:</span>
          <input
            value={newNumber}
            onChange={handleNewNumberChange} />
        </div>
        <div>
          <button
            type="submit"
            onClick={onAdd}>
            <span>add</span>
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App