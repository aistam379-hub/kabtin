/** Everything that changes per release lives here. */
export const config = {
  version: '0.1.0',
  /** Always the newest release — uploading a new APK updates the button by itself. */
  apkUrl: 'https://github.com/aistam379-hub/kabtin/releases/latest/download/kabtin.apk',
  apkSizeMb: '47',
  minAndroid: '7.0',
  githubUrl: 'https://github.com/aistam379-hub/kabtin',
  contactEmail: '',
  /** Real screenshots from the phone — dropped into public/shots/. */
  shots: {
    welcome: './shots/01-welcome.png',
    onboarding: './shots/03-basics.png',
    chat: '',
    meal: '',
    today: '',
  },
};
