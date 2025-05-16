import { Link } from 'react-router-dom';
import { CheckCircle, Star, Users, Award } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Holistic Healing Through Homeopathic Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-50">
              CareAndCure provides a platform for homeopathic doctors to showcase their success stories and connect with patients seeking natural healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="btn bg-white text-primary-700 hover:bg-primary-50 focus:ring-white">
                Join as a Doctor
              </Link>
              <Link to="/case-gallery" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white">
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose CareAndCure</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our platform offers unique benefits for homeopathic practitioners to build their practice and showcase their success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card card-hover animate-slideUp p-8">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Profile</h3>
              <p className="text-neutral-600 mb-4">
                Build a comprehensive professional profile to showcase your credentials, specialization, and expertise to potential patients.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Customizable doctor profiles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Highlight your specializations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Share your professional journey</span>
                </li>
              </ul>
            </div>

            <div className="card card-hover animate-slideUp p-8" style={{animationDelay: '0.1s'}}>
              <div className="w-14 h-14 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Case Gallery</h3>
              <p className="text-neutral-600 mb-4">
                Document and showcase your successful patient cases with before and after details to demonstrate your treatment efficacy.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Before and after comparisons</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Secure image and document uploads</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Patient testimonials integration</span>
                </li>
              </ul>
            </div>

            <div className="card card-hover animate-slideUp p-8" style={{animationDelay: '0.2s'}}>
              <div className="w-14 h-14 bg-secondary-100 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-7 h-7 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Patient Management</h3>
              <p className="text-neutral-600 mb-4">
                Efficiently manage patient records, treatment plans, and follow-ups all in one secure platform designed specifically for homeopathy.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Complete patient history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Treatment tracking tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Follow-up appointment scheduling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16 bg-primary-50 rounded-xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by Homeopathic Practitioners</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Hear from doctors who have transformed their practice with our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-warning-500 fill-warning-500" />
                ))}
              </div>
              <p className="text-neutral-700 mb-6">
                "CareAndCure has transformed how I showcase my treatment successes. My patients love seeing the before and after comparisons, and it's helped me build trust with new patients."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dr. Sarah Johnson" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Dr. Sarah Johnson</h4>
                  <p className="text-sm text-neutral-500">Homeopathic Specialist, 8 years</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-warning-500 fill-warning-500" />
                ))}
              </div>
              <p className="text-neutral-700 mb-6">
                "The patient management system is intuitive and specifically designed for homeopathic practice. I can track treatments, progress, and maintain complete records efficiently."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dr. Michael Chen" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Dr. Michael Chen</h4>
                  <p className="text-sm text-neutral-500">Holistic Medicine, 12 years</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-warning-500 fill-warning-500" />
                ))}
              </div>
              <p className="text-neutral-700 mb-6">
                "I've seen a 40% increase in new patient inquiries since joining CareAndCure. The ability to showcase my successful cases with visual evidence has been game-changing."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/5207104/pexels-photo-5207104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dr. Priya Sharma" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Dr. Priya Sharma</h4>
                  <p className="text-sm text-neutral-500">Homeopathic Practitioner, 15 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Showcase Your Homeopathic Practice?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our growing community of homeopathic practitioners and start building your professional online presence today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register" className="btn bg-white text-primary-700 hover:bg-primary-50">
                Register Now
              </Link>
              <Link to="/about" className="btn border-2 border-white bg-transparent hover:bg-white/10">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;