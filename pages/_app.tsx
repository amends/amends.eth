import '../styles/globals.css'
import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { Box, Center, Button, Flex, Container, Icon, Heading, Text, useColorModeValue, Link, Image } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { CardContent } from '../src/components/CardContent'
import { CardWithAvatar } from '../src/components/CardWithAvatar'
import { UserInfo } from '../src/components/UserInfo'
import { HiOutlineMail } from 'react-icons/hi'
import { FaPhoneAlt, FaTelegramPlane, FaTwitter } from 'react-icons/fa'
import { GiSailboat } from 'react-icons/gi'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
        <Box as="section" pt="20" pb="12" position="relative">
    <Box position="absolute" inset="0" height="32" bg="purple.600" />
    <CardWithAvatar
      maxW="xl"
      avatarProps={{
        src: 'https://ipfs.io/ipfs/QmTjTPPNyZ3Jxoy85SXYfbagyHnvTPoLWvnG6p5gvsXRKg',
        name: 'amends',
      }}
    >
      <CardContent>
        <Heading size="lg" fontWeight="extrabold" letterSpacing="tight">
          amends
        </Heading>
        <Text color={useColorModeValue('gray.600', 'gray.400')}>
          Crypto Thinktank
          </Text>
          <Center>
        <UserInfo location="Cryptoverse" website="amends.eth" memberSince="Since 2012" />
        </Center>
        <Heading size="md" fontWeight="bold" letterSpacing="tight" mt="5">
          About
          </Heading>
          <Text fontcolor={useColorModeValue('gray.600', 'gray.400')} mt="1.5">
            I've been involved with Cryprocurrency since 2012 when I was first 
            fascinated by the original Bitcoin Whitepaper. More recently I've been working
            in the Binance Smart Chain space to further safe and transparent projects that
            focus on user education and empowerment.
          </Text>
          <Heading size="md" fontWeight="bold" letterSpacing="tight" mt="5">
          Connect With Me
          </Heading>
          <Text fontcolor={useColorModeValue('gray.600', 'gray.400')} mt="2.5">
          <Link href="https://t.me/amendss" color="purple.600">
            <Icon as={FaTelegramPlane} mt="-1.5" mr="1.5" /> 
            amendss
            </Link>
          </Text>
          <Text fontcolor={useColorModeValue('gray.600', 'gray.400')} mt="2.5">
          <Link href="https://twitter.com/amendsBSC" color="purple.600">
          <Icon as={FaTwitter} mt="-1.5" mr="1.5" /> 
          amendsBSC
            </Link>
          </Text>
          <Text fontcolor={useColorModeValue('gray.600', 'gray.400')} mt="2.5">
          <Link href="mailto:amends@protonmail.com" color="purple.600">
          <Icon as={HiOutlineMail} mt="-1.5" mr="1.5" /> 
          amends@protonmail.com
            </Link>
          </Text>
          <Text fontcolor={useColorModeValue('gray.600', 'gray.400')} mt="2.5">
          <Link href="https://opensea.com/amends" color="purple.600">
          <Icon as={GiSailboat} mt="-1.5" mr="1.5" /> 
          amends
            </Link>
          </Text>
          <Heading size="md" fontWeight="bold" letterSpacing="tight" mt="5">
          Projects I'm Working With
          </Heading>
          <Center>
          <Image src="https://ipfs.io/ipfs/QmYQq3py8Zwtky7PGiipAf1wzvtVUF92CcYswkf9tma3PW" borderRadius="full" boxSize="25px" mt="1.5" />
          <Text fontcolor={useColorModeValue('gray.600', 'gray.400')} mt="2.5" ml="2">
          <Link href="https://blizzard.money" color="purple.600">
          Blizzard.Money
            </Link>
          </Text>
          </Center>
          <Center>
          <Image src="https://ipfs.io/ipfs/QmQkWBsyFwutbVBQLsYZn7RanwPzw6KH6vY3jG3L5BVhjX" borderRadius="full" boxSize="25px" mt="1.5" />
          <Text fontcolor={useColorModeValue('gray.600', 'gray.400')} mt="2.5" ml="2">
          <Link href="https://revengecat.com" color="purple.600">
          RevengeCat
            </Link>
          </Text>
          </Center>
          <Center>
          <Image src="https://ipfs.io/ipfs/QmV2xoNDXvLcKqAo38xJabZxmwoBGVWJzxhe4ny8Y6Rfud" borderRadius="full" boxSize="25px" mt="1.5" />
          <Text fontcolor={useColorModeValue('gray.600', 'gray.400')} mt="2.5" ml="2">
          <Link href="https://safermoon.net" color="purple.600">
          SAFERmoon
            </Link>
          </Text>
          </Center>
      </CardContent>
    </CardWithAvatar>
  </Box>
  </ChakraProvider>
    )
}
export default MyApp
