import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  User, 
  Calendar, 
  Clock, 
  FileText, 
  BarChart, 
  FileImage, 
  Edit, 
  Trash, 
  PlusCircle, 
  Save, 
  X, 
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { format } from 'date-fns';

// Mock patient data
const patientData = {
  id: '1',
  name: 'Sarah Johnson',
  age: 34,
  gender: 'Female',
  email: 'sarah.johnson@example.com',
  phone: '+1 (234) 567-8912',
  address: '456 Wellness Ave, Healthy City, HC 20001',
  occupation: 'Teacher',
  condition: 'Chronic Migraine',
  startDate: new Date(2024, 0, 15),
  allergies: ['Penicillin', 'Pollen'],
  medicalHistory: 'Occasional hypertension, seasonal allergies',
  status: 'active',
  progress: 65,
};

// Mock visits data
const visitsData = [
  {
    id: '1',
    date: new Date(2024, 0, 15),
    type: 'Initial Consultation',
    notes: 'Patient presents with chronic migraines occurring 3-4 times per week. Reports throbbing pain predominantly on right side, accompanied by nausea and sensitivity to light. Triggers include stress and lack of sleep. Physical examination normal.',
    symptoms: ['Throbbing headache', 'Nausea', 'Light sensitivity', 'Sound sensitivity'],
    prescription: 'Natrum Muriaticum 30C, 3 pellets twice daily for 2 weeks',
    files: [
      { id: '1', name: 'Initial Assessment.pdf', type: 'document' },
      { id: '2', name: 'Medical History.pdf', type: 'document' },
    ],
  },
  {
    id: '2',
    date: new Date(2024, 1, 5),
    type: 'Follow-up',
    notes: 'Patient reports mild improvement. Frequency of migraines reduced to 2-3 times per week. Still experiences similar intensity when they occur. Sleep has improved slightly.',
    symptoms: ['Throbbing headache', 'Nausea', 'Light sensitivity'],
    prescription: 'Continue Natrum Muriaticum 30C, add Belladonna 200C for acute attacks',
    files: [
      { id: '3', name: 'Progress Report.pdf', type: 'document' },
      { id: '4', name: 'Headache Journal.pdf', type: 'document' },
    ],
  },
  {
    id: '3',
    date: new Date(2024, 2, 15),
    type: 'Follow-up',
    notes: 'Significant improvement noted. Migraine frequency down to once per week, with reduced intensity and duration. Patient reports better sleep quality and reduced stress levels. Continues to maintain headache journal.',
    symptoms: ['Occasional headache', 'Mild light sensitivity'],
    prescription: 'Natrum Muriaticum 200C, once weekly for 4 weeks',
    files: [
      { id: '5', name: 'Updated Assessment.pdf', type: 'document' },
      { id: '6', name: 'Headache_Comparison.jpg', type: 'image' },
    ],
  },
];

// Treatment progress images
const progressImages = [
  {
    id: '1',
    before: {
      url: 'https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: new Date(2024, 0, 15),
      caption: 'Initial visit - Patient showing signs of distress during migraine attack'
    },
    after: {
      url: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: new Date(2024, 2, 15),
      caption: 'After 2 months of treatment - Significant reduction in migraine symptoms'
    },
    description: 'Visual comparison showing reduced tension in facial muscles and improved overall appearance after treatment.',
    category: 'Physical Appearance'
  }
];

