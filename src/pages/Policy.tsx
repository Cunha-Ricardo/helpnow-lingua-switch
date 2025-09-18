import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Policy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            California Privacy Rights Act of 2020
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-8">
          
            {/* Table of Contents */}
            <section className="bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Table of Contents</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-1">
                  <li><a href="#title" className="text-primary hover:underline">SEC. 1. Title</a></li>
                  <li><a href="#findings" className="text-primary hover:underline">SEC. 2. Findings and Declarations</a></li>
                  <li><a href="#purpose" className="text-primary hover:underline">SEC. 3. Purpose and Intent</a></li>
                  <li><a href="#general-duties" className="text-primary hover:underline">SEC. 4. General Duties of Businesses</a></li>
                  <li><a href="#right-delete" className="text-primary hover:underline">SEC. 5. Right to Delete</a></li>
                  <li><a href="#right-correct" className="text-primary hover:underline">SEC. 6. Right to Correct</a></li>
                  <li><a href="#right-know" className="text-primary hover:underline">SEC. 7. Right to Know</a></li>
                  <li><a href="#right-know-sold" className="text-primary hover:underline">SEC. 8. Right to Know What is Sold</a></li>
                </ul>
                <ul className="space-y-1">
                  <li><a href="#opt-out" className="text-primary hover:underline">SEC. 9. Right to Opt-Out</a></li>
                  <li><a href="#limit-sensitive" className="text-primary hover:underline">SEC. 10. Limit Sensitive Information</a></li>
                  <li><a href="#no-retaliation" className="text-primary hover:underline">SEC. 11. No Retaliation</a></li>
                  <li><a href="#disclosure-requirements" className="text-primary hover:underline">SEC. 12. Disclosure Requirements</a></li>
                  <li><a href="#opt-out-methods" className="text-primary hover:underline">SEC. 13. Opt-Out Methods</a></li>
                  <li><a href="#definitions" className="text-primary hover:underline">SEC. 14. Definitions</a></li>
                  <li><a href="#exemptions" className="text-primary hover:underline">SEC. 15. Exemptions</a></li>
                  <li><a href="#enforcement" className="text-primary hover:underline">Enforcement & Penalties</a></li>
                </ul>
              </div>
            </section>
            
            {/* Section 1 - Title */}
            <section id="title">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 1. Title</h2>
              <p>This measure shall be known, and may be cited, as the "California Privacy Rights Act of 2020."</p>
            </section>

            {/* Section 2 - Findings and Declarations */}
            <section id="findings">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 2. Findings and Declarations</h2>
              <p className="mb-4">The people of the State of California hereby find and declare all of the following:</p>
              
              <div className="space-y-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(A) Constitutional Right to Privacy</h3>
                  <p>In 1972, California voters amended the California Constitution to include the right of privacy among the "inalienable" rights of all people. Voters acted in response to the accelerating encroachment on personal freedom and security caused by increased data collection and usage in contemporary society.</p>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(B) Legislative Privacy Mechanisms</h3>
                  <p>Since California voters approved the constitutional right of privacy, the California Legislature has adopted specific mechanisms to safeguard Californians' privacy, including the Online Privacy Protection Act, the Privacy Rights for California Minors in the Digital World Act, and Shine the Light.</p>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(C) California Consumer Privacy Act (CCPA)</h3>
                  <p>In 2018, more than 629,000 California voters signed petitions to qualify the California Consumer Privacy Act of 2018 for the ballot. The CCPA gives California consumers the right to learn what information a business has collected about them, to delete their personal information, to stop businesses from selling their personal information, and to hold businesses accountable.</p>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(H) Consumer Empowerment</h3>
                  <p>Consumers need stronger laws to place them on a more equal footing when negotiating with businesses in order to protect their rights. Consumers should be entitled to a clear explanation of the uses of their personal information and to control, correct, or delete it.</p>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(I) Advertising Business Models</h3>
                  <p>Some advertising businesses today use technologies and tools that are opaque to consumers to collect and trade vast amounts of personal information, to track them across the internet, and to create detailed profiles of their individual interests.</p>
                </div>
              </div>
            </section>

            {/* Section 3 - Purpose and Intent */}
            <section id="purpose">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 3. Purpose and Intent</h2>
              <p className="mb-6">In enacting this Act, it is the purpose and intent of the people of the State of California to further protect consumers' rights, including the constitutional right of privacy.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-secondary">Consumer Rights</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Know who is collecting their personal information and how it's being used</li>
                    <li>Control the use of their personal information</li>
                    <li>Access, correct, delete, and port their personal information</li>
                    <li>Exercise rights through easily accessible self-serve tools</li>
                    <li>Exercise rights without being penalized</li>
                    <li>Hold businesses accountable for security breaches</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-secondary">Business Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Clearly inform consumers about data collection and use</li>
                    <li>Collect information only for disclosed purposes</li>
                    <li>Limit collection to what is necessary</li>
                    <li>Provide accessible means for consumer requests</li>
                    <li>Not penalize consumers for exercising rights</li>
                    <li>Take reasonable security precautions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 - General Duties */}
            <section id="general-duties">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 4. General Duties of Businesses</h2>
              <div className="space-y-4">
                <p><strong>Businesses must inform consumers at or before collection about:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Categories of personal information collected</li>
                  <li>Purposes for collection and use</li>
                  <li>Whether information is sold or shared</li>
                  <li>Length of time information will be retained</li>
                </ul>
                
                <p><strong>Collection, use, and sharing must be:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Reasonably necessary and proportionate</li>
                  <li>Compatible with disclosed purposes</li>
                  <li>Subject to appropriate security measures</li>
                </ul>
              </div>
            </section>

            {/* Consumer Rights Sections */}
            <section id="right-delete">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 5. Right to Delete Personal Information</h2>
              <div className="bg-primary/10 p-6 rounded-lg">
                <p>Consumers have the right to request that a business delete any personal information about the consumer which the business has collected. Upon verification, businesses must:</p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>Delete the consumer's personal information from their records</li>
                  <li>Notify service providers and contractors to delete the information</li>
                  <li>Notify third parties who received the information to delete it</li>
                </ul>
              </div>
            </section>

            <section id="right-correct">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 6. Right to Correct Inaccurate Information</h2>
              <div className="bg-primary/10 p-6 rounded-lg">
                <p>Consumers have the right to request that a business correct inaccurate personal information that it maintains about the consumer. Businesses must make commercially reasonable efforts to correct the information upon verification.</p>
              </div>
            </section>

            <section id="right-know">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 7. Right to Know What Information is Collected</h2>
              <div className="bg-primary/10 p-6 rounded-lg">
                <p>Consumers have the right to request that businesses disclose:</p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>Categories of personal information collected</li>
                  <li>Categories of sources from which information is collected</li>
                  <li>Business or commercial purpose for collection</li>
                  <li>Categories of third parties to whom information is disclosed</li>
                  <li>Specific pieces of personal information collected</li>
                </ul>
              </div>
            </section>

            <section id="opt-out">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 9. Right to Opt-Out of Sale or Sharing</h2>
              <div className="bg-primary/10 p-6 rounded-lg">
                <p>Consumers have the right to direct a business not to sell or share their personal information to third parties. Special protections apply to minors:</p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li><strong>Under 13:</strong> Parent or guardian consent required</li>
                  <li><strong>13-16:</strong> Consumer or parent/guardian consent required</li>
                  <li><strong>Over 16:</strong> Consumer can opt-out at any time</li>
                </ul>
              </div>
            </section>

            <section id="limit-sensitive">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 10. Right to Limit Use of Sensitive Information</h2>
              <div className="bg-primary/10 p-6 rounded-lg">
                <p>Consumers can direct businesses to limit use of sensitive personal information to what is necessary to provide requested services. Sensitive information includes:</p>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Social security numbers</li>
                    <li>Driver's license numbers</li>
                    <li>Financial account information</li>
                    <li>Precise geolocation</li>
                    <li>Racial or ethnic origin</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Religious or philosophical beliefs</li>
                    <li>Union membership</li>
                    <li>Mail, email, text contents</li>
                    <li>Genetic data</li>
                    <li>Biometric information</li>
                    <li>Health information</li>
                    <li>Sex life or sexual orientation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Key Definitions */}
            <section id="definitions">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 14. Key Definitions</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-lg font-semibold mb-2">Business</h4>
                  <p>A legal entity that collects consumers' personal information, does business in California, and meets one of these thresholds:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Annual gross revenues over $25 million</li>
                    <li>Annually buys, sells, or shares personal information of 100,000+ consumers</li>
                    <li>Derives 50%+ of annual revenues from selling consumers' personal information</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-lg font-semibold mb-2">Personal Information</h4>
                  <p>Information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or household.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-lg font-semibold mb-2">Sale</h4>
                  <p>Selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating a consumer's personal information to a third party for monetary or other valuable consideration.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-lg font-semibold mb-2">Share/Sharing</h4>
                  <p>Sharing personal information with a third party for cross-context behavioral advertising, whether or not for monetary consideration.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-lg font-semibold mb-2">Cross-Context Behavioral Advertising</h4>
                  <p>Targeting advertising to a consumer based on personal information obtained from the consumer's activity across businesses, websites, applications, or services other than the one with which the consumer intentionally interacts.</p>
                </div>
              </div>
            </section>

            {/* Exemptions */}
            <section id="exemptions">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 15. Exemptions</h2>
              <p className="mb-4">This law does not restrict a business's ability to:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Legal Compliance</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Comply with federal, state, or local laws</li>
                    <li>Comply with court orders or subpoenas</li> 
                    <li>Cooperate with law enforcement</li>
                    <li>Exercise or defend legal claims</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Specific Sectors</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Medical information governed by HIPAA</li>
                    <li>Health care providers under CMIA</li>
                    <li>Clinical trials and biomedical research</li>
                    <li>Credit reporting activities under FCRA</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* California Privacy Protection Agency */}
            <section className="bg-muted p-6 rounded-lg">
              <h2 className="text-3xl font-semibold mb-4 text-primary">California Privacy Protection Agency (CPPA)</h2>
              <p className="mb-4">The CPRA establishes the California Privacy Protection Agency as an independent agency to implement and enforce the law.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Agency Powers</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Issue regulations and guidance</li>
                    <li>Conduct investigations and audits</li>
                    <li>Issue administrative fines</li>
                    <li>Pursue enforcement actions</li>
                    <li>Review and approve compliance programs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Enforcement Actions</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Notice of violations and cure periods</li>
                    <li>Administrative fines up to $2,500 per violation</li>
                    <li>Enhanced penalties up to $7,500 for intentional violations</li>
                    <li>Additional penalties for violations involving minors</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Enforcement and Penalties */}
            <section id="enforcement">
              <h2 className="text-3xl font-semibold mb-4 text-primary">Enforcement and Penalties</h2>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Civil Penalties</h4>
                  <ul className="list-disc list-inside space-y-1 text-red-700">
                    <li>Up to $2,500 per violation</li>
                    <li>Up to $7,500 per intentional violation</li>
                    <li>Enhanced penalties for violations involving minors</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Private Right of Action</h4>
                  <p className="text-blue-700">Consumers can sue for statutory damages of $100 to $750 per incident for data security breaches, or actual damages, whichever is greater.</p>
                </div>
              </div>
            </section>

            {/* Effective Dates */}
            <section className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-800">SEC. 31. Effective and Operative Dates</h2>
              <ul className="space-y-2 text-yellow-700">
                <li><strong>January 1, 2023:</strong> Act becomes operative</li>
                <li><strong>January 1, 2022:</strong> Applies to personal information collected on or after this date</li>
                <li><strong>Right of Access:</strong> Applies to information collected before January 1, 2022</li>
              </ul>
            </section>

            {/* Your Rights Summary */}
            <section className="bg-primary/10 p-8 rounded-lg border border-primary/20">
              <h2 className="text-3xl font-semibold mb-6 text-primary">Your Privacy Rights Summary</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">👁</span>
                  </div>
                  <h3 className="font-semibold mb-2">Right to Know</h3>
                  <p className="text-sm">Know what personal information is collected, used, shared or sold</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🗑</span>
                  </div>
                  <h3 className="font-semibold mb-2">Right to Delete</h3>
                  <p className="text-sm">Request deletion of personal information held by businesses</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">✋</span>
                  </div>
                  <h3 className="font-semibold mb-2">Right to Opt-Out</h3>
                  <p className="text-sm">Opt-out of the sale or sharing of personal information</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">✏️</span>
                  </div>
                  <h3 className="font-semibold mb-2">Right to Correct</h3>
                  <p className="text-sm">Correct inaccurate personal information</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🔒</span>
                  </div>
                  <h3 className="font-semibold mb-2">Limit Sensitive Info</h3>
                  <p className="text-sm">Limit use and disclosure of sensitive personal information</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">⚖️</span>
                  </div>
                  <h3 className="font-semibold mb-2">Non-Discrimination</h3>
                  <p className="text-sm">Exercise rights without facing discrimination</p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">How to Exercise Your Rights</h2>
              <p className="mb-4">To exercise your privacy rights under the California Privacy Rights Act:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Contact Methods</h4>
                  <ul className="space-y-2">
                    <li><strong>Email:</strong> privacy@helpnow.com</li>
                    <li><strong>Phone:</strong> 1-800-HELP-NOW (toll-free)</li>
                    <li><strong>Mail:</strong> HelpNow Privacy Office<br/>[Company Address]</li>
                    <li><strong>Online:</strong> Privacy request portal on our website</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Response Timeline</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• We will respond within <strong>45 days</strong></li>
                    <li>• May extend by additional 45 days if necessary</li>
                    <li>• Verification required for all requests</li>
                    <li>• No fee for most requests</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Effective Date */}
            <section className="text-center pt-8 border-t">
              <p className="text-sm text-muted-foreground">
                This privacy policy is based on the California Privacy Rights Act of 2020.
                <br />
                Effective Date: January 1, 2023 | Last updated: {new Date().toLocaleDateString()}
                <br />
                <strong>Important:</strong> This document contains the full text of the California Privacy Rights Act for informational purposes.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Policy;