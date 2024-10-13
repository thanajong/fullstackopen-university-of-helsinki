import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id:1, name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const onAdd = (event) => {
    //prevent page reloading
    event.preventDefault()

    const personObject = {
      id: persons.length + 1,
      name: newName
    }
    setPersons(persons.concat(personObject))
    console.log('Add:', newName)
    setNewName('')
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name:
          <input
            value={newName}
            onChange={handleChange} />
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
        {persons.map(person => <li key={person.id}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App