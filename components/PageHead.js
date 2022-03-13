import Head from "next/head"

const PageHead = () => {
  return (
    <Head>
        <title>Edvora</title>
        <meta property="og:title" content='Ride Booking' key="title" />
        <meta name="description" content="A Ride Booking Website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

export default PageHead