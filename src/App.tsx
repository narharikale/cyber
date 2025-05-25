import "./App.css";
import DataTable from "./components/templates/Table";
import { useGetUserdata } from "./hooks/useGetUserdata";

function App() {
  const { data, isLoading } = useGetUserdata();

  return (
    <>
      {isLoading ? <div>loading</div> : null}
      {data ? <DataTable data={data} /> : null}
    </>
  );
}

export default App;
