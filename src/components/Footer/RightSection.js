import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Column,
  InlineBlock,
  P,
} from 'serverless-design-system/src'

import NavLink from '../NavLink'
import NewsLetterForm from '../NewsLetterForm'
import {
  facebookHandle,
  instagramHandle,
  twitterHandle,
  githubHandle,
  linkedinHandle
} from 'src/constants/urls'
import facebookGrayIcon from 'src/assets/images/facebook.svg'
import instagramGrayIcon from 'src/assets/images/instagram.svg'
import twitterGrayIcon from 'src/assets/images/twitter.svg'
import githubGrayIcon from 'src/assets/images/github-gray.svg'
import linkedinGrayIcon from 'src/assets/images/linkedin-gray.svg'
import facebookWhiteIcon from 'src/assets/images/facebook-white.svg'
import instagramWhiteIcon from 'src/assets/images/instagram-white.svg'
import twitterWhiteIcon from 'src/assets/images/twitter-white.svg'
import githubWhiteIcon from 'src/assets/images/github-white.svg'
import linkedinWhiteIcon from 'src/assets/images/linkedin-white.svg'

const SocialIconWrapper = styled(InlineBlock)`
  & > a > div {
    height: 20px;
    width: 20px;
    background-image: url(${(props) => (props.icon)});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  & > a:hover > div {
    background-image: url(${(props) => (props.hoverIcon)});
  }
`

const SocialIcon = ({ to, icon, hoverIcon }) => (
  <SocialIconWrapper
    icon={icon}
    hoverIcon={hoverIcon}
    mr={24}
  >
    <NavLink to={to} crossDomain>
      <InlineBlock />
    </NavLink>
  </SocialIconWrapper>
)

// Renders the subscribe column
const Subscribe = () => (
  <Column
    width={[1, 1, 0.35]}
    order={['1', '1', '2']}
    pl={[0, 0, 3]}
  >
    <Box mb={4}>
      <P color='white'>
        Join our newsletter and get the latest news about Serverless products
        and happenings. #noSpamWePromise
      </P>
    </Box>
    <NewsLetterForm emailFieldProps={{ placeholder: 'email address' }} />
    <Box py={3}>
      <SocialIcon
        to={facebookHandle}
        icon={facebookGrayIcon}
        hoverIcon={facebookWhiteIcon}
      />
      <SocialIcon
        to={instagramHandle}
        icon={instagramGrayIcon}
        hoverIcon={instagramWhiteIcon}
      />
      <SocialIcon
        to={twitterHandle}
        icon={twitterGrayIcon}
        hoverIcon={twitterWhiteIcon}
      />
      <SocialIcon
        to={githubHandle}
        icon={githubGrayIcon}
        hoverIcon={githubWhiteIcon}
      />
      <SocialIcon
        to={linkedinHandle}
        icon={linkedinGrayIcon}
        hoverIcon={linkedinWhiteIcon}
      />
    </Box>
  </Column>
)

export default Subscribe
