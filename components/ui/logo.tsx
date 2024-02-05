import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href="/">
      <div className='font-bold text-3xl dark:text-white text-slate-900 py-4'>
        ChatApp
      </div>
    </Link>
  )
}

export default Logo
