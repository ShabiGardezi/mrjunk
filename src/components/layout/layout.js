import { Fragment } from 'react'
import Footer from './footer'
import HeaderAbove from '../header/header-above'

export * from '../../components/scroll'

function Layout(props) {
  return (
    <Fragment>
      <HeaderAbove />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