const PatientDetailPage = () => {
  const { patientId } = useParams<{ patientId: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [expandedVisits, setExpandedVisits] = useState<string[]>([visitsData[0].id]);
  
  // Form states
  const [newNote, setNewNote] = useState({
    type: 'Follow-up',
    notes: '',
    symptoms: '',
    prescription: '',
  });

  const toggleVisitExpansion = (visitId: string) => {
    if (expandedVisits.includes(visitId)) {
      setExpandedVisits(expandedVisits.filter(id => id !== visitId));
    } else {
      setExpandedVisits([...expandedVisits, visitId]);
    }
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    // This would save the new note to the database in a real application
    setIsAddingNote(false);
    setNewNote({
      type: 'Follow-up',
      notes: '',
      symptoms: '',
      prescription: '',
    });
  };

  // Calculate treatment duration
  const treatmentDuration = () => {
    const start = patientData.startDate;
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - start.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    
    return `${diffMonths} ${diffMonths === 1 ? 'month' : 'months'}`;
  };

  return (
    <div className="animate-fadeIn">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary-700 mb-1">{patientData.name}</h1>
          <p className="text-neutral-600">{patientData.condition} • {patientData.age} years, {patientData.gender}</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center">
          <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
            patientData.status === 'active' 
              ? 'bg-success-100 text-success-800' 
              : patientData.status === 'completed'
                ? 'bg-neutral-100 text-neutral-800'
                : 'bg-warning-100 text-warning-800'
          }`}>
            {patientData.status.charAt(0).toUpperCase() + patientData.status.slice(1)}
          </span>
          <button className="btn btn-outline ml-4">
            <Edit className="w-4 h-4 mr-2" />
            Edit Patient
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-neutral-200 mb-6">
        <button 
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === 'overview' 
              ? 'border-b-2 border-primary-500 text-primary-700' 
              : 'text-neutral-600 hover:text-primary-600'
          }`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === 'visits' 
              ? 'border-b-2 border-primary-500 text-primary-700' 
              : 'text-neutral-600 hover:text-primary-600'
          }`}
          onClick={() => setActiveTab('visits')}
        >
          Treatment Notes
        </button>
        <button 
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === 'progress' 
              ? 'border-b-2 border-primary-500 text-primary-700' 
              : 'text-neutral-600 hover:text-primary-600'
          }`}
          onClick={() => setActiveTab('progress')}
        >
          Progress Photos
        </button>
        <button 
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === 'files' 
              ? 'border-b-2 border-primary-500 text-primary-700' 
              : 'text-neutral-600 hover:text-primary-600'
          }`}
          onClick={() => setActiveTab('files')}
        >
          Files & Documents
        </button>
      </div>

      {/* Tab content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Patient Information */}
          <div className="md:col-span-1">
            <div className="card p-6 mb-6">
              <h2 className="text-xl font-semibold text-primary-700 mb-4">Patient Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <User className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-neutral-500">Full Name</p>
                    <p className="text-neutral-800">{patientData.name}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-neutral-500">Age & Gender</p>
                    <p className="text-neutral-800">{patientData.age} years, {patientData.gender}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FileText className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-neutral-500">Occupation</p>
                    <p className="text-neutral-800">{patientData.occupation}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-neutral-500">Treatment Duration</p>
                    <p className="text-neutral-800">
                      {treatmentDuration()} (since {format(patientData.startDate, 'MMMM d, yyyy')})
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card p-6 mb-6">
              <h2 className="text-xl font-semibold text-primary-700 mb-4">Contact Details</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-neutral-500">Email Address</p>
                  <p className="text-primary-600">{patientData.email}</p>
                </div>
                
                <div>
                  <p className="text-sm text-neutral-500">Phone Number</p>
                  <p className="text-neutral-800">{patientData.phone}</p>
                </div>
                
                <div>
                  <p className="text-sm text-neutral-500">Address</p>
                  <p className="text-neutral-800">{patientData.address}</p>
                </div>
              </div>
            </div>
            
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-primary-700 mb-4">Medical Information</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-neutral-500">Allergies</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {patientData.allergies.map((allergy, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-warning-50 text-warning-800 rounded-full text-xs"
                      >
                        {allergy}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-neutral-500">Medical History</p>
                  <p className="text-neutral-800">{patientData.medicalHistory}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Treatment Summary */}
          <div className="md:col-span-2">
            <div className="card p-6 mb-6">
              <h2 className="text-xl font-semibold text-primary-700 mb-4">Treatment Overview</h2>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-neutral-800">Condition: {patientData.condition}</h3>
                  <span className="text-sm text-neutral-500">Progress: {patientData.progress}%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      patientData.progress >= 75 
                        ? 'bg-success-500' 
                        : patientData.progress >= 40
                          ? 'bg-warning-500'
                          : 'bg-primary-500'
                    }`}
                    style={{ width: `${patientData.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-primary-50 rounded-lg p-4">
                  <p className="text-sm text-neutral-500 mb-1">Total Visits</p>
                  <p className="text-2xl font-semibold text-primary-700">{visitsData.length}</p>
                </div>
                
                <div className="bg-secondary-50 rounded-lg p-4">
                  <p className="text-sm text-neutral-500 mb-1">Last Visit</p>
                  <p className="text-lg font-semibold text-secondary-700">
                    {format(visitsData[visitsData.length - 1].date, 'MMM d, yyyy')}
                  </p>
                </div>
                
                <div className="bg-accent-50 rounded-lg p-4">
                  <p className="text-sm text-neutral-500 mb-1">Next Appointment</p>
                  <p className="text-lg font-semibold text-accent-700">
                    April 5, 2025
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-neutral-800 mb-3">Current Treatment Plan</h3>
                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <p className="font-medium">Natrum Muriaticum 200C</p>
                  <p className="text-sm text-neutral-700">Once weekly for 4 weeks</p>
                  <p className="text-sm text-neutral-500 mt-2">
                    Prescribed on {format(visitsData[visitsData.length - 1].date, 'MMMM d, yyyy')}
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-neutral-800 mb-3">Symptom Progression</h3>
                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">Headache Frequency</span>
                    <span className="text-xs bg-success-100 text-success-800 px-2 py-1 rounded-full">
                      -75% Reduction
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Initial: 3-4 times/week</span>
                        <span>Current: 1 time/week</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div className="bg-success-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Intensity Reduction</span>
                        <span>60%</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div className="bg-warning-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Sleep Quality</span>
                        <span>70% Improved</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div className="bg-success-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-primary-700">Recent Treatment Notes</h2>
                <button 
                  className="text-sm text-primary-600 hover:text-primary-700 flex items-center"
                  onClick={() => setActiveTab('visits')}
                >
                  View All Notes
                </button>
              </div>
              
              <div className="space-y-4">
                {visitsData.slice(-2).map((visit) => (
                  <div key={visit.id} className="border border-neutral-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">{visit.type}</h3>
                        <p className="text-sm text-neutral-500">{format(visit.date, 'MMMM d, yyyy')}</p>
                      </div>
                      <button 
                        className="text-sm text-primary-600 hover:underline"
                        onClick={() => setActiveTab('visits')}
                      >
                        View Details
                      </button>
                    </div>
                    <p className="text-sm text-neutral-700 line-clamp-2">{visit.notes}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <button 
                  className="btn btn-outline"
                  onClick={() => {
                    setActiveTab('visits');
                    setIsAddingNote(true);
                  }}
                >
                  + Add New Note
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'visits' && (
        <div className="card p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-primary-700">Treatment Notes</h2>
            <button 
              className="btn btn-primary"
              onClick={() => setIsAddingNote(!isAddingNote)}
            >
              {isAddingNote ? (
                <>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </>
              ) : (
                <>
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Add New Note
                </>
              )}
            </button>
          </div>
          
          {isAddingNote && (
            <div className="mb-8 p-4 border border-primary-200 rounded-lg bg-primary-50">
              <h3 className="font-medium text-primary-700 mb-4">New Treatment Note</h3>
              
              <form onSubmit={handleAddNote}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="visitType" className="label">Visit Type</label>
                    <select
                      id="visitType"
                      className="input"
                      value={newNote.type}
                      onChange={(e) => setNewNote({...newNote, type: e.target.value})}
                    >
                      <option value="Follow-up">Follow-up</option>
                      <option value="Initial Consultation">Initial Consultation</option>
                      <option value="Emergency Visit">Emergency Visit</option>
                      <option value="Telephone Consultation">Telephone Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="visitDate" className="label">Date</label>
                    <input
                      type="date"
                      id="visitDate"
                      className="input"
                      defaultValue={format(new Date(), 'yyyy-MM-dd')}
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="symptoms" className="label">Symptoms</label>
                  <textarea
                    id="symptoms"
                    rows={2}
                    className="input"
                    placeholder="Enter current symptoms, separated by commas"
                    value={newNote.symptoms}
                    onChange={(e) => setNewNote({...newNote, symptoms: e.target.value})}
                  ></textarea>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="notes" className="label">Consultation Notes</label>
                  <textarea
                    id="notes"
                    rows={4}
                    className="input"
                    placeholder="Enter detailed consultation notes"
                    value={newNote.notes}
                    onChange={(e) => setNewNote({...newNote, notes: e.target.value})}
                  ></textarea>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="prescription" className="label">Prescription</label>
                  <textarea
                    id="prescription"
                    rows={2}
                    className="input"
                    placeholder="Enter prescription details"
                    value={newNote.prescription}
                    onChange={(e) => setNewNote({...newNote, prescription: e.target.value})}
                  ></textarea>
                </div>
                
                <div className="mb-4">
                  <label className="label">Upload Files</label>
                  <div className="border-2 border-dashed border-neutral-300 rounded-lg p-4 text-center">
                    <FileImage className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
                    <p className="text-sm text-neutral-600 mb-2">
                      Drag and drop files here, or click to browse
                    </p>
                    <button 
                      type="button" 
                      className="btn btn-outline text-sm py-1"
                    >
                      Choose Files
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button type="submit" className="btn btn-primary">
                    <Save className="w-4 h-4 mr-2" />
                    Save Note
                  </button>
                </div>
              </form>
            </div>
          )}
          
          <div className="space-y-6">
            {visitsData.map((visit) => {
              const isExpanded = expandedVisits.includes(visit.id);
              
              return (
                <div key={visit.id} className="border border-neutral-200 rounded-lg overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 cursor-pointer hover:bg-neutral-50"
                    onClick={() => toggleVisitExpansion(visit.id)}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                        <FileText className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{visit.type}</h3>
                        <p className="text-sm text-neutral-500">{format(visit.date, 'MMMM d, yyyy')}</p>
                      </div>
                    </div>
                    <button className="text-neutral-500">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                  
                  {isExpanded && (
                    <div className="p-4 border-t border-neutral-200 bg-neutral-50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-neutral-700 mb-2">Consultation Notes</h4>
                          <p className="text-sm text-neutral-600 mb-4">{visit.notes}</p>
                          
                          <h4 className="font-medium text-neutral-700 mb-2">Symptoms</h4>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {visit.symptoms.map((symptom, index) => (
                              <span key={index} className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs">
                                {symptom}
                              </span>
                            ))}
                          </div>
                          
                          <h4 className="font-medium text-neutral-700 mb-2">Prescription</h4>
                          <div className="bg-white p-3 rounded border border-neutral-200 text-sm">
                            {visit.prescription}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-neutral-700 mb-2">Files & Documents</h4>
                          <div className="space-y-2">
                            {visit.files.map((file) => (
                              <div key={file.id} className="flex items-center p-2 bg-white rounded border border-neutral-200">
                                <div className="w-8 h-8 bg-primary-50 rounded flex items-center justify-center mr-3">
                                  {file.type === 'document' ? (
                                    <FileText className="w-4 h-4 text-primary-600" />
                                  ) : (
                                    <FileImage className="w-4 h-4 text-primary-600" />
                                  )}
                                </div>
                                <span className="text-sm">{file.name}</span>
                                <button className="ml-auto text-primary-600 hover:text-primary-700">
                                  <ExternalLink size={16} />
                                </button>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-4 text-right">
                            <button className="btn btn-outline flex items-center ml-auto text-sm py-1.5">
                              <Edit className="w-4 h-4 mr-2" />
                              Edit Note
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      
      {activeTab === 'progress' && (
        <div className="card p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-primary-700">Progress Photos</h2>
            <button className="btn btn-primary">
              <PlusCircle className="w-4 h-4 mr-2" />
              Add New Comparison
            </button>
          </div>
          
          <div className="mb-8">
            <p className="text-neutral-600 mb-4">
              Visual documentation of treatment progress helps track the effectiveness of the homeopathic remedies and provides 
              tangible evidence of improvement for both you and your patients.
            </p>
          </div>
          
          {progressImages.length > 0 ? (
            <div className="space-y-8">
              {progressImages.map((image) => (
                <div key={image.id} className="border border-neutral-200 rounded-lg overflow-hidden">
                  <div className="p-4 bg-neutral-50 border-b border-neutral-200">
                    <h3 className="font-medium text-primary-700">{image.category}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                    <div>
                      <div className="bg-neutral-100 rounded-lg overflow-hidden mb-2">
                        <img 
                          src={image.before.url} 
                          alt="Before treatment" 
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <p className="font-medium text-neutral-700">Before</p>
                        <p className="text-sm text-neutral-500">{format(image.before.date, 'MMMM d, yyyy')}</p>
                        <p className="text-sm text-neutral-600 mt-1">{image.before.caption}</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="bg-neutral-100 rounded-lg overflow-hidden mb-2">
                        <img 
                          src={image.after.url} 
                          alt="After treatment" 
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <p className="font-medium text-success-700">After</p>
                        <p className="text-sm text-neutral-500">{format(image.after.date, 'MMMM d, yyyy')}</p>
                        <p className="text-sm text-neutral-600 mt-1">{image.after.caption}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border-t border-neutral-200 bg-neutral-50">
                    <p className="text-neutral-700">{image.description}</p>
                    
                    <div className="flex justify-end mt-2">
                      <button className="text-sm text-primary-600 hover:text-primary-700 mr-4">
                        <Edit className="w-4 h-4 inline mr-1" />
                        Edit
                      </button>
                      <button className="text-sm text-error-600 hover:text-error-700">
                        <Trash className="w-4 h-4 inline mr-1" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileImage className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-700 mb-2">No Progress Photos Yet</h3>
              <p className="text-neutral-500 max-w-md mx-auto mb-6">
                Upload before and after photos to document the patient's journey and treatment effectiveness
              </p>
              <button className="btn btn-primary">
                <PlusCircle className="w-4 h-4 mr-2" />
                Add First Comparison
              </button>
            </div>
          )}
        </div>
      )}
      
      {activeTab === 'files' && (
        <div className="card p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-primary-700">Files & Documents</h2>
            <button className="btn btn-primary">
              <PlusCircle className="w-4 h-4 mr-2" />
              Upload Files
            </button>
          </div>
          
          <div className="mb-8">
            <div className="flex border-b border-neutral-200">
              <button className="px-4 py-2 font-medium text-sm border-b-2 border-primary-500 text-primary-700">
                All Files
              </button>
              <button className="px-4 py-2 font-medium text-sm text-neutral-600 hover:text-primary-600">
                Documents
              </button>
              <button className="px-4 py-2 font-medium text-sm text-neutral-600 hover:text-primary-600">
                Images
              </button>
              <button className="px-4 py-2 font-medium text-sm text-neutral-600 hover:text-primary-600">
                Lab Results
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Type</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Date Added</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Related Visit</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {visitsData.flatMap(visit => 
                  visit.files.map(file => (
                    <tr key={file.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-primary-50 rounded flex items-center justify-center mr-3">
                            {file.type === 'document' ? (
                              <FileText className="w-4 h-4 text-primary-600" />
                            ) : (
                              <FileImage className="w-4 h-4 text-primary-600" />
                            )}
                          </div>
                          <span className="font-medium text-primary-700">{file.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-neutral-700 capitalize">{file.type}</td>
                      <td className="py-3 px-4 text-neutral-700">{format(visit.date, 'MMM d, yyyy')}</td>
                      <td className="py-3 px-4 text-neutral-700">{visit.type}</td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <button className="text-primary-600 hover:text-primary-700">
                            <ExternalLink size={16} />
                          </button>
                          <button className="text-neutral-600 hover:text-neutral-700">
                            <Edit size={16} />
                          </button>
                          <button className="text-error-600 hover:text-error-700">
                            <Trash size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientDetailPage;