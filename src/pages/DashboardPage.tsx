import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, BarChart2, TrendingUp, User, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { useAuth } from '../context/AuthContext';

type Patient = {
  id: string;
  name: string;
  age: number;
  condition: string;
  lastVisit: Date;
  nextAppointment: Date | null;
  status: 'active' | 'completed' | 'pending';
  progress: number;
};

type Appointment = {
  id: string;
  patientName: string;
  patientId: string;
  date: Date;
  time: string;
  type: 'Initial' | 'Follow-up' | 'Consultation';
};

const DashboardPage = () => {
  const { user } = useAuth();
  
  // Mock data for dashboard
  const [patients] = useState<Patient[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      age: 34,
      condition: 'Chronic Migraine',
      lastVisit: new Date(2025, 2, 15),
      nextAppointment: new Date(2025, 3, 5),
      status: 'active',
      progress: 65,
    },
    {
      id: '2',
      name: 'Michael Brown',
      age: 42,
      condition: 'Allergic Rhinitis',
      lastVisit: new Date(2025, 2, 18),
      nextAppointment: new Date(2025, 3, 2),
      status: 'active',
      progress: 45,
    },
    {
      id: '3',
      name: 'Emma Wilson',
      age: 28,
      condition: 'Anxiety Disorder',
      lastVisit: new Date(2025, 2, 20),
      nextAppointment: null,
      status: 'completed',
      progress: 100,
    },
    {
      id: '4',
      name: 'David Lee',
      age: 56,
      condition: 'Arthritis',
      lastVisit: new Date(2025, 2, 12),
      nextAppointment: new Date(2025, 3, 10),
      status: 'active',
      progress: 30,
    },
    {
      id: '5',
      name: 'Olivia Martinez',
      age: 39,
      condition: 'Irritable Bowel Syndrome',
      lastVisit: new Date(2025, 1, 28),
      nextAppointment: new Date(2025, 3, 15),
      status: 'pending',
      progress: 15,
    },
  ]);

  const [appointments] = useState<Appointment[]>([
    {
      id: '1',
      patientName: 'Sarah Johnson',
      patientId: '1',
      date: new Date(2025, 3, 5),
      time: '09:30 AM',
      type: 'Follow-up',
    },
    {
      id: '2',
      patientName: 'Michael Brown',
      patientId: '2',
      date: new Date(2025, 3, 2),
      time: '11:00 AM',
      type: 'Follow-up',
    },
    {
      id: '3',
      patientName: 'David Lee',
      patientId: '4',
      date: new Date(2025, 3, 10),
      time: '02:15 PM',
      type: 'Follow-up',
    },
    {
      id: '4',
      patientName: 'Olivia Martinez',
      patientId: '5',
      date: new Date(2025, 3, 15),
      time: '10:45 AM',
      type: 'Consultation',
    },
    {
      id: '5',
      patientName: 'James Wilson',
      patientId: '6',
      date: new Date(2025, 3, 7),
      time: '03:30 PM',
      type: 'Initial',
    },
  ]);

  // Sort appointments by date
  const upcomingAppointments = [...appointments].sort((a, b) => a.date.getTime() - b.date.getTime());

  // Dashboard stats
  const stats = {
    totalPatients: 42,
    activePatients: 28,
    appointmentsThisWeek: 7,
    completedTreatments: 15,
    successRate: 92,
  };

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-700 mb-2">Welcome, {user?.name}</h1>
        <p className="text-neutral-600">Here's an overview of your practice and patient activity.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card p-6 flex items-center">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
            <Users className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <p className="text-neutral-600 text-sm">Total Patients</p>
            <h3 className="text-2xl font-bold text-primary-700">{stats.totalPatients}</h3>
            <p className="text-xs text-success-600 flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" /> 
              +3 this month
            </p>
          </div>
        </div>

        <div className="card p-6 flex items-center">
          <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mr-4">
            <User className="w-6 h-6 text-secondary-600" />
          </div>
          <div>
            <p className="text-neutral-600 text-sm">Active Treatments</p>
            <h3 className="text-2xl font-bold text-secondary-700">{stats.activePatients}</h3>
            <p className="text-xs text-neutral-500">
              {Math.round((stats.activePatients / stats.totalPatients) * 100)}% of total
            </p>
          </div>
        </div>

        <div className="card p-6 flex items-center">
          <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mr-4">
            <Calendar className="w-6 h-6 text-accent-600" />
          </div>
          <div>
            <p className="text-neutral-600 text-sm">This Week's Appointments</p>
            <h3 className="text-2xl font-bold text-accent-700">{stats.appointmentsThisWeek}</h3>
            <p className="text-xs text-warning-600">
              2 consultations, 5 follow-ups
            </p>
          </div>
        </div>

        <div className="card p-6 flex items-center">
          <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center mr-4">
            <BarChart2 className="w-6 h-6 text-success-600" />
          </div>
          <div>
            <p className="text-neutral-600 text-sm">Success Rate</p>
            <h3 className="text-2xl font-bold text-success-700">{stats.successRate}%</h3>
            <p className="text-xs text-success-600">
              {stats.completedTreatments} completed treatments
            </p>
          </div>
        </div>
      </div>

      {/* Recent Patients and Upcoming Appointments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="card p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-primary-700">Recent Patients</h2>
            <Link to="/patients" className="text-sm text-primary-600 hover:text-primary-700">
              View All
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-3 text-sm font-medium text-neutral-500">Patient</th>
                  <th className="text-left py-3 text-sm font-medium text-neutral-500">Condition</th>
                  <th className="text-left py-3 text-sm font-medium text-neutral-500">Status</th>
                  <th className="text-left py-3 text-sm font-medium text-neutral-500">Progress</th>
                </tr>
              </thead>
              <tbody>
                {patients.slice(0, 5).map((patient) => (
                  <tr key={patient.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                    <td className="py-3">
                      <Link to={`/patients/${patient.id}`} className="font-medium text-primary-700 hover:text-primary-800">
                        {patient.name}
                      </Link>
                      <p className="text-xs text-neutral-500">{patient.age} years</p>
                    </td>
                    <td className="py-3 text-neutral-700">{patient.condition}</td>
                    <td className="py-3">
                      <span className={`inline-flex px-2 py-1 text-xs rounded-full font-medium ${
                        patient.status === 'active' 
                          ? 'bg-success-100 text-success-800' 
                          : patient.status === 'completed'
                            ? 'bg-neutral-100 text-neutral-800'
                            : 'bg-warning-100 text-warning-800'
                      }`}>
                        {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="w-full bg-neutral-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            patient.progress >= 75 
                              ? 'bg-success-500' 
                              : patient.progress >= 40
                                ? 'bg-warning-500'
                                : 'bg-primary-500'
                          }`}
                          style={{ width: `${patient.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-neutral-500 mt-1">{patient.progress}%</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-primary-700">Upcoming Appointments</h2>
            <Link to="/appointments" className="text-sm text-primary-600 hover:text-primary-700">
              View Calendar
            </Link>
          </div>
          
          <div className="space-y-4">
            {upcomingAppointments.slice(0, 4).map((appointment) => (
              <div key={appointment.id} className="flex items-start p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-500" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <Link to={`/patients/${appointment.patientId}`} className="font-medium text-primary-700 hover:text-primary-800">
                      {appointment.patientName}
                    </Link>
                    <span className={`inline-flex px-2 py-1 text-xs rounded-full font-medium ${
                      appointment.type === 'Initial' 
                        ? 'bg-primary-100 text-primary-800' 
                        : appointment.type === 'Follow-up'
                          ? 'bg-secondary-100 text-secondary-800'
                          : 'bg-accent-100 text-accent-800'
                    }`}>
                      {appointment.type}
                    </span>
                  </div>
                  <div className="flex items-center mt-1">
                    <Calendar className="w-4 h-4 text-neutral-500 mr-1" />
                    <span className="text-sm text-neutral-600">
                      {format(appointment.date, 'MMM d, yyyy')}
                    </span>
                    <span className="mx-2 text-neutral-400">•</span>
                    <Clock className="w-4 h-4 text-neutral-500 mr-1" />
                    <span className="text-sm text-neutral-600">{appointment.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <button className="btn btn-outline">
              + New Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Treatment Success Showcase */}
      <div className="card p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-primary-700">Recent Treatment Successes</h2>
          <Link to="/case-gallery" className="text-sm text-primary-600 hover:text-primary-700">
            View All Cases
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-neutral-50 rounded-lg overflow-hidden">
            <div className="relative h-48">
              <div className="absolute inset-0 grid grid-cols-2">
                <div className="bg-neutral-200 flex items-center justify-center text-neutral-400">
                  Before
                </div>
                <div className="bg-primary-100 flex items-center justify-center text-primary-600">
                  After
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-primary-700">Chronic Eczema Treatment</h3>
              <p className="text-sm text-neutral-600 mb-2">Emma W., 28 - 3 month treatment</p>
              <p className="text-xs text-neutral-500">Significant improvement after constitutional treatment with Graphites 30C followed by Sulphur 200C.</p>
            </div>
          </div>
          
          <div className="bg-neutral-50 rounded-lg overflow-hidden">
            <div className="relative h-48">
              <div className="absolute inset-0 grid grid-cols-2">
                <div className="bg-neutral-200 flex items-center justify-center text-neutral-400">
                  Before
                </div>
                <div className="bg-primary-100 flex items-center justify-center text-primary-600">
                  After
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-primary-700">Migraine Recovery</h3>
              <p className="text-sm text-neutral-600 mb-2">David L., 42 - 6 month treatment</p>
              <p className="text-xs text-neutral-500">Frequency reduced from weekly to once every 3 months with Natrum Muriaticum 200C and lifestyle adjustments.</p>
            </div>
          </div>
          
          <div className="bg-neutral-50 rounded-lg overflow-hidden">
            <div className="relative h-48">
              <div className="absolute inset-0 grid grid-cols-2">
                <div className="bg-neutral-200 flex items-center justify-center text-neutral-400">
                  Before
                </div>
                <div className="bg-primary-100 flex items-center justify-center text-primary-600">
                  After
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-primary-700">Digestive Health Improvement</h3>
              <p className="text-sm text-neutral-600 mb-2">Sarah J., 34 - 4 month treatment</p>
              <p className="text-xs text-neutral-500">Complete resolution of IBS symptoms using Lycopodium 30C, Nux Vomica 200C and dietary guidance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;