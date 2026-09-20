/** Everything that changes per release lives here. */
export const config = {
  version: '0.1.2',
  /** Our own server. GitHub's asset CDN stalls on some mobile networks here,
   *  and this is the same host the app already talks to. */
  apkUrl: 'https://srv1937487.hstgr.cloud/dl/kabtin.apk',
  /** Mirror, for anyone the server is slow for. */
  apkMirrorUrl: 'https://github.com/aistam379-hub/kabtin/releases/latest/download/kabtin.apk',
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
