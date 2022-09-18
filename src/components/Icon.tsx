/* eslint-disable react-hooks/rules-of-hooks */
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Flex, Text, IconButton, useColorMode } from '@chakra-ui/react'

import React from 'react'

const Icon = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex align='center' justify='center' height='100vh' direction='column'>
      <Text as='h1' pb='4'>
        Dark & Light Mode
      </Text>
      <IconButton
        _focus={{ _focus: 'none' }} //周りの青いアウトラインが気になる場合に消す方法
        mb={10}
        aria-label='DarkMode Switch'
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} //自分の好みでSunアイコンはreact-iconsを使用しています
        onClick={toggleColorMode}
      />
    </Flex>
  )
}

export default Icon
