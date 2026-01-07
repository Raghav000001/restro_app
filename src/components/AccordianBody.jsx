import React from 'react'

const AccordianBody = ({items}) => {
  return (
    <div>
         <div className="mt-3 grid grid-cols-1 sm:grid-cols-2  gap-3">
              {items.map((item) => (
                <div
                  key={item.id || item.name}
                  className="p-3 bg-white rounded-md shadow-sm flex items-center justify-between gap-4"
                >
                  <div className="text-sm text-gray-800">
                    {item.name }
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.price}
                  </div>
                  <button className="btn-primary text-xs px-3 py-1">
                    Add to cart
                  </button>
                </div>
              ))}
            </div>
    </div>
  )
}

export default AccordianBody
