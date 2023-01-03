import Head from 'next/head'
import {
    GetServerSidePropsContext,
    GetServerSideProps,
    InferGetServerSidePropsType,
    NextPage,
} from 'next'
import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
import {SSR_WeatherAPI} from "@Api";
import {ForeCastsResponse, ForeCast} from "@Requests/getWeather";
import styles from '@Styles/[lon].module.css';

type ForeCastsProps = {
    forecasts: ForeCastsResponse
}

export const getServerSideProps: GetServerSideProps<ForeCastsProps> = async (context: GetServerSidePropsContext) => {
    const response: Response = await SSR_WeatherAPI.default(context.params)
    const forecasts = await response.json() as unknown as ForeCastsResponse

    return {
        props: {
            forecasts
        },
    }
}

const ForeCasts: NextPage<ForeCastsProps> = ({ forecasts }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    // console.log('ForeCasts::render - forecasts: ', forecasts)

    return (
        <>
            <Head>
                <title>Forecasts</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.grid}>

                {
                    forecasts.data?.map((f: ForeCast) => {
                        return (
                            <Link
                                key={f.ts}
                                href={`/forecasts/${f.ts}`}
                                className={styles.card}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h2 className={inter.className}>
                                    Wind direction: {f.wind_cdir}
                                </h2>
                                <p className={inter.className}>
                                    Desc: {f.weather.description}
                                </p>
                            </Link>
                        )
                    })
                }

                </div>
            </main>
        </>
    )
}

export default ForeCasts