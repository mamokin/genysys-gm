import {
  app,
  BrowserWindow
} from 'electron';
import Vue from 'vue';
import App from './App.vue';
import router from './router'; // eslint-disable-line
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

let win;

function createWindow() {
  // Create the browser window
  win = new BrowserWindow({
    width: 800,
    height: 600
  });

  // Open the DevTools.
  win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('close', () => {
    // Dereference the window object, usually you would store windows in an array if your app
    // supports multi windows, this is the time when you should delete the corresponding element.

  });

  // load the index.html of the app
  win.loadFile('../public/index.html');
}

app.on('ready', createWindow);
