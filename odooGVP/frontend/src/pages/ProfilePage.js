import React from 'react';
import MainLayout from '../layouts/MainLayout';

const ProfilePage = () => {
  return (
    <MainLayout>
      <div className="text-center p-10">
        <h2 className="text-4xl font-bold mb-4">Profile Page</h2>
        <p className="text-lg">User profile details.</p>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
