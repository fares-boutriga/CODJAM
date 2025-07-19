import { Button } from '@/components/ui/button';
const Footer = () => {
  const footerData = {
    // Row 1
    row1: {
      datasets: {
        title: "Off-the-Shelf Datasets",
        links: ["All Categories Datasets", "LLM Datasets", "Computer Vision Datasets", "Automatic Speech Recognition", "Text-to-Speech Synthesis Datasets", "Pronunciation Dictionary", "NLU Datasets", "OCR Datasets"]
      },
      collection: {
        title: "Data Collection",
        links: ["Text Data Collection", "Audio Data Collection", "Image Data Collection", "Video Data Collection", "CX Management", "User Testing", "Survey"]
      },
      annotation: {
        title: "Data Annotation",
        links: ["Optical Character Recognition (OCR) Transcription", "Automatic Speech Recognition", "Text-to-Speech Synthesis", "Machine Translation Post-Editing", "Search Engine Results Page Evaluation / Content Moderation", "Ads Evaluation", "Sentiment / Intent Analysis", "Text Classification / Text Auto-Correction"]
      },
      vision: {
        title: "Computer Vision",
        links: ["3D Point Cloud Data", "Street View Data", "Identity Recognition Data", "Behavior Recognition Data", "Multimodal Data"]
      },
      resources: {
        title: "Case Studies",
        links: ["Blog", "Press Room", "AI Glossary", "Join Our Talent Network", "FAQ"]
      },
      company: {
        title: "About Us",
        links: ["Contact", "Sponsored Datasets", "Partners", "Investor Relations", "Careers"]
      },
      codjam: {
        title: "CODJAM AI",
        links: []
      }
    }
  };
  return <footer className="bg-codjam-navy-500 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Grid - 10 Rows × 8 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-x-6 gap-y-3 mb-12">
          {/* Row 1: Headers */}
          <div className="lg:col-span-1 flex items-center space-x-3">
            <img src="/lovable-uploads/81fed320-7eda-419c-a39c-42c56574bd1a.png" alt="CODJAM" className="h-8 w-auto" />
            <span className="text-xl font-bold text-white">CODJAM</span>
          </div>
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-white text-sm border-b border-gray-600 pb-2">Off-the-Shelf Datasets</h3>
          </div>
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-white text-sm border-b border-gray-600 pb-2">Data Collection</h3>
          </div>
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-white text-sm border-b border-gray-600 pb-2">Data Annotation</h3>
          </div>
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-white text-sm border-b border-gray-600 pb-2">Computer Vision</h3>
          </div>
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-white text-sm border-b border-gray-600 pb-2">Case Studies</h3>
          </div>
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-white text-sm border-b border-gray-600 pb-2">About Us</h3>
          </div>
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-white text-sm border-b border-gray-600 pb-2">CODJAM AI</h3>
          </div>

          {/* Row 2 */}
          
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">All Categories Datasets</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Text Data Collection</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Optical Character Recognition (OCR) Transcription</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">3D Point Cloud Data</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Blog</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Contact</a>
          </div>
          <div className="lg:col-span-1"></div>

          {/* Row 3 */}
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">LLM Datasets</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Audio Data Collection</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Automatic Speech Recognition</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Street View Data</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Press Room</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Sponsored Datasets</a>
          </div>
          <div className="lg:col-span-1"></div>

          {/* Row 4 */}
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Computer Vision Datasets</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Image Data Collection</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Text-to-Speech Synthesis</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Identity Recognition Data</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">AI Glossary</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Partners</a>
          </div>
          <div className="lg:col-span-1"></div>

          {/* Row 5 */}
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Automatic Speech Recognition</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Video Data Collection</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Machine Translation Post-Editing</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Behavior Recognition Data</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Join Our Talent Network</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Investor Relations</a>
          </div>
          <div className="lg:col-span-1"></div>

          {/* Row 6 */}
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Text-to-Speech Synthesis Datasets</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">CX Management</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Search Engine Results Page Evaluation / Content Moderation</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Multimodal Data</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">FAQ</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Careers</a>
          </div>
          <div className="lg:col-span-1"></div>

          {/* Row 7 */}
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Pronunciation Dictionary</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">User Testing</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Ads Evaluation</a>
          </div>
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-1"></div>

          {/* Row 8 */}
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">NLU Datasets</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Survey</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Sentiment / Intent Analysis</a>
          </div>
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-1"></div>

          {/* Row 9 */}
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">OCR Datasets</a>
          </div>
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-1">
            <a href="#" className="block text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Text Classification / Text Auto-Correction</a>
          </div>
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-1"></div>

          {/* Row 10: Bottom Navigation + Social */}
          <div className="lg:col-span-1">
            <span className="text-xs text-gray-300">© 2024 Appen Limited. All rights reserved.</span>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Legal</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Privacy Statement</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Manage My Data</a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="text-xs text-gray-300 hover:text-codjam-teal-400 transition-colors duration-200">Cookies Settings</a>
          </div>
          <div className="lg:col-span-1">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-codjam-teal-500 transition-all duration-200 p-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Button>
          </div>
          <div className="lg:col-span-1">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-codjam-teal-500 transition-all duration-200 p-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Button>
          </div>
          <div className="lg:col-span-1">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-codjam-teal-500 transition-all duration-200 p-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </Button>
          </div>
        </div>

      </div>
    </footer>;
};
export default Footer;