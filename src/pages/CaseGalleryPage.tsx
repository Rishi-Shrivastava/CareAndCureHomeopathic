import { useState } from 'react';
import { Search, Filter, ArrowUp, ArrowDown, PlusCircle, FileImage } from 'lucide-react';
import { format } from 'date-fns';

// Mock case studies data
const initialCaseStudies = [
  {
    id: '1',
    title: 'Chronic Migraine Treatment Success',
    patient: {
      name: 'Sarah J.',
      age: 34,
      gender: 'Female'
    },
    condition: 'Chronic Migraine',
    duration: '6 months',
    treatmentDate: new Date(2024, 0, 15),
    remedialsUsed: ['Natrum Muriaticum 30C', 'Belladonna 200C', 'Natrum Muriaticum 200C'],
    description: 'Patient presented with chronic migraines occurring 3-4 times per week. After constitutional treatment, frequency reduced to once per month with significantly decreased intensity.',
    successRate: 85,
    beforeImage: 'https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    afterImage: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Migraine', 'Chronic Pain', 'Constitutional Treatment']
  },
  {
    id: '2',
    title: 'Eczema Recovery Case',
    patient: {
      name: 'Michael B.',
      age: 28,
      gender: 'Male'
    },
    condition: 'Chronic Eczema',
    duration: '4 months',
    treatmentDate: new Date(2024, 1, 10),
    remedialsUsed: ['Sulphur 30C', 'Graphites 200C'],
    description: 'Patient suffered from chronic eczema for over 3 years, primarily affecting arms and back. Treatment focused on constitutional approach with Sulphur and intercurrent doses of Graphites, resulting in complete clearance.',
    successRate: 90,
    beforeImage: 'https://images.pexels.com/photos/4046567/pexels-photo-4046567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    afterImage: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Eczema', 'Skin Condition', 'Constitutional Treatment']
  },
  {
    id: '3',
    title: 'Anxiety Disorder Improvement',
    patient: {
      name: 'Emma W.',
      age: 32,
      gender: 'Female'
    },
    condition: 'Generalized Anxiety Disorder',
    duration: '5 months',
    treatmentDate: new Date(2024, 2, 5),
    remedialsUsed: ['Argentum Nitricum 200C', 'Phosphorus 30C'],
    description: 'Patient presented with severe anxiety, panic attacks, and insomnia. Comprehensive treatment plan addressed both acute symptoms and underlying constitutional factors, resulting in significant improvement in quality of life.',
    successRate: 75,
    beforeImage: 'https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    afterImage: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Anxiety', 'Mental Health', 'Sleep Issues']
  },
  {
    id: '4',
    title: 'Childhood Asthma Management',
    patient: {
      name: 'David L.',
      age: 9,
      gender: 'Male'
    },
    condition: 'Bronchial Asthma',
    duration: '8 months',
    treatmentDate: new Date(2023, 11, 12),
    remedialsUsed: ['Arsenicum Album 30C', 'Pulsatilla 200C', 'Tuberculinum 1M'],
    description: 'Young patient with recurrent asthmatic episodes triggered by weather changes and respiratory infections. Treatment dramatically reduced frequency and intensity of attacks, with significant improvement in overall respiratory health.',
    successRate: 80,
    beforeImage: 'https://images.pexels.com/photos/4021808/pexels-photo-4021808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    afterImage: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Asthma', 'Pediatric', 'Respiratory']
  },
  {
    id: '5',
    title: 'IBS Treatment Success Story',
    patient: {
      name: 'Olivia M.',
      age: 39,
      gender: 'Female'
    },
    condition: 'Irritable Bowel Syndrome',
    duration: '7 months',
    treatmentDate: new Date(2024, 1, 20),
    remedialsUsed: ['Lycopodium 30C', 'Nux Vomica 200C', 'Carbo Vegetabilis 30C'],
    description: 'Patient had suffered from IBS for over 5 years with significant impact on quality of life. Treatment addressed both digestive symptoms and underlying anxiety, resulting in normalized bowel function and improved overall well-being.',
    successRate: 85,
    beforeImage: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    afterImage: 'https://images.pexels.com/photos/7089621/pexels-photo-7089621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['IBS', 'Digestive Health', 'Chronic Condition']
  }
];

