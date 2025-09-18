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
                  <li><a href="#opt-out" className="text-primary hover:underline">SEC. 9. Right to Opt-Out</a></li>
                  <li><a href="#limit-sensitive" className="text-primary hover:underline">SEC. 10. Limit Sensitive Information</a></li>
                  <li><a href="#no-retaliation" className="text-primary hover:underline">SEC. 11. No Retaliation</a></li>
                  <li><a href="#disclosure-requirements" className="text-primary hover:underline">SEC. 12. Disclosure Requirements</a></li>
                </ul>
                <ul className="space-y-1">
                  <li><a href="#opt-out-methods" className="text-primary hover:underline">SEC. 13. Opt-Out Methods</a></li>
                  <li><a href="#definitions" className="text-primary hover:underline">SEC. 14. Definitions</a></li>
                  <li><a href="#exemptions" className="text-primary hover:underline">SEC. 15. Exemptions</a></li>
                  <li><a href="#security-breaches" className="text-primary hover:underline">SEC. 16. Security Breaches</a></li>
                  <li><a href="#enforcement" className="text-primary hover:underline">SEC. 17. Administrative Enforcement</a></li>
                  <li><a href="#consumer-fund" className="text-primary hover:underline">SEC. 18. Consumer Privacy Fund</a></li>
                  <li><a href="#cppa" className="text-primary hover:underline">SEC. 24. California Privacy Protection Agency</a></li>
                  <li><a href="#effective-dates" className="text-primary hover:underline">SEC. 31. Effective Dates</a></li>
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
                  <h3 className="text-xl font-semibold mb-3">(D) Legislative Amendments</h3>
                  <p>Even before the CCPA had gone into effect, the Legislature considered many bills in 2019 to amend the law, some of which would have significantly weakened it. Unless California voters take action, the hard-fought rights consumers have won could be undermined by future legislation.</p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(E) Strengthening Privacy Rights</h3>
                  <p>Rather than diluting privacy rights, California should strengthen them over time. Many businesses collect and use consumers' personal information, sometimes without consumers' knowledge regarding the business's use and retention of their personal information. In practice, consumers are often entering into a form of contractual arrangement in which, while they do not pay money for a good or service, they exchange access to that good or service in return for access to their attention or access to their personal information.</p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(F) Information Asymmetry</h3>
                  <p>This asymmetry of information makes it difficult for consumers to understand what they are exchanging and therefore to negotiate effectively with businesses. Unlike in other areas of the economy where consumers can comparison shop, or can understand at a glance if a good or service is expensive or affordable, it is hard for the consumer to know how much the consumers information is worth to any given business, when data use practices vary so widely between businesses.</p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(G) State Interest in Disclosure</h3>
                  <p>The State therefore has an interest in mandating laws that will allow consumers to understand more fully how their information is being used, and for what purposes. In the same way that ingredient labels on foods help consumers shop more effectively, disclosure around data management practices will help consumers become more informed counterparties in the data economy, and promote competition.</p>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(H) Consumer Empowerment</h3>
                  <p>Consumers need stronger laws to place them on a more equal footing when negotiating with businesses in order to protect their rights. Consumers should be entitled to a clear explanation of the uses of their personal information, including how it is used for advertising, and to control, correct, or delete it, including by allowing consumers to limit businesses' use of their sensitive personal information to help guard against identity theft, to opt-out of the sale and sharing of their personal information, and to request that businesses correct inaccurate information about them.</p>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(I) Advertising Business Models</h3>
                  <p>California is the world leader in many new technologies that have reshaped our society. The world today is unimaginable without the internet, one of the most momentous inventions in human history, and the new services and businesses that arose on top of it, many of which were invented here in California. One of the most successful business models for the internet has been services that rely on advertising to make money as opposed to charging consumers a fee. However, some advertising businesses today use technologies and tools that are opaque to consumers to collect and trade vast amounts of personal information, to track them across the internet, and to create detailed profiles of their individual interests.</p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(J) Children's Vulnerability</h3>
                  <p>Children are particularly vulnerable from a negotiating perspective with respect to their privacy rights. Parents should be able to control what information is collected and sold or shared about their young children and should be given the right to demand that companies erase information collected about their children.</p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(K) Data Security Accountability</h3>
                  <p>Business should also be held directly accountable to consumers for data security breaches and notify consumers when their most sensitive information has been compromised.</p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(L) Independent Watchdog</h3>
                  <p>An independent watchdog whose mission is to protect consumer privacy should ensure that businesses and consumers are well-informed about their rights and obligations and should vigorously enforce the law against businesses that violate consumers' privacy rights.</p>
                </div>
              </div>
            </section>

            {/* Section 3 - Purpose and Intent */}
            <section id="purpose">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 3. Purpose and Intent</h2>
              <p className="mb-6">In enacting this Act, it is the purpose and intent of the people of the State of California to further protect consumers' rights, including the constitutional right of privacy. The implementation of this Act shall be guided by the following principles:</p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-secondary">(A) Consumer Rights</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <p><strong>(1)</strong> Consumers should know who is collecting their personal information and that of their children, how it is being used, and to whom it is disclosed so that they have the information necessary to exercise meaningful control over businesses' use of their personal information and that of their children.</p>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <p><strong>(2)</strong> Consumers should be able to control the use of their personal information, including limiting the use of their sensitive personal information, the unauthorized use or disclosure of which creates a heightened risk of harm to the consumer, and they should have meaningful options over how it is collected, used, and disclosed.</p>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <p><strong>(3)</strong> Consumers should have access to their personal information and should be able to correct it, delete it, and take it with them from one business to another.</p>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <p><strong>(4)</strong> Consumers or their authorized agents should be able to exercise these options through easily accessible self-serve tools.</p>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <p><strong>(5)</strong> Consumers should be able to exercise these rights without being penalized for doing so.</p>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <p><strong>(6)</strong> Consumers should be able to hold businesses accountable for failing to take reasonable precautions to protect their most sensitive personal information from hackers and security breaches.</p>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <p><strong>(7)</strong> Consumers should benefit from businesses' use of their personal information.</p>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <p><strong>(8)</strong> The privacy interests of employees and independent contractors should also be protected, taking into account the differences in the relationship between employees or independent contractors and businesses, as compared to the relationship between consumers and businesses. In addition, this law is not intended to interfere with the right to organize and collective bargaining under the National Labor Relations Act. It is the purpose and intent of the Act to extend the exemptions in this title for employee and business to business communications until January 1, 2023.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-secondary">(B) Responsibilities of Businesses</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                      <p><strong>(1)</strong> Businesses should specifically and clearly inform consumers about how they collect and use personal information and how they can exercise their rights and choice.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                      <p><strong>(2)</strong> Businesses should only collect consumers' personal information for specific, explicit, and legitimate disclosed purposes, and should not further collect, use, or disclose consumers' personal information for reasons incompatible with those purposes.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                      <p><strong>(3)</strong> Businesses should collect consumers' personal information only to the extent that it is relevant and limited to what is necessary in relation to the purposes for which it is being collected, used, and shared.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                      <p><strong>(4)</strong> Businesses should provide consumers or their authorized agents with easily accessible means to allow consumers and their children to obtain their personal information, to delete it, or correct it, and to opt‐out of its sale and the sharing across business platforms, services, businesses and devices, and to limit the use of their sensitive personal information.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                      <p><strong>(5)</strong> Businesses should not penalize consumers for exercising these rights.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                      <p><strong>(6)</strong> Businesses should take reasonable precautions to protect consumers' personal information from a security breach.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                      <p><strong>(7)</strong> Businesses should be held accountable when they violate consumers' privacy rights, and the penalties should be higher when the violation affects children.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-secondary">(C) Implementation of the Law</h3>
                  <div className="space-y-4">
                    <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                      <p><strong>(1)</strong> The rights of consumers and the responsibilities of businesses should be implemented with the goal of strengthening consumer privacy, while giving attention to the impact on business and innovation. Consumer privacy and the development of beneficial new products and services are not necessarily incompatible goals. Strong consumer privacy rights create incentives to innovate and develop new products that are privacy protective.</p>
                    </div>
                    <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                      <p><strong>(2)</strong> Businesses and consumers should be provided with clear guidance about their responsibilities and rights.</p>
                    </div>
                    <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                      <p><strong>(3)</strong> The law should place the consumer in a position to knowingly and freely negotiate with a business over the business' use of the consumer's personal information.</p>
                    </div>
                    <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                      <p><strong>(4)</strong> The law should adjust to technological changes, help consumers exercise their rights, and assist businesses with compliance, with the continuing goal of strengthening consumer privacy.</p>
                    </div>
                    <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                      <p><strong>(5)</strong> The law should enable pro‐consumer new products and services and promote efficiency of implementation for business, provided that the amendments do not compromise or weaken consumer privacy.</p>
                    </div>
                    <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                      <p><strong>(6)</strong> The law should be amended, if necessary, to improve its operation, provided that the amendments do not compromise or weaken consumer privacy, while giving attention to the impact on business and innovation.</p>
                    </div>
                    <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                      <p><strong>(7)</strong> Businesses should be held accountable for violating the law through vigorous administrative and civil enforcement.</p>
                    </div>
                    <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                      <p><strong>(8)</strong> To the extent it advances consumer privacy and business compliance, the law should be compatible with privacy laws in other jurisdictions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 - General Duties */}
            <section id="general-duties">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 4. General Duties of Businesses that Collect Personal Information</h2>
              
              <div className="space-y-6">
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(a) Information Required at Point of Collection</h3>
                  <p className="mb-4">A business that controls the collection of a consumer's personal information shall, at or before the point of collection, inform consumers of the following:</p>
                  
                  <div className="space-y-4 ml-4">
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>(1)</strong> The categories of personal information to be collected and the purposes for which the categories of personal information are collected or used and whether that information is sold or shared. A business shall not collect additional categories of personal information or use personal information collected for additional purposes that are incompatible with the disclosed purpose for which the personal information was collected, without providing the consumer with notice consistent with this section.</p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>(2)</strong> If the business collects sensitive personal information, the categories of sensitive personal information to be collected and the purposes for which the categories of sensitive personal information are collected or used and whether such information is sold or shared. A business shall not collect additional categories of sensitive personal information or use sensitive personal information collected for additional purposes that are incompatible with the disclosed purpose for which the sensitive personal information was collected, without providing the consumer with notice consistent with this section.</p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>(3)</strong> The length of time the business intends to retain each category of personal information, including sensitive personal information, or if that is not possible, the criteria used to determine such period, provided that a business shall not retain a consumer's personal information or sensitive personal information for each disclosed purpose for which the personal information was collected for longer than is reasonably necessary for that disclosed purpose.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(c) Reasonably Necessary and Proportionate</h3>
                  <p>A business's collection, use, retention, and sharing of a consumer's personal information shall be reasonably necessary and proportionate to achieve the purposes for which the personal information was collected or processed, or for another disclosed purpose that is compatible with the context in which the personal information was collected, and not further processed in a manner that is incompatible with those purposes.</p>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">(e) Security Requirements</h3>
                  <p>A business that collects a consumer's personal information shall implement reasonable security procedures and practices appropriate to the nature of the personal information to protect the personal information from unauthorized or illegal access, destruction, use, modification, or disclosure in accordance with Section 1798.81.5.</p>
                </div>
              </div>
            </section>

            {/* Consumer Rights Sections */}
            <section id="right-delete">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 5. Consumers' Right to Delete Personal Information</h2>
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-800">Right to Request Deletion</h3>
                  <p>A consumer shall have the right to request that a business delete any personal information about the consumer which the business has collected from the consumer.</p>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Business Obligations Upon Deletion Request</h3>
                  <p>A business that receives a verifiable consumer request from a consumer to delete the consumer's personal information shall:</p>
                  <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                    <li>Delete the consumer's personal information from its records</li>
                    <li>Notify any service providers or contractors to delete the consumer's personal information from their records</li>
                    <li>Notify all third parties to whom the business has sold or shared such personal information, to delete the consumer's personal information, unless this proves impossible or involves disproportionate effort</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-800">Exceptions to Deletion</h3>
                  <p>A business shall not be required to comply with a consumer's request to delete if it is reasonably necessary to maintain the consumer's personal information in order to:</p>
                  <ul className="list-disc list-inside mt-3 space-y-1 ml-4 text-sm">
                    <li>Complete the transaction for which the personal information was collected</li>
                    <li>Help to ensure security and integrity</li>
                    <li>Debug to identify and repair errors</li>
                    <li>Exercise free speech or ensure another consumer's right of free speech</li>
                    <li>Comply with the California Electronic Communications Privacy Act</li>
                    <li>Engage in public or peer reviewed scientific, historical, or statistical research</li>
                    <li>Enable solely internal uses reasonably aligned with consumer expectations</li>
                    <li>Comply with a legal obligation</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="right-correct">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 6. Consumers' Right to Correct Inaccurate Personal Information</h2>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Right to Request Correction</h3>
                <p className="mb-4">A consumer shall have the right to request a business that maintains inaccurate personal information about the consumer correct such inaccurate personal information, taking into account the nature of the personal information and the purposes of the processing of the personal information.</p>
                
                <h4 className="font-semibold mb-2">Business Obligations</h4>
                <p>A business that receives a verifiable consumer request to correct inaccurate personal information shall use commercially reasonable efforts to correct the inaccurate personal information, as directed by the consumer.</p>
              </div>
            </section>

            <section id="right-know">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 7. Consumers' Right to Know What Personal Information is Being Collected</h2>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Right to Access Information</h3>
                <p>A consumer shall have the right to request that a business that collects personal information about the consumer disclose to the consumer the following:</p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>The categories of personal information it has collected about that consumer</li>
                  <li>The categories of sources from which the personal information is collected</li>
                  <li>The business or commercial purpose for collecting, selling, or sharing personal information</li>
                  <li>The categories of third parties to whom the business discloses personal information</li>
                  <li>The specific pieces of personal information it has collected about that consumer</li>
                </ul>
              </div>
            </section>

            <section id="right-know-sold">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 8. Consumers' Right to Know What Personal Information is Sold or Shared and to Whom</h2>
              <div className="bg-primary/10 p-6 rounded-lg">
                <p>A consumer shall have the right to request that a business that sells or shares the consumer's personal information, or that discloses it for a business purpose, disclose to that consumer:</p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>The categories of personal information that the business collected about the consumer</li>
                  <li>The categories of personal information that the business sold or shared about the consumer and the categories of third parties to whom the personal information was sold or shared</li>
                  <li>The categories of personal information that the business disclosed about the consumer for a business purpose and the categories of persons to whom it was disclosed</li>
                </ul>
              </div>
            </section>

            <section id="opt-out">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 9. Consumers' Right to Opt Out of Sale or Sharing of Personal Information</h2>
              <div className="space-y-6">
                <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-orange-800">Right to Opt-Out</h3>
                  <p>A consumer shall have the right, at any time, to direct a business that sells or shares personal information about the consumer to third parties not to sell or share the consumer's personal information. This right may be referred to as the right to opt‐out of sale or sharing.</p>
                </div>

                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-800">Special Protections for Minors</h3>
                  <p className="mb-4">A business shall not sell or share the personal information of consumers if the business has actual knowledge that the consumer is less than 16 years of age, unless:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Ages 13-16:</strong> The consumer, or the consumer's parent or guardian, has affirmatively authorized the sale or sharing</li>
                    <li><strong>Under 13:</strong> The consumer's parent or guardian has affirmatively authorized the sale or sharing</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="limit-sensitive">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 10. Consumers' Right to Limit Use and Disclosure of Sensitive Personal Information</h2>
              <div className="space-y-6">
                <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">Right to Limit Use</h3>
                  <p>A consumer shall have the right, at any time, to direct a business that collects sensitive personal information about the consumer to limit its use of the consumer's sensitive personal information to that use which is necessary to perform the services or provide the goods reasonably expected by an average consumer who requests such goods or services.</p>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Categories of Sensitive Personal Information</h3>
                  <p className="mb-4">Sensitive personal information includes:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Social security, driver's license, or passport numbers</li>
                      <li>Account log-in, financial account information with access codes</li>
                      <li>Precise geolocation</li>
                      <li>Racial or ethnic origin, religious or philosophical beliefs</li>
                      <li>Union membership</li>
                      <li>Mail, email, and text message contents</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Genetic data</li>
                      <li>Biometric information for identification purposes</li>
                      <li>Health information</li>
                      <li>Information concerning sex life or sexual orientation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="no-retaliation">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 11. Consumers' Right of No Retaliation Following Opt Out or Exercise of Other Rights</h2>
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">Non-Discrimination</h3>
                  <p className="mb-4">A business shall not discriminate against a consumer because the consumer exercised any of the consumer's rights under this title, including, but not limited to, by:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Denying goods or services to the consumer</li>
                    <li>Charging different prices or rates for goods or services</li>
                    <li>Providing a different level or quality of goods or services</li>
                    <li>Suggesting that the consumer will receive different treatment</li>
                    <li>Retaliating against employees, job applicants, or independent contractors</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">Financial Incentives</h3>
                  <p>A business may offer financial incentives, including payments to consumers as compensation, for the collection of personal information, the sale or sharing of personal information, or the retention of personal information. A business may also offer a different price, rate, level, or quality of goods or services to the consumer if that price or difference is reasonably related to the value provided to the business by the consumer's data.</p>
                </div>
              </div>
            </section>

            <section id="disclosure-requirements">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 12. Notice, Disclosure, Correction, and Deletion Requirements</h2>
              <div className="space-y-6">
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Method Requirements</h3>
                  <p className="mb-4">In order to comply with consumer rights, a business shall provide:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Two or more designated methods for submitting requests, including at minimum a toll-free telephone number</li>
                    <li>If the business maintains a website, make the website available for submitting requests</li>
                    <li>Response within 45 days of receiving a verifiable consumer request (may be extended by additional 45 days when reasonably necessary)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-800">Privacy Policy Requirements</h3>
                  <p>Businesses must disclose in their online privacy policy:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Description of consumer rights and methods for submitting requests</li>
                    <li>Categories of personal information collected in the preceding 12 months</li>
                    <li>Categories of sources from which personal information is collected</li>
                    <li>Business or commercial purpose for collecting or selling personal information</li>
                    <li>Categories of third parties to whom business discloses personal information</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="opt-out-methods">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 13. Methods of Limiting Sale, Sharing, and Use of Personal Information</h2>
              <div className="space-y-6">
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Required Links</h3>
                  <p className="mb-4">A business that sells or shares consumers' personal information or uses sensitive personal information shall provide:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>A clear and conspicuous link titled <strong>"Do Not Sell or Share My Personal Information"</strong></li>
                    <li>A clear and conspicuous link titled <strong>"Limit the Use of My Sensitive Personal Information"</strong></li>
                    <li>Or utilize a single, clearly labeled link that allows consumers to exercise both options</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">Opt-Out Preference Signals</h3>
                  <p>A business may comply with opt-out requirements by honoring opt-out preference signals sent by a platform, technology, or mechanism, based on technical specifications, to indicate the consumer's intent to opt out of the business' sale or sharing of personal information or to limit the use of sensitive personal information.</p>
                </div>
              </div>
            </section>

            {/* Definitions Section */}
            <section id="definitions">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 14. Key Definitions</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-lg font-semibold mb-2">Business</h4>
                  <p className="mb-2">A legal entity that collects consumers' personal information, does business in California, and meets one of these thresholds:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Annual gross revenues over $25 million</li>
                    <li>Annually buys, sells, or shares personal information of 100,000+ consumers or households</li>
                    <li>Derives 50%+ of annual revenues from selling or sharing consumers' personal information</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-lg font-semibold mb-2">Personal Information</h4>
                  <p>Information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or household. Includes identifiers, biometric information, internet activity, geolocation data, audio/visual information, professional information, education information, and inferences drawn from this information.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-lg font-semibold mb-2">Sell/Sale</h4>
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

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-lg font-semibold mb-2">Consumer</h4>
                  <p>A natural person who is a California resident, however identified, including by any unique identifier.</p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-lg font-semibold mb-2">Service Provider</h4>
                  <p>A person that processes personal information on behalf of a business pursuant to a written contract that restricts the service provider's use of the personal information to business purposes specified in the contract.</p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-lg font-semibold mb-2">Contractor</h4>
                  <p>A person to whom a business makes available consumer personal information for a business purpose, pursuant to a written contract that prohibits the contractor from selling, sharing, or using the personal information for purposes other than those specified in the contract.</p>
                </div>
              </div>
            </section>

            {/* Exemptions */}
            <section id="exemptions">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 15. Exemptions</h2>
              <p className="mb-6">This law does not restrict a business's ability to:</p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Legal Compliance and Law Enforcement</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Comply with federal, state, or local laws</li>
                    <li>Comply with court orders or subpoenas</li> 
                    <li>Cooperate with law enforcement agencies</li>
                    <li>Cooperate with government agency requests for emergency access</li>
                    <li>Exercise or defend legal claims</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Specific Industry Exemptions</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Medical information governed by HIPAA and CMIA</li>
                    <li>Health care providers under confidentiality acts</li>
                    <li>Clinical trials and biomedical research</li>
                    <li>Credit reporting activities under FCRA</li>
                    <li>Information subject to Gramm-Leach-Bliley Act</li>
                    <li>Driver information under Driver's Privacy Protection Act</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Employment and Business Context</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Employee personal information collected in employment context (until January 1, 2023)</li>
                    <li>Business-to-business communications (until January 1, 2023)</li>
                    <li>Emergency contact information</li>
                    <li>Information necessary to administer employee benefits</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Security Breaches */}
            <section id="security-breaches">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 16. Personal Information Security Breaches</h2>
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-800">Private Right of Action</h3>
                  <p className="mb-4">Consumers whose nonencrypted personal information, or email address in combination with password or security question and answer, is subject to unauthorized access, theft, or disclosure due to a business's failure to implement reasonable security may sue for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Statutory damages of $100 to $750 per consumer per incident, or actual damages, whichever is greater</li>
                    <li>Injunctive or declaratory relief</li>
                    <li>Other relief the court deems proper</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">30-Day Cure Period</h3>
                  <p>Before bringing an action, consumers must provide 30 days' written notice identifying the specific violations. If the business cures the violation within 30 days and provides written statement that violations have been cured, no action for statutory damages may be initiated.</p>
                </div>
              </div>
            </section>

            {/* Administrative Enforcement */}
            <section id="enforcement">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 17. Administrative Enforcement</h2>
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-800">Administrative Fines</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Up to <strong>$2,500</strong> per violation</li>
                    <li>Up to <strong>$7,500</strong> per intentional violation</li>
                    <li>Enhanced penalties for violations involving minors under 16</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">Enforcement Authority</h3>
                  <p>The California Privacy Protection Agency has authority to investigate violations, conduct audits, issue administrative fines, and pursue enforcement actions against businesses that violate consumers' privacy rights.</p>
                </div>
              </div>
            </section>

            {/* Consumer Privacy Fund */}
            <section id="consumer-fund">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 18. Consumer Privacy Fund</h2>
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-800">Fund Purpose</h3>
                <p className="mb-4">Administrative fines and settlement proceeds are deposited in the Consumer Privacy Fund to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Offset costs incurred by state courts and Attorney General</li>
                  <li>Fund grants to promote and protect consumer privacy</li>
                  <li>Educate children about online privacy</li>
                  <li>Support cooperative programs with international law enforcement to combat fraudulent activities</li>
                </ul>
              </div>
            </section>

            {/* California Privacy Protection Agency */}
            <section id="cppa" className="bg-muted p-6 rounded-lg">
              <h2 className="text-3xl font-semibold mb-4 text-primary">SEC. 24. California Privacy Protection Agency (CPPA)</h2>
              <p className="mb-6">The CPRA establishes the California Privacy Protection Agency as an independent agency to implement and enforce the law.</p>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Agency Structure</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Five-member board including chairperson</li>
                      <li>Appointments by Governor, Attorney General, Senate Rules Committee, and Speaker of Assembly</li>
                      <li>Members serve up to 8 consecutive years</li>
                      <li>Expertise required in privacy, technology, and consumer rights</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Key Functions</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Administer and enforce privacy rights</li>
                      <li>Adopt regulations to carry out the law</li>
                      <li>Provide guidance to consumers and businesses</li>
                      <li>Conduct investigations and audits</li>
                      <li>Monitor privacy technology developments</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Enforcement Powers</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
                    <li>Issue administrative fines up to $2,500 per violation ($7,500 for intentional violations)</li>
                    <li>Subpoena witnesses and compel production of records</li>
                    <li>Conduct hearings and issue cease and desist orders</li>
                    <li>Seek court judgments to collect unpaid fines</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Funding</h4>
                  <p className="text-purple-700 text-sm">$5 million appropriated for fiscal year 2020-2021, then $10 million annually thereafter, adjusted for cost-of-living changes, to support agency operations.</p>
                </div>
              </div>
            </section>

            {/* Effective Dates */}
            <section id="effective-dates" className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-800">SEC. 31. Effective and Operative Dates</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                  <p><strong>January 1, 2023:</strong> Act becomes operative</p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                  <p><strong>January 1, 2022:</strong> Applies to personal information collected on or after this date</p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                  <p><strong>Right of Access:</strong> Applies to information collected before January 1, 2022</p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                  <p><strong>Employment Exemptions:</strong> Expire January 1, 2023</p>
                </div>
              </div>
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

            {/* Additional Provisions */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Additional Provisions</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Amendment Requirements</h4>
                  <p>This Act may only be amended by a majority vote of each house of the Legislature and signed by the Governor, provided amendments are consistent with and further the purpose and intent of the Act.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Severability</h4>
                  <p>If any provision is held invalid, the remaining provisions shall remain in full force and effect. The Act is intended to be severable.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Federal Preemption</h4>
                  <p>This Act supplements federal and state law where permissible, but shall not apply if preempted by or in conflict with federal law or the California Constitution.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Liberal Construction</h4>
                  <p>This Act shall be liberally construed to effectuate its purposes of protecting consumer privacy rights.</p>
                </div>
              </div>
            </section>

            {/* Effective Date */}
            <section className="text-center pt-8 border-t">
              <p className="text-sm text-muted-foreground">
                This document contains the complete text of the California Privacy Rights Act of 2020.
                <br />
                Effective Date: January 1, 2023 | Last updated: {new Date().toLocaleDateString()}
                <br />
                <strong>Important:</strong> This document is provided for informational purposes. 
                For official legal text, refer to the California Civil Code Section 1798 et seq.
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
