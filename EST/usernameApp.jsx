export default function App() {
  const username = "JohnDoe";
  return (
    <div>
      <Header username={username} />
    </div>
  );
}

function Header({ username }) {
  return (
    <header className="p-4 bg-gray-200 flex items-center gap-4">
      <h1 className="text-xl font-bold">My App</h1>
      <Icon username={username} />
    </header>
  );
}

function Icon({ username }) {
  return (
    <div className="flex items-center gap-2">
      <span>🔔</span>
      <UserProfile username={username} />
    </div>
  );
}

function UserProfile({ username }) {
  return <p className="text-sm">Logged in as: {username}</p>;
}
