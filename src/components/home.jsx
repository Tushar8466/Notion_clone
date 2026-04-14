import Card from "./card";

function Home({ pages, setPages, setCurrentPage }) {
  const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};
const addPage = () => {
  const newPage = {
    id: Date.now(),
    title: "Untitled",
    content: [""]
  };

  setPages([...pages, newPage]);
  setCurrentPage(newPage); 
};
  return (
    <div className="home">
      <h1>{getGreeting()}</h1>

      <div className="card new-card" onClick={addPage}>
        <h3>+ New page</h3>
      </div>

      <div className="card-container">
        <Card title="Getting Started" />
        <Card title="Documentation" />
        <Card title="Community" />
        <Card title="Support" />
      </div>
    </div>
    
  );
}

export default Home;