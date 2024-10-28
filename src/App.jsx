import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./style/ui/NotFound";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import OwnerDashboard from "./pages/OwnerDashboard";
import DarkModeProvider from "./contexts/DarkModeContext";
import OwnerLayOut from "./features/owner/OwnerLayOut";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Proposals from "./pages/Proposals";
import SubmittedProject from "./pages/SubmittedProject";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./style/ui/ProtectedRoute";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Routes>
            <Route path='/auth' element={<Auth />} />
            <Route path='/complete-profile' element={<CompleteProfile />} />
            <Route
              path='/owner'
              element={
                <ProtectedRoute>
                  <OwnerLayOut />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to='dashboard' replace />} />
              <Route path='dashboard' element={<OwnerDashboard />} />
              <Route path='projects' element={<Projects />} />
              <Route path='projects/:id' element={<Project />} />
            </Route>
            <Route
              path='freelancer'
              element={
                <ProtectedRoute>
                  <FreelancerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to='dashboard' replace />} />
              <Route path='dashboard' element={<FreelancerDashboard />} />
              <Route path='proposals' element={<Proposals />} />
              <Route path='projects' element={<SubmittedProject />} />
            </Route>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </DarkModeProvider>
    </div>
  );
}

export default App;
