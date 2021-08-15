import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, ButtonGroup } from "@chakra-ui/react"

const Home: NextPage = () => {
    return (
        <iframe src='https://opensea.io/amends?embed=true'
                width='100%'
                height='100%'
                frameBorder='0'
                allowFullScreen></iframe>
    )
}

export default Home
