import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
  return (
    <section className="flex justify-center my-20">
      <div className="bg-red-400 flex flex-col px-4 py-4 w-1/2 rounded-lg space-y-12 text-left">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <div>
          <button
            onClick={() => setPeople([])}
            className="bg-gray-800 text-white w-full py-3 rounded-2xl"
          >
            Clear All{' '}
          </button>
        </div>
      </div>
    </section>
  )
}

export default App
