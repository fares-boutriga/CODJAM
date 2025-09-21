import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from '@/components/ui/dropdown-menu';
import { Menu, X, Search, Globe, ChevronDown, User } from 'lucide-react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-  space-x-3">
            <img src="/lovable-uploads/81fed320-7eda-419c-a39c-42c56574bd1a.png" alt="CODJAM" className="h-10 w-auto lg:h-12" />
            <span className="text-2xl font-bold text-codjam-navy-500 font-inter">CODJAM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Expertise Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-codjam-navy-600 hover:text-codjam-teal-500 font-medium flex items-center gap-1">
                  Expertise
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-96 bg-white border border-gray-300 shadow-lg">
                <div className="grid grid-cols-2 gap-4 p-2">
                  <div>
                    <DropdownMenuLabel className="text-codjam-navy-700 px-2">AI Data Hub</DropdownMenuLabel>
                    <div className="space-y-1">
                      <DropdownMenuItem asChild>
                        <Link to="#data-annotation" className="text-codjam-navy-600 hover:text-codjam-teal-500">Data Annotation</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/collecte-de-donnees" className="text-codjam-navy-600 hover:text-codjam-teal-500">Data Collection</Link>
                      </DropdownMenuItem>
                      <DropdownMenuLabel className="text-codjam-navy-700 px-2">CX Management</DropdownMenuLabel>

                      <DropdownMenuItem asChild>
                      <Link to="#user-testing" className="text-codjam-navy-600 hover:text-codjam-teal-500">User Testing</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                      <Link to="#surveys" className="text-codjam-navy-600 hover:text-codjam-teal-500">Survey</Link>
                      </DropdownMenuItem>
                    </div>
                  </div>
                  <div>
                    <DropdownMenuLabel className="text-codjam-navy-700 px-2">Advanced AI Technologies</DropdownMenuLabel>
                    <div className="space-y-1">
                      <DropdownMenuItem asChild>
                      <Link to="#user-testing" className="text-codjam-navy-600 hover:text-codjam-teal-500">LLM & RLHF AI training</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                      <Link to="#surveys" className="text-codjam-navy-600 hover:text-codjam-teal-500">Generative AI & RLHF</Link>
                      </DropdownMenuItem>
                        <div className="my-4 border-t border-gray-300"></div>
                      <DropdownMenuItem asChild>
                  <Link to="#trust-safety" className="text-codjam-navy-600 hover:text-codjam-teal-500"><strong>Trust & Safety </strong></Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                  <Link to="#datasets" className="text-codjam-navy-600 hover:text-codjam-teal-500"><strong>AI agents</strong></Link>
                      </DropdownMenuItem>
                      
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* AI Agents - Standalone */}


            {/* Knowledge Center Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-codjam-navy-600 hover:text-codjam-teal-500 font-medium flex items-center gap-1">
                  Knowledge Center
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-96 bg-white border border-gray-300 shadow-lg">
                <div className="grid grid-cols-2 gap-4 p-2">
                  <div>
                    <DropdownMenuLabel className="text-codjam-navy-700 px-2">Core Concepts</DropdownMenuLabel>
                    <div className="space-y-1">
                      <DropdownMenuItem asChild>
                        <Link to="#high-quality-data" className="text-codjam-navy-600 hover:text-codjam-teal-500">High Quality Data</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="#nlp" className="text-codjam-navy-600 hover:text-codjam-teal-500">NLP</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="#generative-ai-concepts" className="text-codjam-navy-600 hover:text-codjam-teal-500">Generative AI</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="#computer-vision" className="text-codjam-navy-600 hover:text-codjam-teal-500">Computer Vision</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="#multimodal-ai" className="text-codjam-navy-600 hover:text-codjam-teal-500">Multimodal AI</Link>
                      </DropdownMenuItem>
                    </div>
                  </div>
                  <div>
                    <DropdownMenuLabel className="text-codjam-navy-700 px-2">Resources</DropdownMenuLabel>
                    <div className="space-y-1">
                      <DropdownMenuItem asChild>
                        <Link to="#training" className="text-codjam-navy-600 hover:text-codjam-teal-500">Training</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="#blog" className="text-codjam-navy-600 hover:text-codjam-teal-500">Blog</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="#case-studies" className="text-codjam-navy-600 hover:text-codjam-teal-500">Case Studies</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="#sponsored-datasets" className="text-codjam-navy-600 hover:text-codjam-teal-500">Sponsored Datasets</Link>
                      </DropdownMenuItem>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-codjam-navy-600 hover:text-codjam-teal-500 font-medium flex items-center gap-1">
                  Company
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white border border-gray-300 shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="#about" className="text-codjam-navy-600 hover:text-codjam-teal-500">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="#news" className="text-codjam-navy-600 hover:text-codjam-teal-500">News</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="#partners" className="text-codjam-navy-600 hover:text-codjam-teal-500">Partners</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="#quality" className="text-codjam-navy-600 hover:text-codjam-teal-500">Quality</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Standalone Links */}
            <Link to="#competition" className="text-codjam-navy-600 hover:text-codjam-teal-500 font-medium transition-colors duration-200 px-3 py-2">
              Competition
            </Link>
            <Link to="#talent" className="text-codjam-navy-600 hover:text-codjam-teal-500 font-medium transition-colors duration-200 px-3 py-2">
              Join Our Talent
            </Link>
            <Link to="#contact" className="text-codjam-navy-600 hover:text-codjam-teal-500 font-medium transition-colors duration-200 px-3 py-2">
              Contact Us
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-codjam-navy-600 hover:text-codjam-teal-500">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-codjam-navy-600 hover:text-codjam-teal-500">
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-codjam-navy-600 hover:text-codjam-teal-500">
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden text-codjam-navy-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="py-4">
              {/* Mobile menu items */}
              <div className="space-y-1">
                <div className="px-4 py-2 text-sm font-semibold text-codjam-navy-700">Expertise</div>
                <Link to="#data-annotation" className="block px-6 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>Data Annotation</Link>
                <Link to="/collecte-de-donnees" className="block px-6 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>Data Collection</Link>
                <Link to="#trust-safety" className="block px-6 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>Trust & Safety</Link>
                <Link to="#user-testing" className="block px-6 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>User Testing</Link>
                <Link to="#surveys" className="block px-6 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>Surveys</Link>
                <Link to="#datasets" className="block px-6 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>Off-the-shelf Datasets</Link>
                
                <div className="px-4 py-2 text-sm font-semibold text-codjam-navy-700 mt-4">AI Agents & Advanced Tech</div>
                <Link to="#ai-agents" className="block px-6 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>AI Agents</Link>
                <Link to="#llm-rlhf" className="block px-6 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>LLM & RLHF</Link>
                <Link to="#generative-ai" className="block px-6 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>Generative AI & RLHF</Link>
                
                <div className="px-4 py-2 text-sm font-semibold text-codjam-navy-700 mt-4">Knowledge Center</div>
                <Link to="#high-quality-data" className="block px-6 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>High Quality Data</Link>
                <Link to="#nlp" className="block px-6 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>NLP</Link>
                <Link to="#computer-vision" className="block px-6 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>Computer Vision</Link>
                <Link to="#blog" className="block px-6 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                <Link to="#case-studies" className="block px-6 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
                
                <div className="px-4 py-2 text-sm font-semibold text-codjam-navy-700 mt-4">Company</div>
                <Link to="#about" className="block px-6 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                <Link to="#news" className="block px-6 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>News</Link>
                <Link to="#partners" className="block px-6 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>Partners</Link>
                <Link to="#quality" className="block px-6 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>Quality</Link>
                
                <div className="border-t border-gray-200 mt-4 pt-4">
                  <Link to="#competition" className="block px-4 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>Competition</Link>
                  <Link to="#talent" className="block px-4 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>Join Our Talent</Link>
                  <Link to="#contact" className="block px-4 py-2 text-codjam-navy-600 hover:text-codjam-teal-500 hover:bg-codjam-teal-50" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                </div>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;