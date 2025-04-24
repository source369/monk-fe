import React from 'react';

export default function UserHeader() {
  const user = {
    name: 'Bhante Ananda',
    role: 'Resident Monk'
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">SLArama System</h1>
      <div className="text-right">
        <p className="font-medium">{user.name}</p>
        <p className="text-sm text-gray-500">{user.role}</p>
      </div>
    </div>
  );
}