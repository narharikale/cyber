import "./App.css";
import DataTable from "./components/templates/Table";
import { Button } from "./components/ui/button";
import { useGetUserdata } from "./hooks/useGetUserdata";

function App() {
  const { data, isLoading } = useGetUserdata();

  return (
    <>
      {isLoading ? <div>loading</div> : null}
      {data ? <DataTable data={data} /> : null}

      <Button>this is button</Button>
    </>
  );
}

export default App;
