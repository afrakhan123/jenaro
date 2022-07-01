import "./App.css";
import Layout from "./components/Layout";
import Menu from "./page/menu";

function App() {
  return (
    <Layout>
      <div className="px-5 sm:px-20 pb-10">
        <Menu />
      </div>
    </Layout>
  );
}

export default App;
