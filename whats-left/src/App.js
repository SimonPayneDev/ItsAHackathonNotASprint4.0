import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <header className="header">Hi Jhon Doe</header>

      <main className="p-4 pb-24">
        {/* Tab Buttons */}
        <div className="flex space-x-2 mb-4">
          <button className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">Summary</button>
          <button className="bg-gray-200 text-black px-4 py-1 rounded-full text-sm">Everyday</button>
          <button className="bg-gray-200 text-black px-4 py-1 rounded-full text-sm">Save & Invest</button>
        </div>

        {/* Account Cards */}
        <div className="card">
  <div className="account-header flex flex-col space-y-2">
  <div>
        <div className="text-sm font-medium">Club Lloyds</div>
        <div className="text-xs text-gray-500">12-34-56 / 12345678</div>
      </div>
      <br></br>
    <div className="flex justify-between items-center">
      <div>
      <div>
  <div className="text-base font-bold">
    What's Left: <span className="text-base font-bold">£500</span>
  </div>
</div>


      </div>
      <br></br>
    </div>

    <div className="flex justify-between items-center">
     
      <div className="text-sm text-gray-500">Balance: £935.68</div>
    </div>
  </div>
</div>


        <div className="card">
          <div className="account-header">
            <div>
              <div>Lloyds Easy Saver</div>
              <div className="text-sm text-gray-500">65-43-21 / 87654321</div>
            </div>
            <div className="account-amount">£200.00</div>
          </div>
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="navbar">
        <div className="nav-item active">
          <div>🏠</div>
          <div>Home</div>
        </div>
        <div className="nav-item">
          <div>📝</div>
          <div>Apply</div>
        </div>
        <div className="nav-item">
          <div>💸</div>
          <div>Payments</div>
        </div>
        <div className="nav-item">
          <div>🔍</div>
          <div>Search</div>
        </div>
        <div className="nav-item">
          <div>💳</div>
          <div>Cards</div>
        </div>
      </nav>
    </div>
  );
}
