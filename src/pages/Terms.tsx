export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="glass rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last updated: January 16, 2026</p>

        <div className="legal-content">
          <h2>1. Acceptance of Terms</h2>
          <p>
            Welcome to Addit. These Terms of Service ("Terms," "Agreement") constitute a legally
            binding agreement between you ("User," "you," "your") and Addit ("Company," "we,"
            "us," "our") governing your access to and use of the Addit mobile application
            ("App," "Service").
          </p>
          <p>
            <strong>BY DOWNLOADING, INSTALLING, ACCESSING, OR USING THE APP, YOU ACKNOWLEDGE
            THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS.</strong> If
            you do not agree to these Terms, do not download, install, or use the App.
          </p>
          <p>
            These Terms apply to all users of the App, including users who contribute content,
            information, and other materials or services.
          </p>

          <h2>2. Eligibility and Age Requirements</h2>

          <h3>2.1 Minimum Age</h3>
          <p>
            <strong>The App is intended for users who are at least 17 years of age (18 in some
            jurisdictions).</strong> By using the App, you represent and warrant that you meet
            the minimum age requirement in your jurisdiction.
          </p>

          <h3>2.2 Legal Capacity</h3>
          <p>
            You represent and warrant that you have the legal capacity to enter into this
            Agreement. If you are using the App on behalf of an organization, you represent
            that you have authority to bind that organization to these Terms.
          </p>

          <h3>2.3 Geographic Restrictions</h3>
          <p>
            The App is available for download and use in countries where call recording
            applications are permitted. You are responsible for compliance with local laws
            and regulations in your jurisdiction.
          </p>

          <h2>3. Description of Service</h2>

          <h3>3.1 App Functionality</h3>
          <p>
            Addit is a mobile application that provides the following features:
          </p>
          <ul>
            <li><strong>Call Recording:</strong> Record phone calls on supported devices</li>
            <li><strong>Voice Memos:</strong> Create and store voice recordings</li>
            <li><strong>Transcription:</strong> Convert audio to text using third-party services</li>
            <li><strong>AI Extraction:</strong> Extract calendar events, reminders, and contacts from transcriptions</li>
            <li><strong>Local Storage:</strong> All data stored locally on your device</li>
            <li><strong>Search:</strong> Search across recordings and transcriptions</li>
          </ul>

          <h3>3.2 Third-Party Services</h3>
          <p>
            The App integrates with third-party services for transcription (Deepgram, Gladia)
            and AI processing (OpenAI, Google Gemini). Use of these services requires you to
            provide your own API keys and is subject to each provider's terms of service.
          </p>

          <h3>3.3 Service Availability</h3>
          <p>
            We do not guarantee that the App will be available at all times. We reserve the
            right to modify, suspend, or discontinue any aspect of the Service at any time
            without notice.
          </p>

          <h2>4. Call Recording - Legal Compliance</h2>

          <div className="bg-yellow-900/30 border border-yellow-600 rounded-lg p-4 my-4">
            <p className="font-bold text-yellow-400 mb-2">
              CRITICAL LEGAL WARNING - READ CAREFULLY
            </p>
            <p>
              Call recording laws vary significantly by jurisdiction. Recording phone calls
              without proper authorization or consent may be a criminal offense in many
              locations and can result in severe penalties including imprisonment, fines,
              and civil liability.
            </p>
            <p className="mt-2">
              <strong>YOU ARE SOLELY RESPONSIBLE FOR ENSURING YOUR USE OF CALL RECORDING
              COMPLIES WITH ALL APPLICABLE LAWS.</strong>
            </p>
          </div>

          <h3>4.1 User Responsibility</h3>
          <p>
            By using the call recording features of the App, you acknowledge and agree that:
          </p>
          <ul>
            <li>You are solely responsible for understanding and complying with all applicable
            federal, state, local, and international laws regarding call recording</li>
            <li>You will not use the App to record calls in violation of any law</li>
            <li>You will obtain all necessary consents before recording any conversation</li>
            <li>You assume all risk and liability associated with your use of call recording features</li>
          </ul>

          <h3>4.2 Two-Party (All-Party) Consent Jurisdictions</h3>
          <p>
            In the following jurisdictions, <strong>ALL PARTIES</strong> to a conversation must
            consent to being recorded. This list is not exhaustive and laws change frequently:
          </p>

          <h4>United States - Two-Party Consent States:</h4>
          <ul>
            <li><strong>California</strong> - Cal. Penal Code § 632</li>
            <li><strong>Connecticut</strong> - Conn. Gen. Stat. § 52-570d (civil liability)</li>
            <li><strong>Delaware</strong> - Del. Code Ann. tit. 11, § 1335</li>
            <li><strong>Florida</strong> - Fla. Stat. § 934.03</li>
            <li><strong>Illinois</strong> - 720 ILCS 5/14-2</li>
            <li><strong>Maryland</strong> - Md. Code Ann., Cts. & Jud. Proc. § 10-402</li>
            <li><strong>Massachusetts</strong> - Mass. Gen. Laws ch. 272, § 99</li>
            <li><strong>Michigan</strong> - Mich. Comp. Laws § 750.539c</li>
            <li><strong>Montana</strong> - Mont. Code Ann. § 45-8-213</li>
            <li><strong>Nevada</strong> - Nev. Rev. Stat. § 200.620 (phone calls)</li>
            <li><strong>New Hampshire</strong> - N.H. Rev. Stat. Ann. § 570-A:2</li>
            <li><strong>Pennsylvania</strong> - 18 Pa. Cons. Stat. § 5704</li>
            <li><strong>Washington</strong> - Wash. Rev. Code § 9.73.030</li>
          </ul>

          <h4>International Two-Party/All-Party Consent Jurisdictions:</h4>
          <ul>
            <li><strong>Germany</strong> - § 201 German Criminal Code (Strafgesetzbuch)</li>
            <li><strong>Spain</strong> - Constitutional protections on communications</li>
            <li><strong>Canada</strong> - Criminal Code Section 184 (federal all-party consent)</li>
            <li><strong>Australia</strong> - Telecommunications (Interception and Access) Act 1979</li>
            <li><strong>United Kingdom</strong> - Regulation of Investigatory Powers Act 2000 (business context)</li>
            <li><strong>France</strong> - Article 226-1 of the Penal Code</li>
            <li><strong>Italy</strong> - Italian Criminal Code Article 617</li>
            <li><strong>Japan</strong> - Wiretapping Law (recording without consent may violate privacy)</li>
            <li><strong>South Korea</strong> - Protection of Communications Secrets Act</li>
            <li><strong>Brazil</strong> - Constitution and Lei Geral de Proteção de Dados (LGPD)</li>
            <li><strong>India</strong> - Privacy rights under constitution (context-dependent)</li>
            <li><strong>European Union (GDPR)</strong> - Recording requires legal basis under GDPR</li>
          </ul>

          <h4>One-Party Consent Jurisdictions:</h4>
          <p>
            The following U.S. states generally permit recording if one party (including the
            person recording) consents: Alabama, Alaska, Arizona, Arkansas, Colorado, Georgia,
            Hawaii, Idaho, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Minnesota,
            Mississippi, Missouri, Nebraska, New Jersey, New Mexico, New York, North Carolina,
            North Dakota, Ohio, Oklahoma, Oregon, Rhode Island, South Carolina, South Dakota,
            Tennessee, Texas, Utah, Vermont, Virginia, West Virginia, Wisconsin, Wyoming, and
            Washington D.C.
          </p>
          <p>
            <strong>IMPORTANT:</strong> Even in one-party consent jurisdictions, there may be
            restrictions on recording for certain purposes (e.g., criminal intent, harassment).
          </p>

          <h3>4.3 Cross-Jurisdictional Calls</h3>
          <p>
            When recording calls between parties in different jurisdictions, the stricter law
            typically applies. We strongly recommend obtaining all-party consent for any
            cross-jurisdictional call to ensure compliance.
          </p>

          <h3>4.4 GDPR and EU/EEA Considerations</h3>
          <p>
            Recording calls involving individuals in the European Union, European Economic Area,
            or United Kingdom may require:
          </p>
          <ul>
            <li>A valid legal basis under GDPR (typically consent)</li>
            <li>Providing information about the recording to all parties</li>
            <li>Data protection impact assessment for systematic recording</li>
            <li>Records of consent where applicable</li>
          </ul>

          <h3>4.5 Workplace and Business Recording</h3>
          <p>
            Additional regulations may apply to recording in business contexts, including:
          </p>
          <ul>
            <li>Employment laws and employee consent requirements</li>
            <li>Industry-specific regulations (financial services, healthcare, etc.)</li>
            <li>Union agreements and collective bargaining rules</li>
            <li>Customer notification requirements for recorded business calls</li>
          </ul>

          <h3>4.6 Disclaimer of Responsibility</h3>
          <p>
            <strong>ADDIT DOES NOT PROVIDE LEGAL ADVICE.</strong> The information in this
            section is for general informational purposes only. Laws regarding call recording
            are complex and vary by jurisdiction. You should consult with a qualified attorney
            in your jurisdiction before recording any calls.
          </p>
          <p>
            Addit expressly disclaims any responsibility or liability for your compliance with
            applicable call recording laws.
          </p>

          <h2>5. API Key Management and Third-Party Services</h2>

          <h3>5.1 Your API Keys</h3>
          <p>
            To use transcription and AI features, you must provide your own API keys from
            supported third-party services. By providing API keys, you acknowledge that:
          </p>
          <ul>
            <li>You have valid accounts with these service providers</li>
            <li>You are authorized to use the API keys you provide</li>
            <li>You are responsible for all charges incurred through your API usage</li>
            <li>You are bound by each provider's terms of service</li>
          </ul>

          <h3>5.2 API Key Security</h3>
          <p>Your responsibilities include:</p>
          <ul>
            <li>Keeping your API keys confidential</li>
            <li>Not sharing your device or API keys with unauthorized persons</li>
            <li>Promptly revoking and replacing keys if you suspect unauthorized access</li>
            <li>Understanding that Addit stores keys locally on your device but cannot guarantee security against all threats</li>
          </ul>

          <h3>5.3 Third-Party Service Terms</h3>
          <p>
            Your use of third-party services through the App is subject to the terms of
            service and privacy policies of each provider:
          </p>
          <ul>
            <li><strong>Deepgram:</strong>{' '}
              <a href="https://deepgram.com/terms" target="_blank" rel="noopener noreferrer">Terms</a> |{' '}
              <a href="https://deepgram.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>
            </li>
            <li><strong>Gladia:</strong>{' '}
              <a href="https://www.gladia.io/terms-of-use" target="_blank" rel="noopener noreferrer">Terms</a> |{' '}
              <a href="https://www.gladia.io/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy</a>
            </li>
            <li><strong>OpenAI:</strong>{' '}
              <a href="https://openai.com/policies/terms-of-use" target="_blank" rel="noopener noreferrer">Terms</a> |{' '}
              <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>
            </li>
            <li><strong>Google Gemini:</strong>{' '}
              <a href="https://ai.google.dev/terms" target="_blank" rel="noopener noreferrer">Terms</a> |{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>
            </li>
          </ul>

          <h3>5.4 Service Interruptions</h3>
          <p>
            Third-party services may experience outages, changes, or discontinuation. We are
            not responsible for the availability, accuracy, or reliability of third-party
            services. You acknowledge that:
          </p>
          <ul>
            <li>Service interruptions may affect App functionality</li>
            <li>API pricing and terms may change without notice from Addit</li>
            <li>We may add, modify, or remove supported third-party integrations</li>
          </ul>

          <h2>6. Prohibited Uses</h2>
          <p>
            You agree NOT to use the App or any content obtained through the App for any
            purpose that is unlawful or prohibited by these Terms. Prohibited uses include
            but are not limited to:
          </p>

          <h3>6.1 Illegal Recording</h3>
          <ul>
            <li>Recording conversations without required consent or authorization</li>
            <li>Recording in violation of wiretapping, eavesdropping, or surveillance laws</li>
            <li>Recording for purposes of harassment, stalking, or intimidation</li>
            <li>Recording for fraudulent, deceptive, or illegal purposes</li>
          </ul>

          <h3>6.2 Harmful Activities</h3>
          <ul>
            <li>Using recordings to harm, threaten, or endanger others</li>
            <li>Blackmail, extortion, or coercion</li>
            <li>Invasion of privacy or unauthorized surveillance</li>
            <li>Creating or distributing recordings that violate others' rights</li>
          </ul>

          <h3>6.3 Technical Violations</h3>
          <ul>
            <li>Reverse engineering, decompiling, or disassembling the App</li>
            <li>Attempting to gain unauthorized access to App systems or data</li>
            <li>Interfering with or disrupting the App or connected services</li>
            <li>Using automated systems or software to access the App</li>
            <li>Circumventing or attempting to circumvent security measures</li>
          </ul>

          <h3>6.4 Misuse of Third-Party Services</h3>
          <ul>
            <li>Violating the acceptable use policies of integrated services</li>
            <li>Using API keys fraudulently obtained or not authorized for your use</li>
            <li>Attempting to avoid charges or circumvent usage limits</li>
          </ul>

          <h3>6.5 Content Violations</h3>
          <ul>
            <li>Creating recordings that are defamatory, obscene, or illegal</li>
            <li>Recording content that exploits minors in any way</li>
            <li>Recording content that promotes violence, hatred, or discrimination</li>
          </ul>

          <h2>7. User Content and Intellectual Property</h2>

          <h3>7.1 Your Content</h3>
          <p>
            "User Content" includes all recordings, transcriptions, extracted data, and any
            other content you create using the App. You retain ownership of your User Content.
          </p>
          <p>
            You are solely responsible for your User Content, including:
          </p>
          <ul>
            <li>Ensuring you have the right to record and store the content</li>
            <li>Compliance with applicable laws regarding the content</li>
            <li>Backing up your content as desired</li>
            <li>Protecting your content from unauthorized access</li>
          </ul>

          <h3>7.2 License to Addit</h3>
          <p>
            By using the App, you grant Addit a limited, non-exclusive license to process
            your User Content solely to provide the App's functionality. This license includes
            the right to:
          </p>
          <ul>
            <li>Store your content locally on your device</li>
            <li>Transmit content to third-party services at your direction</li>
            <li>Process content to provide features you request</li>
          </ul>
          <p>
            This license terminates when you delete your content or uninstall the App. We do
            not claim ownership of your content.
          </p>

          <h3>7.3 App Intellectual Property</h3>
          <p>
            The App, including its design, features, code, graphics, and documentation, is
            owned by Addit and is protected by copyright, trademark, and other intellectual
            property laws. You may not:
          </p>
          <ul>
            <li>Copy, modify, or distribute the App except as expressly permitted</li>
            <li>Use our trademarks without written permission</li>
            <li>Remove or alter any proprietary notices in the App</li>
          </ul>

          <h3>7.4 Feedback</h3>
          <p>
            If you provide feedback, suggestions, or ideas about the App ("Feedback"), you
            grant us a perpetual, irrevocable, worldwide, royalty-free license to use,
            implement, and incorporate your Feedback without compensation or attribution.
          </p>

          <h2>8. Privacy</h2>
          <p>
            Your use of the App is also governed by our{' '}
            <a href="#/privacy">Privacy Policy</a>, which is incorporated into these Terms
            by reference. Please review our Privacy Policy to understand our practices
            regarding your information.
          </p>

          <h2>9. Disclaimer of Warranties</h2>
          <p className="uppercase">
            <strong>
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY
              WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.
            </strong>
          </p>

          <h3>9.1 No Warranty of Accuracy</h3>
          <p>We do not warrant that:</p>
          <ul>
            <li>Transcriptions will be accurate, complete, or error-free</li>
            <li>AI extractions will correctly identify events, dates, or action items</li>
            <li>The App will correctly record, store, or process your content</li>
            <li>Legal information provided in the App or documentation is accurate or current</li>
          </ul>

          <h3>9.2 No Warranty of Availability</h3>
          <p>We do not warrant that:</p>
          <ul>
            <li>The App will be available at all times or operate without interruption</li>
            <li>The App will be compatible with all devices or operating systems</li>
            <li>Third-party services will remain available or unchanged</li>
            <li>Defects or errors will be corrected</li>
          </ul>

          <h3>9.3 Third-Party Services</h3>
          <p>
            We make no warranties regarding the accuracy, reliability, or availability of
            third-party services integrated with the App. Third-party services are provided
            by their respective operators under their own terms.
          </p>

          <h3>9.4 Jurisdictional Limitations</h3>
          <p>
            Some jurisdictions do not allow the exclusion of certain warranties. To the extent
            such laws apply, the above disclaimers may not apply to you, and you may have
            additional rights.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p className="uppercase">
            <strong>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ADDIT, ITS
              OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, LICENSORS, OR AFFILIATES BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR
              EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION:
            </strong>
          </p>
          <ul>
            <li>Loss of profits, revenue, data, use, goodwill, or other intangible losses</li>
            <li>Damages arising from your use or inability to use the App</li>
            <li>Damages arising from any unauthorized access to or use of your data</li>
            <li>Damages arising from any illegal recording or violation of privacy laws</li>
            <li>Damages arising from legal consequences of your use of the App</li>
            <li>Damages arising from errors in transcriptions or AI extractions</li>
            <li>Damages arising from third-party services or content</li>
            <li>Damages arising from interruption or cessation of the App</li>
          </ul>

          <h3>10.1 Maximum Liability</h3>
          <p>
            <strong>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY TO YOU FOR ALL
              CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR YOUR USE OF THE APP SHALL NOT
              EXCEED THE AMOUNT YOU PAID TO US (IF ANY) IN THE TWELVE (12) MONTHS PRECEDING
              THE CLAIM, OR ONE HUNDRED DOLLARS ($100 USD), WHICHEVER IS GREATER.
            </strong>
          </p>

          <h3>10.2 Essential Purpose</h3>
          <p>
            The limitations of liability in this section apply even if any limited remedy
            fails of its essential purpose and regardless of whether we have been advised
            of the possibility of such damages.
          </p>

          <h3>10.3 Jurisdictional Limitations</h3>
          <p>
            Some jurisdictions do not allow the exclusion or limitation of certain damages.
            To the extent such laws apply, our liability is limited to the greatest extent
            permitted by law.
          </p>

          <h2>11. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Addit and its officers, directors,
            employees, contractors, agents, licensors, suppliers, successors, and assigns from
            and against any claims, liabilities, damages, judgments, awards, losses, costs,
            expenses, or fees (including reasonable attorneys' fees) arising out of or relating
            to:
          </p>
          <ul>
            <li>Your use or misuse of the App</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any applicable law, regulation, or third-party right</li>
            <li>Any illegal, unauthorized, or improper recording you make</li>
            <li>Any claim that your User Content violates the rights of any third party</li>
            <li>Your use of third-party services through the App</li>
            <li>Any legal action arising from your recordings or use of the App</li>
          </ul>
          <p>
            We reserve the right, at our own expense, to assume the exclusive defense and
            control of any matter subject to indemnification by you. You agree to cooperate
            with our defense of such claims.
          </p>

          <h2>12. Dispute Resolution</h2>

          <h3>12.1 Informal Resolution</h3>
          <p>
            Before filing a formal legal claim, you agree to first contact us at{' '}
            <a href="mailto:legal@addit.dev">legal@addit.dev</a> to attempt to resolve the
            dispute informally. We will attempt to resolve the dispute informally within
            sixty (60) days.
          </p>

          <h3>12.2 Binding Arbitration</h3>
          <p>
            If informal resolution is unsuccessful, any dispute, controversy, or claim arising
            out of or relating to these Terms or the App shall be resolved by binding arbitration
            administered by JAMS under its Streamlined Arbitration Rules. The arbitration shall
            be conducted in English.
          </p>

          <h3>12.3 Exceptions</h3>
          <p>
            Notwithstanding the above, either party may:
          </p>
          <ul>
            <li>Seek injunctive or equitable relief in any court of competent jurisdiction</li>
            <li>File claims in small claims court if eligible</li>
            <li>Report violations to law enforcement or regulatory agencies</li>
          </ul>

          <h3>12.4 Class Action Waiver</h3>
          <p className="font-bold">
            YOU AND ADDIT AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR
            ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED
            CLASS OR REPRESENTATIVE PROCEEDING. Unless both parties agree otherwise, the
            arbitrator may not consolidate more than one person's claims.
          </p>

          <h3>12.5 Opt-Out of Arbitration</h3>
          <p>
            You may opt out of the arbitration and class action waiver provisions by notifying
            us in writing within thirty (30) days of first using the App. Send your opt-out
            notice to <a href="mailto:legal@addit.dev">legal@addit.dev</a> with your name,
            address, and clear statement that you wish to opt out.
          </p>

          <h2>13. Governing Law and Jurisdiction</h2>

          <h3>13.1 Governing Law</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the
            State of California, United States, without regard to its conflict of law provisions.
          </p>

          <h3>13.2 Jurisdiction</h3>
          <p>
            For any matters not subject to arbitration, you consent to the exclusive jurisdiction
            and venue of the state and federal courts located in California, and you waive any
            objection to such jurisdiction or venue.
          </p>

          <h3>13.3 International Users</h3>
          <p>
            If you access the App from outside the United States, you do so at your own risk
            and are responsible for compliance with local laws. These Terms are governed by
            U.S. law regardless of your location.
          </p>

          <h2>14. Termination</h2>

          <h3>14.1 Your Right to Terminate</h3>
          <p>
            You may terminate this Agreement at any time by:
          </p>
          <ul>
            <li>Uninstalling and deleting the App from all your devices</li>
            <li>Deleting all your User Content</li>
            <li>Revoking any API keys used with the App</li>
          </ul>

          <h3>14.2 Our Right to Terminate</h3>
          <p>
            We reserve the right to suspend or terminate your access to the App at any time,
            without notice, for any reason, including but not limited to:
          </p>
          <ul>
            <li>Violation of these Terms</li>
            <li>Illegal or harmful use of the App</li>
            <li>Request by law enforcement or government agency</li>
            <li>Discontinuation of the App or any feature</li>
          </ul>

          <h3>14.3 Effect of Termination</h3>
          <p>
            Upon termination:
          </p>
          <ul>
            <li>Your right to use the App immediately ceases</li>
            <li>All data stored locally on your device remains until you delete it</li>
            <li>Sections of these Terms that by their nature should survive will survive
            (including disclaimers, limitations of liability, indemnification, and
            dispute resolution)</li>
          </ul>

          <h2>15. Export Compliance</h2>
          <p>
            The App may be subject to U.S. export control laws and regulations. You agree not
            to export, re-export, or transfer the App or any technical data received through
            the App in violation of any applicable export laws or regulations, including:
          </p>
          <ul>
            <li>U.S. Export Administration Regulations (EAR)</li>
            <li>International Traffic in Arms Regulations (ITAR)</li>
            <li>Economic sanctions administered by OFAC</li>
            <li>Applicable foreign export control laws</li>
          </ul>

          <h2>16. Force Majeure</h2>
          <p>
            We shall not be liable for any failure or delay in performing our obligations
            where such failure or delay results from causes beyond our reasonable control,
            including but not limited to: acts of God, natural disasters, pandemic, war,
            terrorism, riots, embargoes, acts of civil or military authorities, fire, floods,
            accidents, strikes, shortages of transportation, facilities, fuel, energy, labor,
            or materials, or failures of telecommunications or technology infrastructure.
          </p>

          <h2>17. General Provisions</h2>

          <h3>17.1 Entire Agreement</h3>
          <p>
            These Terms, together with the Privacy Policy and any other legal notices published
            by us on the App, constitute the entire agreement between you and Addit regarding
            your use of the App and supersede all prior agreements and understandings.
          </p>

          <h3>17.2 Severability</h3>
          <p>
            If any provision of these Terms is held to be invalid, illegal, or unenforceable,
            such provision shall be modified to the minimum extent necessary to make it valid
            and enforceable, or if modification is not possible, severed from these Terms.
            The remaining provisions shall continue in full force and effect.
          </p>

          <h3>17.3 Waiver</h3>
          <p>
            No waiver of any term or condition shall be deemed a further or continuing waiver
            of such term or any other term. Our failure to assert any right or provision shall
            not constitute a waiver of such right or provision.
          </p>

          <h3>17.4 Assignment</h3>
          <p>
            You may not assign or transfer these Terms or your rights hereunder without our
            prior written consent. We may assign these Terms without restriction. Any purported
            assignment in violation of this section shall be void.
          </p>

          <h3>17.5 No Third-Party Beneficiaries</h3>
          <p>
            These Terms do not create any third-party beneficiary rights except as expressly
            provided.
          </p>

          <h3>17.6 Notices</h3>
          <p>
            We may provide notices to you through the App, by email if you have provided one,
            or by posting on our website. Notices to us must be sent to{' '}
            <a href="mailto:legal@addit.dev">legal@addit.dev</a>.
          </p>

          <h3>17.7 Electronic Communications</h3>
          <p>
            By using the App, you consent to receiving electronic communications from us. You
            agree that all agreements, notices, disclosures, and other communications we provide
            electronically satisfy any legal requirement that such communications be in writing.
          </p>

          <h3>17.8 Headings</h3>
          <p>
            Section headings are for convenience only and shall not affect the interpretation
            of these Terms.
          </p>

          <h2>18. App Store Terms</h2>

          <h3>18.1 Apple App Store</h3>
          <p>
            If you downloaded the App from Apple's App Store, you acknowledge that:
          </p>
          <ul>
            <li>These Terms are between you and Addit, not Apple</li>
            <li>Apple has no obligation to provide maintenance or support for the App</li>
            <li>Apple is not responsible for any claims relating to the App</li>
            <li>Apple is a third-party beneficiary of these Terms with the right to enforce them</li>
            <li>You must comply with Apple's usage rules in the App Store Terms of Service</li>
          </ul>

          <h3>18.2 Google Play Store</h3>
          <p>
            If you downloaded the App from Google Play, you acknowledge that:
          </p>
          <ul>
            <li>These Terms are between you and Addit, not Google</li>
            <li>Google has no obligation regarding the App</li>
            <li>Google is not responsible for the App or its content</li>
            <li>You must comply with Google Play's Terms of Service</li>
          </ul>

          <h2>19. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. If we make material changes,
            we will provide notice through the App or by other means at least thirty (30) days
            before the changes take effect.
          </p>
          <p>
            Your continued use of the App after the effective date of any changes constitutes
            your acceptance of the modified Terms. If you do not agree to the modified Terms,
            you must stop using the App.
          </p>
          <p>
            We encourage you to review these Terms periodically. The "Last updated" date at
            the top indicates when these Terms were last revised.
          </p>

          <h2>20. Contact Information</h2>
          <p>
            If you have any questions, concerns, or comments about these Terms, please contact us:
          </p>

          <h3>General Inquiries</h3>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:support@addit.dev">support@addit.dev</a>
          </p>

          <h3>Legal Inquiries</h3>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:legal@addit.dev">legal@addit.dev</a>
          </p>

          <h3>Privacy Inquiries</h3>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:privacy@addit.dev">privacy@addit.dev</a>
          </p>

          <p className="mt-8 text-sm text-gray-400">
            These Terms of Service are effective as of January 16, 2026. By using the App,
            you acknowledge that you have read, understood, and agree to be bound by these Terms.
          </p>
        </div>
      </div>
    </div>
  )
}
