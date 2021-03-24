import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import cosmicjsLogo from '../../static/cosmicjs.svg'
import gatsbyLogo from '../../static/gatsby.png'
import kalakrutLogo from '../../static/48e394c0-7de1-11eb-bca3-dfdf3200bafd-PicsArt10-26-10.17.00.png'
import { rhythm, scale } from '../utils/typography'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

export default ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        cosmicjsSettings(slug: { eq: "general" }) {
          metadata {
            site_heading
            homepage_hero {
              local {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const siteTitle = data.cosmicjsSettings.metadata.site_heading
      const homgePageHero =
        data.cosmicjsSettings.metadata.homepage_hero.local.childImageSharp.fluid
      let header

      let rootPath = `/`
      let postsPath = `/posts`
      if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
        rootPath = __PATH_PREFIX__ + `/`
        postsPath = __PATH_PREFIX__ + `/posts`
      }

      if (location.pathname === rootPath || location.pathname === postsPath) {
        header = (
          <BackgroundImage
            Tag="div"
            className="post-hero"
            fluid={homgePageHero}
            backgroundColor={`#007ACC`}
            style={{
              height: rhythm(14),
              position: 'relative',
              marginBottom: `${rhythm(1.5)}`,
            }}
          >
            <h1
              style={{
                ...scale(1.3),
                position: 'absolute',
                textAlign: 'center',
                left: 0,
                right: 0,
                top: rhythm(4),
                marginTop: '0',
                height: rhythm(2.5),
              }}
            >
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                to={'/'}
              >
                {siteTitle}
              </Link>
            </h1>
          </BackgroundImage>
        )
      } else {
        header = (
          <h3
            style={{
              fontFamily: 'Montserrat, sans-serif',
              marginTop: 0,
              marginBottom: rhythm(-1),
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(24),
              paddingTop: `${rhythm(1.5)}`,
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              {siteTitle}
            </Link>
          </h3>
        )
      }
      return (
        <div>
          {header}
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(24),
              padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(3 / 4)}`,
              minHeight: 'calc(100vh - 42px)',
            }}
          >
            {children}
          </div>
          <footer
            style={{
              textAlign: 'center',
              padding: `0 20px 80px 0`,
            }}
          >
            powered by&nbsp;
            <a
              target="_blank"
              href="https://gatsbyjs.org"
              style={{
                color: '#191919',
                boxShadow: 'none',
              }}
            >
              <img
                src={gatsbyLogo}
                alt="Gatsby JS"
                style={{
                  width: '20px',
                  margin: '0 4px -3px 2px',
                }}
              />
              <strong>Gatsby</strong>
            </a>
            &nbsp;,&nbsp;
            <a
              target="_blank"
              href="https://cosmicjs.com"
              style={{
                color: '#191919',
                boxShadow: 'none',
              }}
            >
              <img
                src={cosmicjsLogo}
                alt="Cosmic JS"
                style={{
                  width: '18px',
                  margin: '0 4px -2px 5px',
                }}
              />
              <strong>Cosmic JS</strong>
            </a>
            &nbsp;and&nbsp;
            <a
              target="_blank"
              href="https://kalakrut.business.site"
              style={{
                color: '#ff0000',
                boxShadow: 'none',
              }}
            >
              <img
                src={kalakrutLogo}
                alt="KalaKrut Platform"
                style={{
                  width: '20px',
                  margin: '0 4px 1px 5px',
                }}
              />
             <strong>KalaKrut Platform</strong>
            </a>
          </footer>
        </div>
      )
    }}
  />
)
