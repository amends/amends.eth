import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AspectRatio, Button, ButtonGroup } from "@chakra-ui/react"

const Home: NextPage = () => {
    return (
        <AspectRatio ratio={16 / 9}>
            <iframe
            src="https://opensea.io/amends?embed=true"
        
            />
        </AspectRatio>
    )
}
export default Home