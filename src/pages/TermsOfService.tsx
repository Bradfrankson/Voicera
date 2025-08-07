import React from 'react';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none text-gray-900 leading-relaxed">
          <p className="text-sm text-gray-600 mb-8">Effective Date: January 1, 2025 | Last Updated: January 1, 2025</p>
          
          <div className="space-y-6 text-sm leading-relaxed">
            <p>
              These terms of service govern your use of Voicera AI's artificial intelligence voice agent services, website, and related technologies. By accessing our services, submitting information through our forms, booking appointments, or interacting with our AI systems, you agree to be bound by these terms. If you do not agree to these terms, please do not use our services.
            </p>

            <div className="mt-8">
              <p className="font-semibold text-gray-900 mb-3">Service Description</p>
              <p>
                Voicera AI provides artificial intelligence-powered voice agent services designed to help businesses automate communication, qualify leads, and manage appointment bookings. Our services include AI voice agents that can conduct natural conversations with your customers, automated follow-up systems via phone, SMS, and email, lead qualification and scoring capabilities, appointment scheduling and calendar management, and integration with various business tools and platforms.
              </p>
              <p className="mt-3">
                Our AI technology is powered by advanced machine learning algorithms and natural language processing systems. We utilize third-party services including Vapi for voice technology, Supabase for data management, GoHighLevel for customer relationship management, and various communication platforms to deliver comprehensive automation solutions for your business needs.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-gray-900 mb-3">User Obligations and Acceptable Use</p>
              <p>
                You must be at least 18 years old and have the legal authority to enter into this agreement. You agree to provide accurate, current, and complete information when using our services and to maintain the security of any account credentials. You are responsible for all activities that occur under your account and must notify us immediately of any unauthorized use.
              </p>
              <p className="mt-3">
                You agree not to use our services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our systems. This includes but is not limited to attempting to gain unauthorized access to our systems, interfering with other users' access to our services, transmitting viruses or malicious code, or using our services to send spam or unsolicited communications. You may not reverse engineer, decompile, or attempt to extract the source code of our AI technology or proprietary systems.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-gray-900 mb-3">Communication Consent and Terms</p>
              <p>
                By providing your contact information or using our services, you expressly consent to receive communications from Voicera AI via telephone, SMS text messaging, and email. This includes both transactional communications related to your service usage and promotional communications about our services, features, and offers. You understand that these communications may be automated and that standard message and data rates may apply to SMS communications.
              </p>
              <p className="mt-3">
                You consent to the recording of voice conversations with our AI agents for quality assurance, training, and service improvement purposes. You may opt out of promotional communications at any time by following the unsubscribe instructions provided in our messages, replying "STOP" to SMS messages, or contacting our support team. However, you may continue to receive transactional communications necessary for service delivery even after opting out of promotional messages.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-gray-900 mb-3">Booking and Appointment Terms</p>
              <p>
                When you book appointments or schedule consultations through our systems, you agree to provide accurate information and to attend scheduled appointments or provide reasonable notice of cancellation. We reserve the right to cancel or reschedule appointments with appropriate notice due to technical issues, system maintenance, or other operational requirements.
              </p>
              <p className="mt-3">
                Appointment availability is subject to our business hours and capacity. While we strive to accommodate your preferred scheduling, we cannot guarantee specific time slots will always be available. No-shows or repeated cancellations may result in restrictions on future booking privileges.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-gray-900 mb-3">Disclaimers and Limitations</p>
              <p>
                Our services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not guarantee that our AI agents will meet all your specific requirements or that our services will be uninterrupted, timely, secure, or error-free. Artificial intelligence technology has inherent limitations and may occasionally produce unexpected results or responses.
              </p>
              <p className="mt-3">
                We make no representations or warranties regarding the accuracy, reliability, or completeness of any information provided by our AI systems. You acknowledge that AI technology is continuously evolving and that our services may be updated, modified, or improved over time. We do not guarantee specific business outcomes, lead generation results, or revenue improvements from using our services.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-gray-900 mb-3">Intellectual Property Rights</p>
              <p>
                All content, technology, software, and materials provided through our services, including our AI algorithms, voice technology, user interfaces, and documentation, are owned by Voicera AI or our licensors and are protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use our services solely for their intended purpose.
              </p>
              <p className="mt-3">
                You retain ownership of any content you provide to us, but you grant us a license to use, process, and analyze such content solely for the purpose of providing our services. This includes the right to use your data to train and improve our AI systems, subject to our privacy practices and applicable law.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-gray-900 mb-3">Limitation of Liability</p>
              <p>
                To the maximum extent permitted by law, Voicera AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services. Our total liability to you for any claims arising from these terms or your use of our services shall not exceed the amount you paid us in the twelve months preceding the claim.
              </p>
              <p className="mt-3">
                Some jurisdictions do not allow the exclusion or limitation of certain damages, so these limitations may not apply to you. In such cases, our liability will be limited to the fullest extent permitted by applicable law.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-gray-900 mb-3">Indemnification</p>
              <p>
                You agree to indemnify, defend, and hold harmless Voicera AI, its officers, directors, employees, agents, and affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from your use of our services, your violation of these terms, or your violation of any third-party rights.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-gray-900 mb-3">Termination</p>
              <p>
                Either party may terminate this agreement at any time with or without cause. Upon termination, your right to use our services will cease immediately. We may suspend or terminate your access to our services if you violate these terms or engage in conduct that we determine to be harmful to our business or other users.
              </p>
              <p className="mt-3">
                Provisions of these terms that by their nature should survive termination will remain in effect after termination, including intellectual property rights, disclaimer of warranties, indemnification, and limitations of liability.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-gray-900 mb-3">Governing Law and Dispute Resolution</p>
              <p>
                These terms are governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law principles. Any disputes arising from these terms or your use of our services will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive relief in court for intellectual property violations or other urgent matters.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-gray-900 mb-3">Changes to Terms</p>
              <p>
                We reserve the right to modify these terms at any time. We will notify you of material changes by posting the updated terms on our website and indicating the effective date. Your continued use of our services after any changes constitutes your acceptance of the new terms. If you do not agree to the modified terms, you should discontinue your use of our services.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-gray-900 mb-3">Contact Information</p>
              <p>
                If you have any questions about these terms or our services, please contact us at legal@voicera.ai or by phone at (555) 123-4567. You may also write to us at our business address for any formal notices or legal matters.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                These terms constitute the entire agreement between you and Voicera AI regarding your use of our services and supersede all prior agreements and understandings. If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Legal Links */}
      <Footer />
    </div>
  );
};

export default TermsOfService;
