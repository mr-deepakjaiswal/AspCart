import React, { useState } from 'react';

function AuthorTeamsPage() {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to add user to team here
    console.log('Username:', username);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="border-2 p-4 rounded-md mb-4">
        <p className="text-gray-700">
          As an author, you can add other Envato Marketplace users to your team.
          People on your team will be able to reply to comments and reviews on
          your items.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col flex-wrap gap-4">
          <label htmlFor="username" className="mr-2 font-semibold">
            Add someone to your team:
          </label>
          <div className='flex flex-wrap gap-4 w-3/6'>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md flex-1 mr-2"
            placeholder="Username"
          />
          <button
            type="submit"
            className="bg-indigo-900 text-white font-bold py-2 px-6 rounded-md"
          >
            Add
          </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AuthorTeamsPage;