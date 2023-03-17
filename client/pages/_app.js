import '@/styles/globals.css'
import { Provider } from "react-redux"
import { legacy_createStore as createStore,applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk"
import reducer from './redux/reducers'


const store =  createStore(reducer, compose(applyMiddleware(thunk)))
export default function App({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}