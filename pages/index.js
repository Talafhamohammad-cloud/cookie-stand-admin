import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { useAuth } from '../context/auth'
export default function CookieStandAdmin() {
  const { user, login, logout } = useAuth();
  return (
    <div className="bg-green-50">
      
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main />
      {user? <Main /> : <LoginForm/> }
      <Footer/>


    </div>
  )
}