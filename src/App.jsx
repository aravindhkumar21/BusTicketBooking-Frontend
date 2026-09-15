import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { BookingProvider } from "./context/BookingContext";
import { AIChatProvider } from "./context/AIChatContext";

function App() {
  return (
    <AuthProvider>
      <BookingProvider>
        <AIChatProvider>
          <AppRoutes />
        </AIChatProvider>
      </BookingProvider>
    </AuthProvider>
  );
}

export default App;
