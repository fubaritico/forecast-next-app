import Head from 'next/head'
import {GetServerSidePropsContext, GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next'
import { Inter } from '@next/font/google'
import styles from '../../../styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'

import {ForeCasts, ForeCast} from "../../../lib/getWeather";
import {ParsedUrlQuery} from "querystring";
// interface ParsedUrlQuery extends NodeJS.Dict<string | string[]> {}

type ForeCastsProps = {
    forecasts: ForeCasts
}

/**
 * Issues when getting query parameters
 * @param params ParsedUrlQuery
 */
function getUrlSearchParams(params?: ParsedUrlQuery): URLSearchParams {
    const urlSearchParams = new URLSearchParams()

    if(params) {
        for (const prop in params) {
            urlSearchParams.append(prop, params[prop] as string)
        }
    }

    return urlSearchParams
}

export const getServerSideProps: GetServerSideProps<ForeCastsProps> = async (context: GetServerSidePropsContext) => {
    const response: Response = await fetch("http://127.0.0.1:3000/api/forecast/3hourly?" + getUrlSearchParams(context.params), {
        method: 'GET'
    })

    const forecasts = await response.json() as unknown as ForeCasts

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