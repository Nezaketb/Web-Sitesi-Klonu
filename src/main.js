import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import VueApollo from 'vue-apollo'

const config = {
    apiKey: "AIzaSyCbxh9zN9rS6gvFemSNPNGSCc4bEjUYfMU",
    authDomain: "webmadamecoco.firebaseapp.com",
    projectId: "webmadamecoco",
    storageBucket: "webmadamecoco.appspot.com",
    messagingSenderId: "256579224418",
    appId: "1:256579224418:web:a9789d3488c2c67547623b",
    graphqlUrl: "https://blue-surf-570075.us-east-1.aws.cloud.dgraph.io/graphql"
};

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3020/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
  })



// Initialize Firebase
initializeApp(config)
const db = getFirestore();
const at=getAuth();
const realDb = getDatabase();
const st=getStorage();

createApp(App).use(apolloProvider).use(store).use(router).mount('#app')
