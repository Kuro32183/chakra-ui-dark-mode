import { IconButton, useColorMode, Text, Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Icon from '../components/Icon'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
      <Icon />
    </Box>
  )
}

export default Home