const CaseGalleryPage = () => {
  const [caseStudies, setCaseStudies] = useState(initialCaseStudies);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('treatmentDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [filterCondition, setFilterCondition] = useState('All');
  
  const conditions = ['All', ...Array.from(new Set(initialCaseStudies.map(cs => cs.condition)))];
  
  // Handle sorting
  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Filter and sort case studies
  const filteredAndSortedCases = caseStudies
    .filter(cs => 
      (filterCondition === 'All' || cs.condition === filterCondition) &&
      (cs.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       cs.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
       cs.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => {
      if (sortField === 'treatmentDate') {
        return sortDirection === 'asc' 
          ? a.treatmentDate.getTime() - b.treatmentDate.getTime()
          : b.treatmentDate.getTime() - a.treatmentDate.getTime();
      } else if (sortField === 'successRate') {
        return sortDirection === 'asc' 
          ? a.successRate - b.successRate
          : b.successRate - a.successRate;
      } else {
        // Default sort by title
        return sortDirection === 'asc'
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
    });

  return (
    <div className="animate-fadeIn">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary-700 mb-2">Case Gallery</h1>
          <p className="text-neutral-600">Showcase your successful treatment outcomes with visual evidence.</p>
        </div>
        <button className="btn btn-primary mt-4 sm:mt-0">
          <PlusCircle className="w-4 h-4 mr-2" />
          Add New Case
        </button>
      </div>
      
      {/* Search and Filters */}
      <div className="mb-8 bg-white rounded-lg shadow-sm p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2">
            <div className="relative">
              <input
                type="text"
                className="input pl-10"
                placeholder="Search by title, condition, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
            </div>
          </div>
          
          <div>
            <div className="relative">
              <select
                className="input pl-10 appearance-none"
                value={filterCondition}
                onChange={(e) => setFilterCondition(e.target.value)}
              >
                {conditions.map((condition) => (
                  <option key={condition} value={condition}>{condition}</option>
                ))}
              </select>
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Sort Controls */}
      <div className="mb-4 flex justify-between items-center">
        <p className="text-sm text-neutral-500">Showing {filteredAndSortedCases.length} cases</p>
        
        <div className="flex space-x-4">
          <button 
            className={`flex items-center text-sm ${sortField === 'treatmentDate' ? 'text-primary-700 font-medium' : 'text-neutral-600'}`}
            onClick={() => handleSort('treatmentDate')}
          >
            Date
            {sortField === 'treatmentDate' && (
              sortDirection === 'asc' ? <ArrowUp size={16} className="ml-1" /> : <ArrowDown size={16} className="ml-1" />
            )}
          </button>
          
          <button 
            className={`flex items-center text-sm ${sortField === 'successRate' ? 'text-primary-700 font-medium' : 'text-neutral-600'}`}
            onClick={() => handleSort('successRate')}
          >
            Success Rate
            {sortField === 'successRate' && (
              sortDirection === 'asc' ? <ArrowUp size={16} className="ml-1" /> : <ArrowDown size={16} className="ml-1" />
            )}
          </button>
          
          <button 
            className={`flex items-center text-sm ${sortField === 'title' ? 'text-primary-700 font-medium' : 'text-neutral-600'}`}
            onClick={() => handleSort('title')}
          >
            Title
            {sortField === 'title' && (
              sortDirection === 'asc' ? <ArrowUp size={16} className="ml-1" /> : <ArrowDown size={16} className="ml-1" />
            )}
          </button>
        </div>
      </div>
      
      {/* Case Studies Grid */}
      {filteredAndSortedCases.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedCases.map((caseStudy) => (
            <div key={caseStudy.id} className="card card-hover overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="relative">
                    <img 
                      src={caseStudy.beforeImage} 
                      alt={`Before - ${caseStudy.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-neutral-800 bg-opacity-70 text-white px-2 py-1 text-xs">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={caseStudy.afterImage} 
                      alt={`After - ${caseStudy.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-success-600 bg-opacity-70 text-white px-2 py-1 text-xs">
                      After
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-medium text-primary-700 shadow-sm">
                  {caseStudy.successRate}% Success
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg text-primary-700 line-clamp-1">{caseStudy.title}</h3>
                </div>
                
                <p className="text-sm text-neutral-500 mb-2">
                  {caseStudy.patient.name}, {caseStudy.patient.age} • {format(caseStudy.treatmentDate, 'MMM yyyy')}
                </p>
                
                <div className="bg-primary-50 rounded-md px-3 py-2 mb-3">
                  <p className="text-sm font-medium text-primary-700">{caseStudy.condition}</p>
                  <p className="text-xs text-neutral-600">{caseStudy.duration} treatment duration</p>
                </div>
                
                <p className="text-sm text-neutral-700 mb-3 line-clamp-3">{caseStudy.description}</p>
                
                <div className="mb-3">
                  <p className="text-xs font-medium text-neutral-700 mb-1">Remedials Used:</p>
                  <div className="flex flex-wrap gap-1">
                    {caseStudy.remedialsUsed.map((remedial, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-2 py-0.5 bg-secondary-50 text-secondary-700 rounded text-xs"
                      >
                        {remedial}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {caseStudy.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-block px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-neutral-200 p-3 bg-neutral-50">
                <button className="w-full text-center text-sm font-medium text-primary-600 hover:text-primary-700">
                  View Full Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg shadow-sm">
          <FileImage className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-neutral-700 mb-2">No Case Studies Found</h3>
          <p className="text-neutral-500 max-w-md mx-auto mb-6">
            {searchTerm || filterCondition !== 'All'
              ? "Try adjusting your search or filters to see more results."
              : "Start showcasing your treatment successes by adding your first case study."}
          </p>
          {!searchTerm && filterCondition === 'All' && (
            <button className="btn btn-primary">
              <PlusCircle className="w-4 h-4 mr-2" />
              Add Your First Case
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CaseGalleryPage;