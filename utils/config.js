const config = {
  development: {
    api: 'http://localhost:8080'
   },

  production: {
    // api: 'https://api-tmarr.rhcloud.com'
    api: 'https://api.sharewalks.com'
  },
  googleApiKey: 'AIzaSyDmE6MtwHWYwR1C-ketRL9vZcbrMlK0ps0',
  mapzenApiKey: 'mapzen-sAkpydF',
  mapboxApiKey: 'pk.eyJ1IjoidGVycnljb2NvIiwiYSI6ImNpd3VjZDg1djAwdTEydHFydDVhN3NmNXIifQ.mH05pbOoxVeyzPKas0Gbig',
  mapquestKey: 'GVTzKzwMDTCKBu1S2Vx0RaN0XaWUYTlj',
  mapquestSecret: 'uIigGYgRCE0XWs63',
  ver: '0.1.3'
};

export function getVer() {
  return config.ver;
}

export default config;