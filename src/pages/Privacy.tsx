export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="glass rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: January 16, 2026</p>

        <div className="legal-content">
          <h2>1. Introduction and Scope</h2>
          <p>
            Welcome to Addit ("we," "our," "us," or "the Company"). Addit is a mobile application
            that provides call recording, voice memo recording, transcription, and AI-powered
            extraction services. This Privacy Policy explains how we collect, use, disclose,
            retain, and safeguard your information when you use our mobile application (the "App")
            available on iOS and Android platforms.
          </p>
          <p>
            This Privacy Policy applies to all users of the App worldwide. We are committed to
            protecting your privacy and complying with applicable data protection laws, including
            but not limited to the General Data Protection Regulation (GDPR), California Consumer
            Privacy Act (CCPA), California Privacy Rights Act (CPRA), Lei Geral de Proteção de
            Dados (LGPD), Personal Information Protection and Electronic Documents Act (PIPEDA),
            UK General Data Protection Regulation (UK GDPR), Australian Privacy Act, and other
            applicable state, federal, and international privacy laws.
          </p>
          <p>
            <strong>PLEASE READ THIS PRIVACY POLICY CAREFULLY.</strong> By downloading, installing,
            accessing, or using Addit, you acknowledge that you have read, understood, and agree
            to be bound by this Privacy Policy. If you do not agree to this Privacy Policy, please
            do not use the App.
          </p>

          <h2>2. Data Controller Information</h2>
          <p>
            For the purposes of applicable data protection laws, the data controller responsible
            for your personal data is:
          </p>
          <p>
            <strong>Addit</strong><br />
            Email: <a href="mailto:privacy@addit.dev">privacy@addit.dev</a>
          </p>
          <p>
            For users in the European Economic Area (EEA), United Kingdom, or Switzerland, you
            may also contact our data protection representative at{' '}
            <a href="mailto:dpo@addit.dev">dpo@addit.dev</a>.
          </p>

          <h2>3. Information We Collect</h2>
          <p>
            We collect information to provide and improve our services. The types of information
            we collect depend on how you use the App and the permissions you grant.
          </p>

          <h3>3.1 Audio Recordings and Voice Data</h3>
          <p>
            When you use the App's recording features, we process audio data including:
          </p>
          <ul>
            <li>Phone call recordings (when you initiate recording)</li>
            <li>Voice memos and audio notes you create</li>
            <li>Audio files you import or share to the App</li>
          </ul>
          <p>
            <strong>Storage:</strong> All audio recordings are stored locally on your device.
            Audio data is only transmitted to third-party transcription services (Deepgram or
            Gladia) when you initiate transcription, using API keys you provide.
          </p>

          <h3>3.2 Call Log Information</h3>
          <p>
            With your explicit permission (READ_CALL_LOG permission on Android), we access:
          </p>
          <ul>
            <li>Phone numbers of incoming and outgoing calls</li>
            <li>Call timestamps and duration</li>
            <li>Call type (incoming, outgoing, missed)</li>
          </ul>
          <p>
            <strong>Purpose:</strong> This information is used solely to associate recordings
            with specific calls and display call context within the App. This data is stored
            locally on your device and is never transmitted to our servers.
          </p>

          <h3>3.3 Contacts Information</h3>
          <p>
            With your explicit permission (READ_CONTACTS), we access:
          </p>
          <ul>
            <li>Contact names associated with phone numbers</li>
            <li>Phone numbers in your contact list</li>
          </ul>
          <p>
            <strong>Purpose:</strong> This information is used solely to display caller names
            with recordings for your convenience. Contact data is accessed locally and is never
            transmitted to external servers.
          </p>

          <h3>3.4 Calendar Information</h3>
          <p>
            With your explicit permission (Calendar access on iOS, Calendar permissions on Android),
            we can:
          </p>
          <ul>
            <li>Read existing calendar events (to avoid duplicates)</li>
            <li>Create new calendar events based on AI-extracted information from your recordings</li>
          </ul>
          <p>
            <strong>Purpose:</strong> Calendar access is used solely to create events you approve
            from action items extracted from your recordings. Calendar data is accessed locally.
          </p>

          <h3>3.5 Transcription Data</h3>
          <p>
            When you transcribe recordings, the following data is processed:
          </p>
          <ul>
            <li>Transcribed text from your audio recordings</li>
            <li>Speaker identification and diarization data</li>
            <li>Language detection information</li>
            <li>Timestamps and word-level timing</li>
          </ul>
          <p>
            <strong>Storage:</strong> Transcriptions are stored locally on your device. The audio
            data is transmitted to your chosen transcription provider (Deepgram or Gladia) using
            your own API keys for processing.
          </p>

          <h3>3.6 AI-Extracted Information</h3>
          <p>
            When you use AI extraction features, we process transcriptions to extract:
          </p>
          <ul>
            <li>Calendar events (dates, times, descriptions)</li>
            <li>Reminders and action items</li>
            <li>Contact information mentioned in conversations</li>
            <li>Key facts and summaries</li>
            <li>Semantic embeddings for search functionality</li>
          </ul>
          <p>
            <strong>Processing:</strong> Transcription text is sent to your chosen AI provider
            (OpenAI or Google Gemini) using your own API keys. Extracted data is stored locally
            on your device.
          </p>

          <h3>3.7 Technical and Device Information</h3>
          <p>
            We may collect limited technical information for app functionality:
          </p>
          <ul>
            <li>Device type and model</li>
            <li>Operating system version</li>
            <li>App version</li>
            <li>Error logs and crash reports (stored locally)</li>
          </ul>
          <p>
            <strong>Note:</strong> We do not collect device identifiers, advertising IDs, or
            tracking identifiers. We do not use analytics services or tracking pixels.
          </p>

          <h3>3.8 User-Provided API Keys</h3>
          <p>
            To use transcription and AI features, you provide your own API keys for:
          </p>
          <ul>
            <li>Deepgram (transcription)</li>
            <li>Gladia (transcription)</li>
            <li>OpenAI (AI extraction and embeddings)</li>
            <li>Google Gemini (AI extraction)</li>
          </ul>
          <p>
            <strong>Storage:</strong> API keys are stored securely using your device's native
            secure storage (iOS Keychain with kSecAttrAccessibleWhenUnlockedThisDeviceOnly,
            Android Keystore with hardware-backed encryption when available).
          </p>

          <h2>4. Legal Basis for Processing (GDPR/UK GDPR)</h2>
          <p>
            For users in the EEA, UK, and Switzerland, we process your personal data based on
            the following legal grounds:
          </p>

          <h3>4.1 Consent (Article 6(1)(a) GDPR)</h3>
          <p>We rely on your explicit consent for:</p>
          <ul>
            <li>Recording audio (microphone permission)</li>
            <li>Accessing your contacts (contacts permission)</li>
            <li>Accessing your calendar (calendar permission)</li>
            <li>Accessing your call logs (call log permission)</li>
            <li>Transmitting audio to transcription services</li>
            <li>Transmitting transcriptions to AI services</li>
          </ul>
          <p>
            You may withdraw consent at any time by revoking permissions in your device settings
            or deleting your data within the App. Withdrawal of consent does not affect the
            lawfulness of processing based on consent before its withdrawal.
          </p>

          <h3>4.2 Contract Performance (Article 6(1)(b) GDPR)</h3>
          <p>Processing necessary to provide the App's core functionality:</p>
          <ul>
            <li>Storing and displaying your recordings</li>
            <li>Processing transcriptions you request</li>
            <li>Displaying extracted calendar events and action items</li>
          </ul>

          <h3>4.3 Legitimate Interests (Article 6(1)(f) GDPR)</h3>
          <p>We may process data based on our legitimate interests for:</p>
          <ul>
            <li>App improvement and bug fixing</li>
            <li>Security and fraud prevention</li>
            <li>Legal compliance and responding to legal requests</li>
          </ul>

          <h2>5. How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>

          <h3>5.1 Core App Functionality</h3>
          <ul>
            <li>Recording, storing, and playing back audio recordings</li>
            <li>Transcribing audio using third-party services</li>
            <li>Extracting calendar events, reminders, and contacts using AI</li>
            <li>Displaying caller identification from your contacts</li>
            <li>Creating calendar events based on extracted information</li>
            <li>Providing search functionality across your recordings and transcriptions</li>
          </ul>

          <h3>5.2 App Improvement</h3>
          <ul>
            <li>Debugging and fixing errors</li>
            <li>Improving app stability and performance</li>
          </ul>

          <h3>5.3 Legal Compliance</h3>
          <ul>
            <li>Complying with applicable laws and regulations</li>
            <li>Responding to lawful requests from authorities</li>
            <li>Protecting our legal rights</li>
          </ul>

          <h2>6. Third-Party Services and Data Sharing</h2>
          <p>
            Addit uses third-party services for transcription and AI processing. When you use
            these features, your data is transmitted to these services using API keys that you
            provide. We do not have access to your accounts with these providers.
          </p>

          <h3>6.1 Transcription Services</h3>

          <h4>Deepgram</h4>
          <ul>
            <li><strong>Data Sent:</strong> Audio files for transcription</li>
            <li><strong>Model:</strong> Nova-3 with automatic language detection</li>
            <li><strong>Features:</strong> Speaker diarization, punctuation, smart formatting</li>
            <li><strong>Data Retention:</strong> Subject to Deepgram's policies</li>
            <li>
              <strong>Privacy Policy:</strong>{' '}
              <a href="https://deepgram.com/privacy" target="_blank" rel="noopener noreferrer">
                https://deepgram.com/privacy
              </a>
            </li>
            <li>
              <strong>Terms of Service:</strong>{' '}
              <a href="https://deepgram.com/terms" target="_blank" rel="noopener noreferrer">
                https://deepgram.com/terms
              </a>
            </li>
          </ul>

          <h4>Gladia</h4>
          <ul>
            <li><strong>Data Sent:</strong> Audio files for transcription</li>
            <li><strong>Features:</strong> Multi-language support (99+ languages), speaker diarization</li>
            <li><strong>Data Retention:</strong> Subject to Gladia's policies</li>
            <li>
              <strong>Privacy Policy:</strong>{' '}
              <a href="https://www.gladia.io/privacy-policy" target="_blank" rel="noopener noreferrer">
                https://www.gladia.io/privacy-policy
              </a>
            </li>
            <li>
              <strong>Terms of Service:</strong>{' '}
              <a href="https://www.gladia.io/terms-of-use" target="_blank" rel="noopener noreferrer">
                https://www.gladia.io/terms-of-use
              </a>
            </li>
          </ul>

          <h3>6.2 AI Processing Services</h3>

          <h4>OpenAI</h4>
          <ul>
            <li><strong>Data Sent:</strong> Transcription text for analysis, text for embeddings</li>
            <li><strong>Models Used:</strong> GPT-4o-mini (extraction), text-embedding-3-small (search)</li>
            <li><strong>Purpose:</strong> Calendar event extraction, semantic search embeddings</li>
            <li><strong>Data Retention:</strong> Subject to OpenAI's API data usage policies</li>
            <li>
              <strong>Privacy Policy:</strong>{' '}
              <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer">
                https://openai.com/privacy
              </a>
            </li>
            <li>
              <strong>API Terms:</strong>{' '}
              <a href="https://openai.com/policies/terms-of-use" target="_blank" rel="noopener noreferrer">
                https://openai.com/policies/terms-of-use
              </a>
            </li>
          </ul>

          <h4>Google Gemini</h4>
          <ul>
            <li><strong>Data Sent:</strong> Transcription text for analysis</li>
            <li><strong>Models Used:</strong> Gemini 1.5 Flash, text-embedding-004</li>
            <li><strong>Purpose:</strong> Calendar event extraction, semantic search embeddings</li>
            <li><strong>Data Retention:</strong> Subject to Google's API policies</li>
            <li>
              <strong>Privacy Policy:</strong>{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/privacy
              </a>
            </li>
            <li>
              <strong>Terms of Service:</strong>{' '}
              <a href="https://ai.google.dev/terms" target="_blank" rel="noopener noreferrer">
                https://ai.google.dev/terms
              </a>
            </li>
          </ul>

          <h3>6.3 Important Notice About Third-Party Services</h3>
          <p>
            <strong>Your Responsibility:</strong> When you provide your API keys and use these
            services through Addit, you are entering into a direct relationship with these
            third-party providers. You are responsible for:
          </p>
          <ul>
            <li>Reading and understanding each provider's privacy policy and terms of service</li>
            <li>Ensuring your use complies with their acceptable use policies</li>
            <li>Managing and securing your API keys</li>
            <li>Any costs associated with your API usage</li>
          </ul>
          <p>
            <strong>AI Transparency Notice:</strong> Per Apple's App Store requirements effective
            November 2025, we inform you that data you process through AI features (transcription
            analysis, calendar extraction) is shared with third-party AI services (OpenAI and/or
            Google) as specified above. You explicitly consent to this sharing when you configure
            your API keys and use these features.
          </p>

          <h3>6.4 What We Do NOT Share</h3>
          <p>We do NOT:</p>
          <ul>
            <li>Sell your personal data to any third party</li>
            <li>Share your data for advertising or marketing purposes</li>
            <li>Provide your data to data brokers</li>
            <li>Use your data to train AI models</li>
            <li>Share your data with affiliates for their marketing purposes</li>
            <li>Transfer your data to our servers (all data remains on your device)</li>
          </ul>

          <h2>7. Data Storage and Security</h2>

          <h3>7.1 Local Storage</h3>
          <p>
            All your personal data, including recordings, transcriptions, extracted items, and
            settings are stored locally on your device. We do not operate servers that store
            your personal data. This means:
          </p>
          <ul>
            <li>Your data stays on your device under your control</li>
            <li>Uninstalling the App removes all App data from your device</li>
            <li>We cannot access, recover, or restore your data remotely</li>
            <li>You are responsible for backing up your data if desired</li>
          </ul>

          <h3>7.2 Database Security</h3>
          <p>Local data is stored using:</p>
          <ul>
            <li><strong>op-sqlite:</strong> For structured data (recordings, transcriptions, events)</li>
            <li><strong>MMKV:</strong> For preferences and settings, with AES encryption</li>
            <li><strong>iOS Keychain / Android Keystore:</strong> For API keys, with hardware-backed encryption</li>
          </ul>

          <h3>7.3 Transmission Security</h3>
          <ul>
            <li>All data transmitted to third-party services uses HTTPS/TLS encryption</li>
            <li>API keys are never logged or exposed in error messages</li>
            <li>We sanitize error messages to prevent accidental data exposure</li>
          </ul>

          <h3>7.4 API Key Security</h3>
          <p>Your third-party API keys are protected by:</p>
          <ul>
            <li><strong>iOS:</strong> Keychain with kSecAttrAccessibleWhenUnlockedThisDeviceOnly</li>
            <li><strong>Android:</strong> Keystore with hardware-backed encryption (when available)</li>
            <li>Keys are never transmitted to our servers</li>
            <li>Keys are never included in error logs or crash reports</li>
          </ul>

          <h2>8. Data Retention</h2>

          <h3>8.1 Local Data Retention</h3>
          <p>
            Data stored on your device is retained until you delete it. You control retention
            through:
          </p>
          <ul>
            <li><strong>Individual deletion:</strong> Delete specific recordings or items</li>
            <li><strong>Cache clearing:</strong> Remove temporary data while preserving recordings</li>
            <li><strong>Full data deletion:</strong> Remove all App data</li>
            <li><strong>App uninstallation:</strong> Removes all App data from your device</li>
          </ul>

          <h3>8.2 Third-Party Data Retention</h3>
          <p>
            Data transmitted to third-party services is subject to their respective retention
            policies. Generally:
          </p>
          <ul>
            <li><strong>Deepgram:</strong> Audio processed in real-time; refer to their data retention policy</li>
            <li><strong>Gladia:</strong> Audio uploaded temporarily for processing; refer to their data retention policy</li>
            <li><strong>OpenAI:</strong> API data retention per their data usage policies (typically not used for training with API access)</li>
            <li><strong>Google Gemini:</strong> API data retention per Google's policies</li>
          </ul>
          <p>
            We recommend reviewing each provider's policies for their specific retention practices.
          </p>

          <h2>9. Your Rights and Choices</h2>
          <p>
            Depending on your location, you have various rights regarding your personal data.
            Since all data is stored locally on your device, you can exercise most rights
            directly through the App.
          </p>

          <h3>9.1 Universal Rights (All Users)</h3>
          <ul>
            <li>
              <strong>Access:</strong> View all your data directly in the App (recordings,
              transcriptions, extracted items, settings)
            </li>
            <li>
              <strong>Deletion:</strong> Delete individual items or all data through Settings &gt;
              Data Management &gt; Delete All Data
            </li>
            <li>
              <strong>Export:</strong> Export your data in JSON format through Settings &gt;
              Data Management &gt; Export Data
            </li>
            <li>
              <strong>Permission Control:</strong> Revoke App permissions at any time through
              your device's settings
            </li>
            <li>
              <strong>Opt-Out of Processing:</strong> Stop using transcription or AI features
              at any time; remove API keys to prevent data transmission
            </li>
          </ul>

          <h3>9.2 How to Exercise Your Rights</h3>
          <p>
            <strong>In-App:</strong> Most rights can be exercised directly through the App's
            Settings menu.
          </p>
          <p>
            <strong>Contact Us:</strong> For requests that cannot be fulfilled through the App,
            or for any questions, contact us at{' '}
            <a href="mailto:privacy@addit.dev">privacy@addit.dev</a>.
          </p>
          <p>
            <strong>Response Time:</strong> We will respond to your request within:
          </p>
          <ul>
            <li>GDPR: 30 days (extendable by 60 days for complex requests)</li>
            <li>CCPA/CPRA: 45 days (extendable by 45 days)</li>
            <li>LGPD: 15 days</li>
            <li>PIPEDA: 30 days</li>
          </ul>

          <h2>10. GDPR Compliance (EEA, UK, Switzerland Users)</h2>
          <p>
            If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland,
            you have the following additional rights under the General Data Protection Regulation
            (GDPR) and UK GDPR:
          </p>

          <h3>10.1 Your GDPR Rights</h3>
          <ul>
            <li>
              <strong>Right of Access (Article 15):</strong> Request confirmation of whether we
              process your data and obtain a copy
            </li>
            <li>
              <strong>Right to Rectification (Article 16):</strong> Request correction of
              inaccurate personal data
            </li>
            <li>
              <strong>Right to Erasure (Article 17):</strong> Request deletion of your personal
              data ("right to be forgotten")
            </li>
            <li>
              <strong>Right to Restrict Processing (Article 18):</strong> Request limitation of
              processing in certain circumstances
            </li>
            <li>
              <strong>Right to Data Portability (Article 20):</strong> Receive your data in a
              structured, commonly used, machine-readable format (JSON)
            </li>
            <li>
              <strong>Right to Object (Article 21):</strong> Object to processing based on
              legitimate interests
            </li>
            <li>
              <strong>Right to Withdraw Consent (Article 7(3)):</strong> Withdraw consent at
              any time for consent-based processing
            </li>
            <li>
              <strong>Right Not to be Subject to Automated Decision-Making (Article 22):</strong>{' '}
              Not be subject to decisions based solely on automated processing with legal effects
            </li>
          </ul>

          <h3>10.2 Exercising GDPR Rights</h3>
          <p>
            Since all data is stored locally on your device, you have direct control over your data:
          </p>
          <ul>
            <li>Access and portability: Use the Export feature in Settings</li>
            <li>Erasure: Use the Delete All Data feature in Settings</li>
            <li>Withdraw consent: Revoke permissions in device settings or remove API keys</li>
          </ul>
          <p>
            For any requests or to exercise your rights regarding data transmitted to third-party
            services, contact us at <a href="mailto:dpo@addit.dev">dpo@addit.dev</a>.
          </p>

          <h3>10.3 Supervisory Authority</h3>
          <p>
            You have the right to lodge a complaint with your local data protection supervisory
            authority. A list of EU Data Protection Authorities can be found at{' '}
            <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer">
              https://edpb.europa.eu/about-edpb/about-edpb/members_en
            </a>.
          </p>
          <p>
            For UK residents: Information Commissioner's Office (ICO) at{' '}
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
              https://ico.org.uk
            </a>.
          </p>

          <h3>10.4 International Data Transfers</h3>
          <p>
            When you use transcription and AI services, your data may be transferred to and
            processed in countries outside the EEA/UK, including the United States. These
            transfers occur through your direct use of third-party services (Deepgram, Gladia,
            OpenAI, Google) using your own API keys.
          </p>
          <p>
            These third-party providers implement appropriate safeguards for international
            transfers, including:
          </p>
          <ul>
            <li>Standard Contractual Clauses (SCCs)</li>
            <li>EU-U.S. Data Privacy Framework certification (where applicable)</li>
            <li>UK Extension to EU-U.S. Data Privacy Framework</li>
            <li>Swiss-U.S. Data Privacy Framework</li>
          </ul>
          <p>
            Please review each provider's privacy policy for their specific transfer mechanisms.
          </p>

          <h2>11. CCPA/CPRA Compliance (California Residents)</h2>
          <p>
            If you are a California resident, you have rights under the California Consumer
            Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA).
          </p>

          <h3>11.1 Categories of Personal Information Collected</h3>
          <table className="min-w-full border border-gray-600 my-4">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-600 p-2 text-left">Category</th>
                <th className="border border-gray-600 p-2 text-left">Examples</th>
                <th className="border border-gray-600 p-2 text-left">Collected</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-600 p-2">Identifiers</td>
                <td className="border border-gray-600 p-2">Contact names, phone numbers</td>
                <td className="border border-gray-600 p-2">Yes (locally)</td>
              </tr>
              <tr>
                <td className="border border-gray-600 p-2">Audio/Visual Information</td>
                <td className="border border-gray-600 p-2">Voice recordings, call audio</td>
                <td className="border border-gray-600 p-2">Yes (locally)</td>
              </tr>
              <tr>
                <td className="border border-gray-600 p-2">Internet Activity</td>
                <td className="border border-gray-600 p-2">Browsing history, search history</td>
                <td className="border border-gray-600 p-2">No</td>
              </tr>
              <tr>
                <td className="border border-gray-600 p-2">Geolocation</td>
                <td className="border border-gray-600 p-2">Precise location</td>
                <td className="border border-gray-600 p-2">No</td>
              </tr>
              <tr>
                <td className="border border-gray-600 p-2">Professional/Employment Info</td>
                <td className="border border-gray-600 p-2">Job-related information</td>
                <td className="border border-gray-600 p-2">No (unless in recordings)</td>
              </tr>
              <tr>
                <td className="border border-gray-600 p-2">Sensitive Personal Information</td>
                <td className="border border-gray-600 p-2">Contents of communications</td>
                <td className="border border-gray-600 p-2">Yes (locally)</td>
              </tr>
            </tbody>
          </table>

          <h3>11.2 Your CCPA/CPRA Rights</h3>
          <ul>
            <li>
              <strong>Right to Know:</strong> Know what personal information is collected and
              how it is used
            </li>
            <li>
              <strong>Right to Delete:</strong> Request deletion of your personal information
            </li>
            <li>
              <strong>Right to Correct:</strong> Request correction of inaccurate personal
              information
            </li>
            <li>
              <strong>Right to Opt-Out of Sale/Sharing:</strong> Opt-out of the sale or sharing
              of personal information
            </li>
            <li>
              <strong>Right to Limit Use of Sensitive Personal Information:</strong> Limit how
              we use sensitive personal information
            </li>
            <li>
              <strong>Right to Non-Discrimination:</strong> Not be discriminated against for
              exercising your rights
            </li>
          </ul>

          <h3>11.3 We Do Not Sell or Share Your Personal Information</h3>
          <p>
            <strong>Addit does NOT sell your personal information.</strong> We do not exchange
            your data for monetary or other valuable consideration.
          </p>
          <p>
            <strong>Addit does NOT share your personal information for cross-context behavioral
            advertising.</strong>
          </p>
          <p>
            As such, we do not offer an opt-out for sale or sharing, as these activities do not
            occur.
          </p>

          <h3>11.4 Financial Incentives</h3>
          <p>We do not offer financial incentives related to personal information.</p>

          <h3>11.5 Authorized Agents</h3>
          <p>
            You may designate an authorized agent to make requests on your behalf. Authorized
            agents must provide written authorization and verify their identity.
          </p>

          <h3>11.6 Verification</h3>
          <p>
            Since all data is stored locally on your device, you can verify your data and
            exercise your rights directly through the App. For additional verification, we may
            request information to confirm your identity.
          </p>

          <h2>12. Other U.S. State Privacy Laws</h2>

          <h3>12.1 Virginia Consumer Data Protection Act (VCDPA)</h3>
          <p>Virginia residents have rights to access, correct, delete, obtain a copy, and opt-out of targeted advertising and sale of personal data.</p>

          <h3>12.2 Colorado Privacy Act (CPA)</h3>
          <p>Colorado residents have rights to access, correct, delete, obtain a copy, and opt-out of targeted advertising, sale, and profiling.</p>

          <h3>12.3 Connecticut Data Privacy Act (CTDPA)</h3>
          <p>Connecticut residents have similar rights to access, correct, delete, and opt-out.</p>

          <h3>12.4 Utah Consumer Privacy Act (UCPA)</h3>
          <p>Utah residents have rights to access, delete, and opt-out of sale and targeted advertising.</p>

          <h3>12.5 Other State Laws</h3>
          <p>
            We comply with privacy laws in Delaware, Iowa, New Hampshire, New Jersey, Tennessee,
            Minnesota, Maryland, Kentucky, and other states with comprehensive privacy laws.
          </p>
          <p>
            <strong>To exercise rights under any state law:</strong> Use the App's built-in data
            management features or contact us at{' '}
            <a href="mailto:privacy@addit.dev">privacy@addit.dev</a>.
          </p>

          <h2>13. LGPD Compliance (Brazilian Users)</h2>
          <p>
            If you are located in Brazil, you have rights under the Lei Geral de Proteção de
            Dados (LGPD).
          </p>

          <h3>13.1 Your LGPD Rights</h3>
          <ul>
            <li>Confirmation of the existence of processing</li>
            <li>Access to personal data</li>
            <li>Correction of incomplete, inaccurate, or outdated data</li>
            <li>Anonymization, blocking, or deletion of unnecessary or excessive data</li>
            <li>Data portability</li>
            <li>Deletion of data processed with consent</li>
            <li>Information about sharing with third parties</li>
            <li>Information about the possibility of denying consent and its consequences</li>
            <li>Withdrawal of consent</li>
          </ul>

          <h3>13.2 Legal Basis for Processing Under LGPD</h3>
          <p>We process your data based on:</p>
          <ul>
            <li><strong>Consent (Article 7, I):</strong> For optional features requiring permissions</li>
            <li><strong>Contract execution (Article 7, V):</strong> To provide App functionality</li>
            <li><strong>Legitimate interest (Article 7, IX):</strong> For App improvement and security</li>
          </ul>

          <h3>13.3 Contact for LGPD Requests</h3>
          <p>
            Contact our Data Protection Officer at{' '}
            <a href="mailto:dpo@addit.dev">dpo@addit.dev</a>.
          </p>
          <p>
            <strong>Response Time:</strong> We will respond within 15 days as required by LGPD.
          </p>

          <h2>14. PIPEDA Compliance (Canadian Users)</h2>
          <p>
            If you are located in Canada, your personal information is protected under the
            Personal Information Protection and Electronic Documents Act (PIPEDA) and
            applicable provincial laws.
          </p>

          <h3>14.1 Your PIPEDA Rights</h3>
          <ul>
            <li>Access to your personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Withdraw consent for collection, use, or disclosure</li>
            <li>Challenge compliance and lodge complaints with the Privacy Commissioner</li>
          </ul>

          <h3>14.2 PIPEDA Principles</h3>
          <p>We adhere to the ten PIPEDA fair information principles:</p>
          <ul>
            <li><strong>Accountability:</strong> We are responsible for personal information under our control</li>
            <li><strong>Identifying Purposes:</strong> Purposes for collection are identified in this policy</li>
            <li><strong>Consent:</strong> We obtain meaningful consent for processing</li>
            <li><strong>Limiting Collection:</strong> We collect only what is necessary</li>
            <li><strong>Limiting Use, Disclosure, and Retention:</strong> Data is used only for identified purposes</li>
            <li><strong>Accuracy:</strong> We keep data as accurate as necessary</li>
            <li><strong>Safeguards:</strong> We protect data with appropriate security</li>
            <li><strong>Openness:</strong> This policy describes our practices</li>
            <li><strong>Individual Access:</strong> You can access and correct your data</li>
            <li><strong>Challenging Compliance:</strong> You can challenge our compliance</li>
          </ul>

          <h3>14.3 Privacy Commissioner</h3>
          <p>
            You may file a complaint with the Office of the Privacy Commissioner of Canada at{' '}
            <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer">
              https://www.priv.gc.ca
            </a>.
          </p>

          <h2>15. Australian Privacy Act Compliance</h2>
          <p>
            If you are located in Australia, your personal information is protected under the
            Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
          </p>

          <h3>15.1 Your Rights Under APPs</h3>
          <ul>
            <li>Access to your personal information (APP 12)</li>
            <li>Correction of your personal information (APP 13)</li>
            <li>Know how we handle your personal information (APP 1)</li>
            <li>Complain about privacy breaches</li>
          </ul>

          <h3>15.2 Australian Privacy Principles Compliance</h3>
          <ul>
            <li><strong>APP 1 (Open and transparent management):</strong> This policy describes our practices</li>
            <li><strong>APP 3 (Collection):</strong> We collect only necessary information with consent</li>
            <li><strong>APP 5 (Notification):</strong> We notify you about collection at the time of collection</li>
            <li><strong>APP 6 (Use or disclosure):</strong> We use data only for stated purposes</li>
            <li><strong>APP 8 (Cross-border disclosure):</strong> Data may be transferred internationally via third-party services</li>
            <li><strong>APP 11 (Security):</strong> We implement reasonable security measures</li>
          </ul>

          <h3>15.3 Office of the Australian Information Commissioner</h3>
          <p>
            You may lodge a complaint with the OAIC at{' '}
            <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">
              https://www.oaic.gov.au
            </a>.
          </p>

          <h2>16. Call Recording and Privacy</h2>
          <p>
            <strong>IMPORTANT:</strong> The use of call recording features has significant privacy
            implications. You are solely responsible for complying with all applicable laws
            regarding call recording in your jurisdiction.
          </p>

          <h3>16.1 Call Recording Privacy Considerations</h3>
          <ul>
            <li>Audio recordings contain personal data of all parties to the call</li>
            <li>You may have legal obligations to inform other parties about recording</li>
            <li>Third parties have privacy rights in their own voice and statements</li>
            <li>Recordings may contain sensitive personal information</li>
          </ul>

          <h3>16.2 Your Responsibilities</h3>
          <ul>
            <li>Understand and comply with call recording laws in your jurisdiction</li>
            <li>Obtain consent from other parties where required</li>
            <li>Inform parties about recording where required</li>
            <li>Protect recordings from unauthorized access</li>
            <li>Delete recordings when no longer needed</li>
          </ul>

          <h3>16.3 GDPR and Call Recording</h3>
          <p>
            Under GDPR, recording calls with EU/EEA/UK individuals requires a legal basis.
            Consent is typically the most appropriate basis for personal call recording.
            You must be able to demonstrate valid consent if required.
          </p>

          <h2>17. Children's Privacy</h2>
          <p>
            <strong>Age Restriction:</strong> Addit is intended for users who are at least 17
            years of age (18 in some jurisdictions). We do not knowingly collect personal
            information from children.
          </p>

          <h3>17.1 COPPA Compliance (United States)</h3>
          <p>
            We comply with the Children's Online Privacy Protection Act (COPPA). We do not
            knowingly collect personal information from children under 13. If you are a parent
            or guardian and believe your child under 13 has used the App, please contact us
            immediately.
          </p>

          <h3>17.2 Age Verification</h3>
          <p>
            By using the App, you represent that you are at least 17 years of age (or 18 where
            required by law). We do not knowingly allow users under the minimum age to use the App.
          </p>

          <h3>17.3 Parental Rights</h3>
          <p>
            If we learn we have collected personal information from a child under the applicable
            minimum age, we will delete that information promptly. Parents may contact us at{' '}
            <a href="mailto:privacy@addit.dev">privacy@addit.dev</a> regarding children's privacy.
          </p>

          <h2>18. Do Not Track Signals</h2>
          <p>
            We do not track users across third-party websites or services. We do not respond to
            Do Not Track (DNT) signals because we do not engage in tracking activities.
          </p>

          <h2>19. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our
            practices, technology, legal requirements, or other factors.
          </p>

          <h3>19.1 Notification of Changes</h3>
          <ul>
            <li>We will update the "Last updated" date at the top of this policy</li>
            <li>For material changes, we will provide notice through the App or by other means</li>
            <li>Continued use after changes constitutes acceptance</li>
          </ul>

          <h3>19.2 Review of Policy</h3>
          <p>
            We encourage you to review this Privacy Policy periodically. You can always find
            the current version on our website and in the App.
          </p>

          <h2>20. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or
            our data practices, please contact us:
          </p>

          <h3>General Privacy Inquiries</h3>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:privacy@addit.dev">privacy@addit.dev</a>
          </p>

          <h3>Data Protection Officer (GDPR/LGPD)</h3>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:dpo@addit.dev">dpo@addit.dev</a>
          </p>

          <h3>Legal Inquiries</h3>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:legal@addit.dev">legal@addit.dev</a>
          </p>

          <p className="mt-8 text-sm text-gray-400">
            This Privacy Policy is effective as of January 16, 2026, and will remain in effect
            except with respect to any changes in its provisions in the future, which will be
            in effect immediately after being posted on this page.
          </p>
        </div>
      </div>
    </div>
  )
}
