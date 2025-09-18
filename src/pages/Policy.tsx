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
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">SEC. 1. Title.</h2>
              <p>This measure shall be known, and may be cited, as the "California Privacy Rights Act of 2020."</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">SEC. 2. Findings and Declarations.</h2>
              <p>The people of the State of California hereby find and declare all of the following:</p>
              
              <div className="space-y-4 mt-4">
                <div>
                  <p><strong>(A)</strong> In 1972, California voters amended the California Constitution to include the right of privacy among the "inalienable" rights of all people. Voters acted in response to the accelerating encroachment on personal freedom and security caused by increased data collection and usage in contemporary society. The amendment established a legal and enforceable constitutional right of privacy for every Californian. Fundamental to this right of privacy is the ability of individuals to control the use, including the sale, of their personal information.</p>
                </div>
                
                <div>
                  <p><strong>(B)</strong> Since California voters approved the constitutional right of privacy, the California Legislature has adopted specific mechanisms to safeguard Californians' privacy, including the Online Privacy Protection Act, the Privacy Rights for California Minors in the Digital World Act, and Shine the Light, but consumers had no right to learn what personal information a business had collected about them and how they used it or to direct businesses not to sell the consumer's personal information.</p>
                </div>
                
                <div>
                  <p><strong>(C)</strong> That changed in 2018, when more than 629,000 California voters signed petitions to qualify the California Consumer Privacy Act of 2018 for the ballot. In response to the measure's qualification, the Legislature enacted the California Consumer Privacy Act of 2018 (CCPA) into law. The CCPA gives California consumers the right to learn what information a business has collected about them, to delete their personal information, to stop businesses from selling their personal information, including using it to target them with ads that follow them as they browse the internet from one website to another, and to hold businesses accountable if they do not take reasonable steps to safeguard their personal information.</p>
                </div>
                
                <div>
                  <p><strong>(D)</strong> Even before the CCPA had gone into effect, the Legislature considered many bills in 2019 to amend the law, some of which would have significantly weakened it. Unless California voters take action, the hard-fought rights consumers have won could be undermined by future legislation.</p>
                </div>
              </div>
            </section>

            <section className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Your Privacy Rights</h3>
              <p>Under the California Privacy Rights Act, consumers have the right to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Know what personal information is collected about them</li>
                <li>Delete personal information held by businesses</li>
                <li>Opt-out of the sale of personal information</li>
                <li>Non-discrimination for exercising their privacy rights</li>
                <li>Correct inaccurate personal information</li>
                <li>Limit the use of sensitive personal information</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
              <p>If you have questions about this privacy policy or your privacy rights, please contact us through our support channels.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Policy;