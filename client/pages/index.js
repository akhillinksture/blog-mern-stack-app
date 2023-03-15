import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material"
import Posts from "./components/posts/Posts"
import Form from "./components/form/Form"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Container>
          <AppBar position="static">
            <Typography variant="h2" align="center">BLOG</Typography>
          </AppBar>
          <Grow in>
            <Container>
              <Grid type="container" justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Posts />
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Form />
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
      </main>
    </>
  )
}