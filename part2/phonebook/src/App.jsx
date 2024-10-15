import { useState } from 'react'

const Header = ({header}) => {
  return <h1><span>{header}</span></h1>
}

const Filter = ({setFilter}) => {
  const handleFilterChange = (event) => {
    console.log(`filter: ${event.target.value}`)
    setFilter(event.target.value)
  }

  return (
    <div>
      <span>filter:</span>
      <input
        type="filter"
        onChange={handleFilterChange} />
    </div>
  )
}

const Add = ({persons, setPersons}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <>
      <h2><span>Add</span></h2>
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
    </>
  )
}

const Display = ({persons, filter}) => {
  const personsToShow = persons.filter((person) => person.name.includes(filter))
  return (
    <>
      <h2><span>Numbers</span></h2>
      <ul>
        {personsToShow.map(person => <li key={person.id}><span>{person.name} {person.number}</span></li>)}
      </ul>
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: "0123456789" }
  ])
  const [filter, setFilter] = useState('')

  return (
    <div>
      <Header header='Phonebook' />
      <Filter setFilter={setFilter}/>
      <Add persons={persons} setPersons={setPersons}/>
      <Display persons={persons} filter={filter}/>
    </div>
  )
}

export default App