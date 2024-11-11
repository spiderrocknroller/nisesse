import React from 'react';

// Example component
const ExampleComponent = ({ group }) => {
  return (
    <div>
      {/* Conditional rendering using the group.clip condition */}
      {group.clip ? (
        <p>Clip is available!</p>
      ) : (
        <p>No clip available.</p>
      )}
    </div>
  );
};

// Example usage of the component with a sample group object
const App = () => {
  const group = { clip: true }; // Example group object with clip property

  return (
    <div>
      <h1>Welcome to the Example App</h1>
      <ExampleComponent group={group} />
    </div>
  );
};

export default App;
