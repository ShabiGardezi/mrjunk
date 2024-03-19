import { Fragment } from 'react'
import { getAllItems, getFeaturedItems } from '../lib/items-util'
import HeaderOne from '../components/header/header-1'
import Hero from '../components/home-page/hero'
import Services from '../components/home-page/services'
import About from '../components/home-page/about'
import Testimonial from '../components/home-page/testimonial'
import Craigslist from '../components/home-page/craigslist'
import LatestProject from '../components/home-page/latest-project'
import SEO from '../../next-seo.config.js'
import { NextSeo } from 'next-seo'
import { createClient } from 'next-sanity'
import HeaderAbove from '@/components/header/header-above'

const client = createClient({
  projectId: '3ykwrou0',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-08-31' // use a UTC date string
})

function HomePage(props) {
  return (
    <Fragment>
      <NextSeo {...SEO} />
      <HeaderOne />
      <Hero heroItems={props.heroItems} />
      <Services services={props.services} />
      <Craigslist />
      <LatestProject projects={props.projects} />
      <About about={props.logo} />
      <Testimonial testimonialItems={props.testimonialItems} />
    </Fragment>
  )
}

export async function getServerSideProps() {
  const heroItems = getAllItems('heros')
  const posts = getAllItems('posts')
  const projects = getAllItems('projects')
  const services = getAllItems('services')
  const pricingItems = getAllItems('pricing')
  const testimonialItems = getAllItems('testimonial')
  const brandItems = getAllItems('brands')
  const LatestProject = getFeaturedItems(projects)
  const FeaturedPost = getFeaturedItems(posts)
  const logo = await client.fetch(`*[_type == "about"]`)

  return {
    props: {
      heroItems,
      projects: LatestProject,
      posts: FeaturedPost,
      services,
      pricingItems,
      testimonialItems,
      brandItems,
      logo
    }
  }
}

export default HomePage
