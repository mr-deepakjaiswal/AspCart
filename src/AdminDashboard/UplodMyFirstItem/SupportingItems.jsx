import React from 'react'

export default function SupportingItems() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 bg-gray-100  rounded-md p-2">Supporting your item</h2>
      <p className="text-gray-700 mb-4 px-4">
        You have not chosen a support preference for your items. Buyers will see your item as not-
        supported. To change your support settings{' '}
        <a href="#" className="text-blue-500 hover:underline">
          go to your item support settings.
        </a>
      </p>
    </div>
  )
}
