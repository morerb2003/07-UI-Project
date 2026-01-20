import React from 'react'
import Section1 from './component/section1/section1'
import Section2 from './component/section2/section2'

const App = () => {

  const users =[
    {img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      inrto:'',
      color:'bg-gradient-to-r from-purple-500 to-pink-500',
      tag:'Satisfied'
    },
    {img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      inrto:'',
      color:'bg-gradient-to-r from-blue-500 to-cyan-400',
      tag:'Underserved'
    },
    {img:'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      inrto:'',
      color:'bg-gradient-to-r from-green-500 to-emerald-400',
      tag:'Underbanked'
    },
    {img:'https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      inrto:'',
      color:'bg-gradient-to-r from-orange-500 to-red-500',
      tag:'Underserved'
    },
  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
