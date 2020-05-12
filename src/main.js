import Vue from 'vue'
import App from './App.vue'
import './tailwind.css'
import router from './router'
import store from './store/store.js'
import VueCookies from 'vue-cookies'
import JsonCSV from 'vue-json-csv'

import { library } from '@fortawesome/fontawesome-svg-core'

import { 
  faFacebook,
  faFacebookF,
  faInstagram,
  faLine,
  faTwitter,
  faWhatsapp,
  faYoutubeSquare
} from '@fortawesome/free-brands-svg-icons'

import { 
  faBell,
  faCalendarAlt,
  faClock,
  faClone,
  faEnvelope,
  faHourglass,
  faNewspaper
} from '@fortawesome/free-regular-svg-icons'

import { 
  faAngleLeft,
  faAngleDown,
  faAngleRight,
  faArrowRight,
  faBars,
  faBriefcase,
  faCog,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faFemale,
  faFont,
  faHome,
  faImages,
  faLink,
  faMapMarkerAlt,
  faMale,
  faPlay,
  faPhone,
  faReply,
  faSearch,
  faShoppingCart,
  faSignInAlt,
  faStoreAlt,
  faSpinner,
  faTag,
  faTags,
  faTimes,
  faUserCircle,
  faUserSecret
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faArrowRight,
  faBars, 
  faBell,
  faBriefcase,
  faCalendarAlt,
  faChevronDown, 
  faChevronLeft,
  faChevronRight, 
  faChevronUp,
  faClock, 
  faClone,
  faCog,
  faEnvelope, 
  faFemale,
  faFacebook,
  faFacebookF,
  faFont,
  faHome,
  faHourglass,
  faImages,
  faInstagram,
  faLine,
  faLink,
  faMapMarkerAlt,
  faMale,
  faNewspaper,
  faPlay,
  faPhone, 
  faReply,
  faSearch, 
  faShoppingCart, 
  faSignInAlt, 
  faStoreAlt,
  faSpinner,
  faTag,
  faTags,
  faTimes,
  faTwitter,
  faUserCircle, 
  faUserSecret,
  faWhatsapp,
  faYoutubeSquare
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueCookies);

Vue.component('downloadCsv', JsonCSV);
Vue.component('app-nav', () => import('./components/Navigasi'))
new Vue({
  router,
  store,
  created() {
    this.$store.dispatch('employee/fetchEmployee')
    this.$store.dispatch('attendance/fetchAttendance')
  },
  render: h => h(App)
}).$mount('#app')