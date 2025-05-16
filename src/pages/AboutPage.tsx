import { Users, Leaf, Award, BookOpen, Heart, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero section */}
      <section className="py-12 mb-16 bg-primary-50 rounded-xl">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-primary-700">About CareAndCure</h1>
            <p className="text-xl text-neutral-700 mb-8">
              Our mission is to empower homeopathic practitioners and promote the effectiveness of 
              homeopathic treatments through documented success stories and patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-700">Our Story</h2>
              <p className="text-lg text-neutral-700 mb-6">
                CareAndCure was founded in 2023 by a team of homeopathic doctors and technology experts who recognized the need for a specialized platform 
                to document and showcase homeopathic treatment outcomes.
              </p>
              <p className="text-lg text-neutral-700 mb-6">
                Our founders observed that while homeopathy has helped countless patients, there was limited visibility of documented success cases 
                with before and after evidence. This gap led to the creation of CareAndCure — a platform dedicated to homeopathic practitioners.
              </p>
              <p className="text-lg text-neutral-700">
                Today, we serve practitioners across the globe, helping them build their online presence and document their successful treatment outcomes 
                with evidence-based case studies.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team discussing homeopathic treatments" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-20 py-16 bg-primary-50 rounded-xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary-700">Our Core Values</h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              The principles that guide our platform and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Natural Healing</h3>
              <p className="text-neutral-700">
                We believe in the power of natural remedies and holistic approaches to healing the body and mind without harmful side effects.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Patient-Centered Care</h3>
              <p className="text-neutral-700">
                We prioritize the unique needs of each patient, recognizing that effective treatment must be personalized and comprehensive.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Evidence-Based Practice</h3>
              <p className="text-neutral-700">
                We encourage the documentation of treatment outcomes to build a stronger evidence base for homeopathic medicine.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-success-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Professional Excellence</h3>
              <p className="text-neutral-700">
                We support the highest standards of practice, ethics, and ongoing education for homeopathic practitioners.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-warning-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-warning-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Compassionate Care</h3>
              <p className="text-neutral-700">
                We foster a community that practices medicine with empathy, understanding, and genuine concern for patient wellbeing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-error-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-error-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Global Community</h3>
              <p className="text-neutral-700">
                We connect practitioners and patients from around the world, sharing knowledge and success stories across cultures and borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary-700">Meet Our Team</h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              The passionate experts behind CareAndCure who are dedicated to advancing homeopathic healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/5453811/pexels-photo-5453811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dr. Robert Chen" 
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary-700">Dr. Robert Chen</h3>
              <p className="text-neutral-600 mb-2">Co-Founder & CEO</p>
              <p className="text-sm text-neutral-500">Homeopathic Physician with 20+ years of practice</p>
            </div>

            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dr. Lisa Martinez" 
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary-700">Dr. Lisa Martinez</h3>
              <p className="text-neutral-600 mb-2">Co-Founder & Medical Director</p>
              <p className="text-sm text-neutral-500">Specialist in Integrative Homeopathy</p>
            </div>

            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Alex Thompson" 
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary-700">Alex Thompson</h3>
              <p className="text-neutral-600 mb-2">Chief Technology Officer</p>
              <p className="text-sm text-neutral-500">Healthcare Tech Innovator</p>
            </div>

            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dr. Maya Patel" 
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary-700">Dr. Maya Patel</h3>
              <p className="text-neutral-600 mb-2">Head of Research</p>
              <p className="text-sm text-neutral-500">Research in Evidence-Based Homeopathy</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-12">
        <div className="container mx-auto px-4">
          <div className="bg-primary-600 text-white rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Growing Community</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Become part of a network dedicated to advancing homeopathic healthcare through documentation, 
              sharing of successful treatments, and professional collaboration.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/register" className="btn bg-white text-primary-700 hover:bg-primary-50">
                Join as a Practitioner
              </a>
              <a href="/contact" className="btn border-2 border-white bg-transparent hover:bg-white/10">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;