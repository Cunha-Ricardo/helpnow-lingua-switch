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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            California Privacy Rights Act of 2020
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            
            {/* Section 1 - Title */}
            <section>
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 1. Title</h2>
              <p>This measure shall be known, and may be cited, as the "California Privacy Rights Act of 2020."</p>
            </section>

            {/* Section 2 - Findings and Declarations */}
            <section>
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 2. Findings and Declarations</h2>
              <p className="mb-4">The people of the State of California hereby find and declare all of the following:</p>
              
              <div className="space-y-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(A) Constitutional Right to Privacy</h3>
                  <p>In 1972, California voters amended the California Constitution to include the right of privacy among the "inalienable" rights of all people. Voters acted in response to the accelerating encroachment on personal freedom and security caused by increased data collection and usage in contemporary society. The amendment established a legal and enforceable constitutional right of privacy for every Californian. Fundamental to this right of privacy is the ability of individuals to control the use, including the sale, of their personal information.</p>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(B) Legislative Privacy Mechanisms</h3>
                  <p>Since California voters approved the constitutional right of privacy, the California Legislature has adopted specific mechanisms to safeguard Californians' privacy, including the Online Privacy Protection Act, the Privacy Rights for California Minors in the Digital World Act, and Shine the Light, but consumers had no right to learn what personal information a business had collected about them and how they used it or to direct businesses not to sell the consumer's personal information.</p>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(C) California Consumer Privacy Act (CCPA)</h3>
                  <p>That changed in 2018, when more than 629,000 California voters signed petitions to qualify the California Consumer Privacy Act of 2018 for the ballot. In response to the measure's qualification, the Legislature enacted the California Consumer Privacy Act of 2018 (CCPA) into law. The CCPA gives California consumers the right to learn what information a business has collected about them, to delete their personal information, to stop businesses from selling their personal information, including using it to target them with ads that follow them as they browse the internet from one website to another, and to hold businesses accountable if they do not take reasonable steps to safeguard their personal information.</p>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(D) Protection from Weakening Legislation</h3>
                  <p>Even before the CCPA had gone into effect, the Legislature considered many bills in 2019 to amend the law, some of which would have significantly weakened it. Unless California voters take action, the hard-fought rights consumers have won could be undermined by future legislation.</p>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(E) Strengthening Privacy Rights</h3>
                  <p>Rather than diluting privacy rights, California should strengthen them over time. Many businesses collect and use consumers' personal information, sometimes without consumers' knowledge regarding the business's use and retention of their personal information. In practice, consumers are often entering into a form of contractual arrangement in which, while they do not pay money for a good or service, they exchange access to that good or service in return for access to their attention or access to their personal information.</p>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(F) Information Asymmetry</h3>
                  <p>This asymmetry of information makes it difficult for consumers to understand what they are exchanging and therefore to negotiate effectively with businesses. Unlike in other areas of the economy where consumers can comparison shop, or can understand at a glance if a good or service is expensive or affordable, it is hard for the consumer to know how much the consumers information is worth to any given business.</p>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(G) State Interest in Transparency</h3>
                  <p>The State therefore has an interest in mandating laws that will allow consumers to understand more fully how their information is being used, and for what purposes. In the same way that ingredient labels on foods help consumers shop more effectively, disclosure around data management practices will help consumers become more informed counterparties in the data economy, and promote competition.</p>
                </div>
              </div>
            </section>

            {/* Section 3 - Purpose and Intent */}
            <section>
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 3. Purpose and Intent</h2>
              <p className="mb-4">In enacting this Act, it is the purpose and intent of the people of the State of California to further protect consumers' rights, including the constitutional right of privacy. The implementation of this Act shall be guided by the following principles:</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-secondary">Consumer Rights</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Consumers should know who is collecting their personal information and that of their children, how it is being used, and to whom it is disclosed so that they have the information necessary to exercise meaningful control over businesses' use of their personal information.</li>
                    <li>Consumers should be able to control the use of their personal information, including limiting the use of their sensitive personal information.</li>
                    <li>Consumers should have access to their personal information and should be able to correct it, delete it, and take it with them from one business to another.</li>
                    <li>Consumers should be able to exercise these options through easily accessible self-serve tools.</li>
                    <li>Consumers should be able to exercise these rights without being penalized for doing so.</li>
                    <li>Consumers should be able to hold businesses accountable for failing to take reasonable precautions to protect their most sensitive personal information from hackers and security breaches.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-secondary">Responsibilities of Businesses</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Businesses should specifically and clearly inform consumers about how they collect and use personal information and how they can exercise their rights and choice.</li>
                    <li>Businesses should only collect consumers' personal information for specific, explicit, and legitimate disclosed purposes.</li>
                    <li>Businesses should collect consumers' personal information only to the extent that it is relevant and limited to what is necessary.</li>
                    <li>Businesses should provide consumers with easily accessible means to obtain their personal information, to delete it, or correct it.</li>
                    <li>Businesses should not penalize consumers for exercising these rights.</li>
                    <li>Businesses should take reasonable precautions to protect consumers' personal information from a security breach.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Consumer Rights Summary */}
            <section className="bg-primary/10 p-8 rounded-lg border border-primary/20">
              <h2 className="text-3xl font-semibold mb-4 text-primary">Your Privacy Rights Under CPRA</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Right to Know</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>What personal information is collected about you</li>
                    <li>Categories of sources of personal information</li>
                    <li>Business purposes for collecting information</li>
                    <li>Categories of third parties who receive information</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Right to Delete</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Request deletion of personal information</li>
                    <li>Direct service providers to delete information</li>
                    <li>Notify third parties to delete shared information</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Right to Opt-Out</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Opt-out of sale of personal information</li>
                    <li>Opt-out of sharing for cross-context behavioral advertising</li>
                    <li>Limit use of sensitive personal information</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Right to Correct</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Correct inaccurate personal information</li>
                    <li>Update outdated information</li>
                    <li>Ensure information accuracy</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Definitions Section */}
            <section>
              <h2 className="text-3xl font-semibold mb-4 text-primary">Key Definitions</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Personal Information</h4>
                  <p className="text-sm">Information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or household.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Sensitive Personal Information</h4>
                  <p className="text-sm">Personal information that includes social security numbers, driver's license numbers, state identification card numbers, passport numbers, account log-in information, financial account information, debit card numbers, credit card numbers, contents of mail, email, and text messages, biometric information, health information, sex life or sexual orientation information, and certain geolocation data.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Business</h4>
                  <p className="text-sm">A legal entity that collects consumers' personal information, does business in California, and meets specific thresholds including annual gross revenues over $25 million, or annually buys, sells, or shares personal information of 100,000+ consumers, or derives 50% or more of annual revenues from selling consumers' personal information.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Sale</h4>
                  <p className="text-sm">Selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a consumer's personal information by the business to a third party for monetary or other valuable consideration.</p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Contact Information for Privacy Requests</h2>
              <p className="mb-4">To exercise your privacy rights under the California Privacy Rights Act, you may contact us through the following methods:</p>
              <ul className="space-y-2">
                <li><strong>Email:</strong> privacy@helpnow.com</li>
                <li><strong>Phone:</strong> 1-800-HELP-NOW (toll-free)</li>
                <li><strong>Mail:</strong> HelpNow Privacy Office, [Company Address]</li>
                <li><strong>Online:</strong> Use our privacy request portal on our website</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">We will respond to your request within 45 days. In some cases, we may extend this period by an additional 45 days when reasonably necessary.</p>
            </section>

            {/* Effective Date */}
            <section className="text-center pt-8 border-t">
              <p className="text-sm text-muted-foreground">
                This privacy policy is effective as of January 1, 2023, in accordance with the California Privacy Rights Act of 2020.
                <br />
                Last updated: {new Date().toLocaleDateString()}
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