import React from 'react'

type Props = {
  children: React.ReactNode
}

function DefaultLayout({ children }: Props) {
  return <div>{children}</div>
}

export default DefaultLayout
