import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../Views/HomeView.vue'
import AboutView from '../Views/AboutView.vue'
import EventsView from '../Views/EventsView.vue'
import DonationView from '../Views/DonationView.vue'
import ContactView from '../Views/ContactView.vue'
import GalleryView from '../Views/GalleryView.vue'
import LocationView from '../Views/LocationView.vue'
import SermonView from '../Views/SermonView.vue'
import AdminDashboardView from '../Views/AdminDashboardView.vue'
import NotFoundView from '../Views/NotFoundView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/events', name: 'Events', component: EventsView },
  { path: '/donate', name: 'Donate', component: DonationView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/gallery', name: 'Gallery', component: GalleryView },
  { path: '/location', name: 'Location', component: LocationView },
  { path: '/sermons', name: 'Sermons', component: SermonView },
  { path: '/admin', name: 'Admin', component: AdminDashboardView },
  { path: '/:pathMatch(.*)*', name: 'NotFound',component: NotFoundView }
]
export default createRouter({
  history: createWebHistory(),
  routes
})
