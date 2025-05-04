import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./component/AuthContext";
import ProtectedRoute from "./component/ProtectedRoute";
import HomePage from "./component/HomePage";
import EventHome from "./component/EventHome";
import AddEvent from "./component/AddEvent";
import EventSummary from "./component/EventSummary";
import EventDetails from "./component/EventDetails";
import UpdateEvent from "./component/UpdateEvent";
import Header from "./component/Header";
import Footer from "./component/Footer";
import AboutUs from "./component/AboutUs";
import AddReport from "./component/AddReport";
import AllReports from "./component/AllReports";
import AdminEvent from './component/AdminEvent';
import SignUp from './component/SignUp';
import Login from './component/Login';
import AdminDashboard from './component/AdminDashboard';

// Ruvindya
import MainVenuePage from "./component/Venue/pages/MainVenuePage";
import BookingPage from "./component/Venue/pages/BookingPage";
import SuggestVenueForm from "./component/Venue/SuggestVenueForm";
import BookingCalendar from "./component/Venue/BookingCalendar";
import BookingForm from "./component/Venue/BookingForm";
import AdminVenue from "./component/Venue/AdminVenue";
import AdminVenueHome from "./component/Venue/AdminVenueHome";


// Gangani
import TaskDashboard from "./component/Task/TaskDashboard";
import TaskCreateForm from "./component/Task/CreateTaskForm";
import TaskList from "./component/Task/TaskList";
import UpdateTaskForm from "./component/Task/UpdateTask";

import Reminder from "./component/Reminder/Reminder";
import CreateReminder from "./component/Reminder/CreateReminder"; // Import CreateReminder
import UpdateReminder from "./component/Reminder/UpdateReminder"; // Import UpdateReminder
import ConfirmEventCards from "./component/Reminder/confirmEvent";
import Notifications from "./component/Reminder/notifications";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/admin/admin-event" element={<AdminEvent />} />
            {/* <Route path="/admin/reminders" element={<Reminder />} /> */}
            <Route path="/create-reminder/" element={<CreateReminder />} />
            <Route path="/update-reminder/" element={<UpdateReminder />} />
            <Route path="/notifications/" element={<Notifications />} />


            <Route path="/admin/reminders" element={
              <ProtectedRoute>
                <Reminder />
              </ProtectedRoute>
            } />
            <Route path="/admin/confirm" element={
              <ProtectedRoute>
                <ConfirmEventCards />
              </ProtectedRoute>
            } />
            {/* Protected Routes */}
            <Route path="/" element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } />
            <Route path="/event" element={
              <ProtectedRoute>
                <EventHome />
              </ProtectedRoute>
            } />
            <Route path="/add-event" element={
              <ProtectedRoute>
                <AddEvent />
              </ProtectedRoute>
            } />
            <Route path="/event-summary" element={
              <ProtectedRoute>
                <EventSummary />
              </ProtectedRoute>
            } />
            <Route path="/update-event" element={
              <ProtectedRoute>
                <UpdateEvent />
              </ProtectedRoute>
            } />
            <Route path="/event-details" element={
              <ProtectedRoute>
                <EventDetails />
              </ProtectedRoute>
            } />
            <Route path="/add-report" element={
              <ProtectedRoute>
                <AddReport />
              </ProtectedRoute>
            } />
            <Route path="/all-reports" element={
              <ProtectedRoute>
                <AllReports />
              </ProtectedRoute>
            } />
            <Route path="/admin-dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/task-dashboard" element={  <TaskDashboard />} />
            <Route path="/create-task" element={<TaskCreateForm />} />
            <Route path="/task-list" element={<TaskList />} />
            <Route path="/update-task/:id" element={ <UpdateTaskForm /> } />
            
            <Route path="/venues" element={
              <ProtectedRoute>
                <MainVenuePage />
              </ProtectedRoute>
            } />
            <Route path="/book" element={
              <ProtectedRoute>
                <BookingPage />
              </ProtectedRoute>
            } />
            <Route path="/suggest-venue" element={
              <ProtectedRoute>
                <SuggestVenueForm />
              </ProtectedRoute>
            } />
            <Route path="/booking-calendar" element={
              <ProtectedRoute>
                <BookingCalendar />
              </ProtectedRoute>
            } />
            <Route path="/booking-form" element={
              <ProtectedRoute>
                <BookingForm />
              </ProtectedRoute>
            } />
            <Route path="/admin-venue" element={
              <ProtectedRoute>
                <AdminVenue />
              </ProtectedRoute>
            } />
            <Route path="/admin/admin-venue-home" element={<AdminVenueHome />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App; 