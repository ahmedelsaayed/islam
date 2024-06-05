import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Navbar from './components/Navbar/Navbar'
import { Header } from './components/Header/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Hadith } from './components/Ahadith/Hadith'
import { Collection } from './components/collectio/Collection'
import { Muslim } from './components/muslim/Muslim'
import { Tirmidzi } from './components/Tirmidzi/Tirmidzi'
import { Malik } from './components/malik/Malik'
import { Daood } from './components/daood/Daood'
import { Magah } from './components/magah/Magah'
import { Hanbl } from './components/hanbl/Hanbl'
import { Category } from './components/category/Category'
import { Quraan } from './components/quran/Quraan'
import { Sheet } from './components/Sheet/Sheet'
import Azkar from './components/Azkar/Azkar'
import { Salah } from './components/Salah/Salah'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import '../src/jquery-3.7.1.min.js'
function App({close}) {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
       <Route path='/' element= {<Header close={close}/>} />
       <Route path='/Ahadith' element= {<Collection/>} />
       <Route path='/hadith' element= {<Hadith/>} />
       <Route path='/muslim' element= {<Muslim/>} />
       <Route path='/tirmidzi' element= {<Tirmidzi/>} />
       <Route path='/malik' element= {<Malik/>} />
       <Route path='/daood' element= {<Daood/>} />
       <Route path='/magah' element= {<Magah/>} />
       <Route path='/ahmed' element= {<Hanbl/>} />
       <Route path='/times' element= {<Salah/>} />
       <Route path='/category' element= {<Category/>} />
       <Route path='/quran' element= {<Quraan/>} />
       <Route path='/contact' element= {<Contact/>} />
       <Route path='/quran/:number' element= {<Sheet/>} />
       <Route path='/quran/tafsir/:number' element= {<Azkar/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
