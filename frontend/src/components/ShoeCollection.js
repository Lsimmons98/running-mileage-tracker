import React, { useState } from "react"

const ShoeCollection = ({ shoes, addShoe, currentRunner }) => {
  const [shoeName, setShoeName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newShoe = { name: shoeName, runnerId: currentRunner.id }
    addShoe(newShoe)
    setShoeName("")
  }

  return (
    <div>
      <h1>Shoe Collection</h1>
      {shoes.length > 0 ? (
        <ul>
          {shoes.map((shoe) => (
            <li key={shoe.id}>
              {shoe.name} - {shoe.mileage} miles
            </li>
          ))}
        </ul>
      ) : (
        <p>No shoes available.</p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={shoeName}
          onChange={(e) => setShoeName(e.target.value)}
          placeholder="New Shoe Name"
          required
        />
        <button type="submit">Add Shoe</button>
      </form>
    </div>
  )
}

export default ShoeCollection
