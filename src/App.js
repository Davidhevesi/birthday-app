import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
  return (
    <section className="flex justify-center my-20">
      <div className="bg-red-400 flex flex-col px-4 py-4 rounded-lg space-y-12 text-left w-3/4 md:w-1/2 lg:w-1/3">
        <h3 className="text-2xl">{people.length} birthdays today</h3>
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
