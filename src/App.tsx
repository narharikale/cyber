import { Toaster } from "sonner";
import "./App.css";
import DataTable from "./components/templates/DataTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-7xl flex items-center w-full">
        <DataTable /> 
      </div>

      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
