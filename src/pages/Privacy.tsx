export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="glass rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: January 15, 2026</p>

        <div className="legal-content">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Addit ("we," "our," or "us"). Addit is a mobile application that provides
            call recording, voice memo, and AI-powered transcription services. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you use
            our mobile application.
          </p>
          <p>
            Please read this Privacy Policy carefully. By using Addit, you agree to the collection
            and use of information in accordance with this policy.
          </p>

          <h2>2. Information We Collect</h2>

          <h3>2.1 Audio Recordings</h3>
          <p>
            Addit records audio from phone calls and voice memos that you choose to record.
            All recordings are stored locally on your device and are not uploaded to any server
            operated by Addit.
          </p>

          <h3>2.2 Contact Information</h3>
          <p>
            With your permission, Addit accesses your device's contacts to identify callers and
            display caller names with recordings. This data is accessed locally and is not
            transmitted to external servers.
          </p>

          <h3>2.3 Calendar Access</h3>
          <p>
            With your permission, Addit can create calendar events based on information extracted
            from your recordings. Calendar data is accessed locally to add events you approve.
          </p>

          <h3>2.4 Device Information</h3>
          <p>
            We may collect device information such as device model and operating system version
            solely for app functionality and troubleshooting purposes.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Record and store audio as requested by you</li>
            <li>Transcribe audio recordings using third-party services</li>
            <li>Extract actionable items (calendar events, reminders, contacts) using AI services</li>
            <li>Display caller identification information</li>
            <li>Create calendar events on your behalf</li>
            <li>Provide search functionality across your recordings</li>
          </ul>

          <h2>4. Third-Party Services</h2>
          <p>
            Addit uses the following third-party services for transcription and AI processing.
            When you use these features, your audio data or transcriptions may be sent to these
            services using API keys that you provide:
          </p>

          <h3>4.1 Transcription Services</h3>
          <ul>
            <li>
              <strong>Deepgram</strong> - Speech-to-text transcription.
              <a href="https://deepgram.com/privacy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>
            </li>
            <li>
              <strong>Gladia</strong> - Speech-to-text transcription.
              <a href="https://www.gladia.io/privacy-policy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>
            </li>
          </ul>

          <h3>4.2 AI Extraction Services</h3>
          <ul>
            <li>
              <strong>OpenAI</strong> - AI-powered extraction of calendar events, reminders, and contacts.
              <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>
            </li>
            <li>
              <strong>Google Gemini</strong> - AI-powered extraction of calendar events, reminders, and contacts.
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>
            </li>
          </ul>

          <p className="mt-4">
            <strong>Important:</strong> You provide your own API keys for these services. Addit does not
            have access to your accounts with these providers. Data sent to these services is governed
            by their respective privacy policies.
          </p>

          <h2>5. Data Storage and Security</h2>

          <h3>5.1 Local Storage</h3>
          <p>
            All your recordings, transcriptions, and extracted data are stored locally on your device.
            Addit does not operate servers that store your personal data.
          </p>

          <h3>5.2 API Key Security</h3>
          <p>
            Your third-party API keys are stored securely using your device's native secure storage
            (iOS Keychain or Android Keystore) with encryption.
          </p>

          <h3>5.3 Data Encryption</h3>
          <p>
            Data transmitted to third-party services is encrypted in transit using HTTPS/TLS protocols.
          </p>

          <h2>6. Your Rights and Choices</h2>

          <h3>6.1 Access Your Data</h3>
          <p>
            All your data is stored on your device. You can view all recordings, transcriptions,
            and extracted items directly within the app.
          </p>

          <h3>6.2 Delete Your Data</h3>
          <p>
            You can delete individual recordings or all data from within the app's settings.
            Deletion is permanent and cannot be undone.
          </p>

          <h3>6.3 Export Your Data</h3>
          <p>
            You can export your data from the app in portable formats for your records.
          </p>

          <h3>6.4 Revoke Permissions</h3>
          <p>
            You can revoke app permissions (microphone, contacts, calendar) at any time through
            your device's settings.
          </p>

          <h2>7. GDPR Compliance (European Users)</h2>
          <p>If you are located in the European Economic Area (EEA), you have the following rights:</p>
          <ul>
            <li><strong>Right of Access:</strong> Request access to your personal data</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
            <li><strong>Right to Restrict Processing:</strong> Request limitation of processing</li>
            <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
            <li><strong>Right to Object:</strong> Object to processing of your data</li>
          </ul>
          <p>
            Since all data is stored locally on your device, you have full control over your data.
            To exercise these rights, simply use the app's built-in data management features.
          </p>

          <h2>8. CCPA Compliance (California Users)</h2>
          <p>If you are a California resident, you have the following rights under the CCPA:</p>
          <ul>
            <li><strong>Right to Know:</strong> Know what personal information is collected</li>
            <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
            <li><strong>Right to Opt-Out:</strong> Opt-out of the sale of personal information</li>
            <li><strong>Right to Non-Discrimination:</strong> Not be discriminated against for exercising your rights</li>
          </ul>
          <p>
            <strong>Note:</strong> Addit does not sell your personal information. All data remains
            on your device under your control.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Addit is not intended for use by children under the age of 13. We do not knowingly
            collect personal information from children under 13. If you are a parent or guardian
            and believe your child has provided us with personal information, please contact us.
          </p>

          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes. Changes
            are effective when posted on this page.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please
            contact us at:
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:privacy@addit.dev">privacy@addit.dev</a>
          </p>
        </div>
      </div>
    </div>
  )
}
