import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Camera, Save, ExternalLink, MapPin, Mail, Phone, Award, BookOpen, CheckCircle } from 'lucide-react';

const DoctorProfilePage = () => {
  const { user } = useAuth();
  
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || 'Dr. John Doe',
    profileImage: user?.profileImage || '',
    specialization: user?.specialization || 'Homeopathic Physician',
    about: 'With over 15 years of experience in homeopathic medicine, I specialize in treating chronic conditions and providing holistic healthcare solutions for patients of all ages.',
    qualifications: [
      'Board Certified Homeopathic Physician (BHMS)',
      'Fellowship in Clinical Homeopathy (FCH)',
      'Certified in Classical Homeopathy',
      'Member, International Homeopathic Medical League'
    ],
    experience: '15+ years',
    languages: ['English', 'Spanish'],
    address: '123 Healing Street, Wellness City, WC 10001',
    email: 'dr.john@careandcure.com',
    phone: '+1 (234) 567-8901',
    website: 'www.drjohndoe.com',
    specializations: ['Chronic Conditions', 'Pediatric Care', 'Skin Disorders', 'Mental Health', 'Digestive Issues'],
    workingHours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 3:00 PM',
      saturday: 'Closed',
      sunday: 'Closed'
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would save to a database
    setIsEditing(false);
  };

  // Mock function for image upload
  const handleImageUpload = () => {
    // This would be replaced with an actual file upload
    const newImageUrl = 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    setProfileData(prev => ({
      ...prev,
      profileImage: newImageUrl
    }));
  };

  return (
    <div className="animate-fadeIn">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary-700">Your Professional Profile</h1>
        <button 
          className={`btn ${isEditing ? 'btn-accent' : 'btn-primary'}`}
          onClick={() => isEditing ? handleSaveProfile : setIsEditing(!isEditing)}
        >
          {isEditing ? (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </>
          ) : (
            'Edit Profile'
          )}
        </button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSaveProfile}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile Image and Basic Info Section */}
            <div className="md:col-span-1">
              <div className="card p-6">
                <div className="mb-6 text-center">
                  <div className="relative inline-block">
                    {profileData.profileImage ? (
                      <img 
                        src={profileData.profileImage} 
                        alt={profileData.name} 
                        className="w-40 h-40 rounded-full object-cover mx-auto"
                      />
                    ) : (
                      <div className="w-40 h-40 rounded-full bg-primary-100 flex items-center justify-center mx-auto">
                        <span className="text-4xl font-bold text-primary-600">
                          {profileData.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <button 
                      type="button"
                      className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md hover:bg-primary-50"
                      onClick={handleImageUpload}
                    >
                      <Camera className="w-5 h-5 text-primary-600" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="input"
                      value={profileData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="specialization" className="label">Specialization</label>
                    <input
                      type="text"
                      id="specialization"
                      name="specialization"
                      className="input"
                      value={profileData.specialization}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="label">Years of Experience</label>
                    <input
                      type="text"
                      id="experience"
                      name="experience"
                      className="input"
                      value={profileData.experience}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="card p-6 mt-6">
                <h2 className="text-xl font-semibold text-primary-700 mb-4">Contact Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="label">Office Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="input"
                      value={profileData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="input"
                      value={profileData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="label">Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="input"
                      value={profileData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="label">Website (if any)</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      className="input"
                      value={profileData.website}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Profile Content Section */}
            <div className="md:col-span-2">
              <div className="card p-6">
                <h2 className="text-xl font-semibold text-primary-700 mb-4">About Me</h2>
                <div className="mb-6">
                  <textarea
                    id="about"
                    name="about"
                    rows={6}
                    className="input"
                    value={profileData.about}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                
                <h2 className="text-xl font-semibold text-primary-700 mb-4">Qualifications</h2>
                <div className="mb-6">
                  <textarea
                    id="qualifications"
                    name="qualifications"
                    rows={4}
                    className="input"
                    value={profileData.qualifications.join('\n')}
                    onChange={(e) => {
                      const qualifications = e.target.value.split('\n').filter(q => q.trim());
                      setProfileData(prev => ({
                        ...prev,
                        qualifications
                      }));
                    }}
                  ></textarea>
                  <p className="text-xs text-neutral-500 mt-1">
                    Enter each qualification on a new line
                  </p>
                </div>
                
                <h2 className="text-xl font-semibold text-primary-700 mb-4">Areas of Specialization</h2>
                <div className="mb-6">
                  <textarea
                    id="specializations"
                    name="specializations"
                    rows={3}
                    className="input"
                    value={profileData.specializations.join('\n')}
                    onChange={(e) => {
                      const specializations = e.target.value.split('\n').filter(s => s.trim());
                      setProfileData(prev => ({
                        ...prev,
                        specializations
                      }));
                    }}
                  ></textarea>
                  <p className="text-xs text-neutral-500 mt-1">
                    Enter each specialization on a new line
                  </p>
                </div>
                
                <h2 className="text-xl font-semibold text-primary-700 mb-4">Languages Spoken</h2>
                <div className="mb-6">
                  <textarea
                    id="languages"
                    name="languages"
                    rows={2}
                    className="input"
                    value={profileData.languages.join('\n')}
                    onChange={(e) => {
                      const languages = e.target.value.split('\n').filter(l => l.trim());
                      setProfileData(prev => ({
                        ...prev,
                        languages
                      }));
                    }}
                  ></textarea>
                  <p className="text-xs text-neutral-500 mt-1">
                    Enter each language on a new line
                  </p>
                </div>
                
                <h2 className="text-xl font-semibold text-primary-700 mb-4">Working Hours</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(profileData.workingHours).map(([day, hours]) => (
                    <div key={day}>
                      <label htmlFor={day} className="label capitalize">{day}</label>
                      <input
                        type="text"
                        id={day}
                        name={day}
                        className="input"
                        value={hours}
                        onChange={(e) => {
                          setProfileData(prev => ({
                            ...prev,
                            workingHours: {
                              ...prev.workingHours,
                              [day]: e.target.value
                            }
                          }));
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 text-right">
                <button type="submit" className="btn btn-primary flex items-center ml-auto">
                  <Save className="w-4 h-4 mr-2" />
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Image and Basic Info Section */}
          <div className="md:col-span-1">
            <div className="card p-6">
              <div className="mb-6 text-center">
                {profileData.profileImage ? (
                  <img 
                    src={profileData.profileImage} 
                    alt={profileData.name} 
                    className="w-40 h-40 rounded-full object-cover mx-auto"
                  />
                ) : (
                  <div className="w-40 h-40 rounded-full bg-primary-100 flex items-center justify-center mx-auto">
                    <span className="text-4xl font-bold text-primary-600">
                      {profileData.name.charAt(0)}
                    </span>
                  </div>
                )}
                <h2 className="text-2xl font-bold text-primary-700 mt-4">{profileData.name}</h2>
                <p className="text-neutral-600">{profileData.specialization}</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-primary-600 mr-3" />
                  <span>{profileData.experience} experience</span>
                </div>
                
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-primary-600 mr-3" />
                  <span>{profileData.languages.join(', ')}</span>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="card p-6 mt-6">
              <h2 className="text-xl font-semibold text-primary-700 mb-4">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-neutral-700">{profileData.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary-600 mr-3" />
                  <a href={`mailto:${profileData.email}`} className="text-primary-600 hover:underline">
                    {profileData.email}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary-600 mr-3" />
                  <a href={`tel:${profileData.phone}`} className="text-primary-600 hover:underline">
                    {profileData.phone}
                  </a>
                </div>
                
                {profileData.website && (
                  <div className="flex items-center">
                    <ExternalLink className="w-5 h-5 text-primary-600 mr-3" />
                    <a href={`https://${profileData.website}`} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                      {profileData.website}
                      <ExternalLink className="w-3 h-3 inline-block ml-1" />
                    </a>
                  </div>
                )}
              </div>
            </div>
            
            {/* Working Hours */}
            <div className="card p-6 mt-6">
              <h2 className="text-xl font-semibold text-primary-700 mb-4">Working Hours</h2>
              
              <div className="space-y-2">
                {Object.entries(profileData.workingHours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="capitalize font-medium">{day}:</span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Profile Content Section */}
          <div className="md:col-span-2">
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-primary-700 mb-4">About Me</h2>
              <p className="text-neutral-700 mb-8">{profileData.about}</p>
              
              <h2 className="text-xl font-semibold text-primary-700 mb-4">Qualifications</h2>
              <div className="mb-8">
                <ul className="space-y-2">
                  {profileData.qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <h2 className="text-xl font-semibold text-primary-700 mb-4">Areas of Specialization</h2>
              <div className="mb-8 flex flex-wrap gap-2">
                {profileData.specializations.map((specialization, index) => (
                  <span 
                    key={index} 
                    className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                  >
                    {specialization}
                  </span>
                ))}
              </div>
              
              <h2 className="text-xl font-semibold text-primary-700 mb-4">Treatment Approach</h2>
              <p className="text-neutral-700 mb-4">
                I believe in a holistic approach to healthcare, focusing on treating the whole person rather than just the symptoms. My homeopathic treatments are tailored to each individual's unique constitution and health needs.
              </p>
              <p className="text-neutral-700">
                My practice combines classical homeopathy with modern clinical approaches to achieve the best outcomes for my patients. I work closely with each patient to understand their symptoms, medical history, and lifestyle factors that may be affecting their health.
              </p>
            </div>
            
            {/* Success Stories Preview */}
            <div className="card p-6 mt-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-primary-700">Success Stories</h2>
                <a href="/case-gallery" className="text-sm text-primary-600 hover:underline flex items-center">
                  View All Cases
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-40 bg-neutral-100 flex items-center justify-center">
                    <p className="text-neutral-400">Before/After Images</p>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-primary-700">Chronic Eczema Case</h3>
                    <p className="text-sm text-neutral-600">3 month treatment plan</p>
                  </div>
                </div>
                
                <div className="border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-40 bg-neutral-100 flex items-center justify-center">
                    <p className="text-neutral-400">Before/After Images</p>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-primary-700">Migraine Treatment</h3>
                    <p className="text-sm text-neutral-600">6 month follow-up</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <button className="btn btn-outline">
                  + Add New Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorProfilePage;