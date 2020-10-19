import Head from "next/head"
import Link from "next/link"

const HeadSetting = (props) => {
  const { title, children } = props
  return (
    <Head>
      <title>2048 on web</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
  );
}
export default HeadSetting