import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                {/* 使用 Docker Hub 的 favicon */}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
            <Main />
            <NextScript />
            <script charSet="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script>
            <script dangerouslySetInnerHTML={{
                __html: `LA.init({id:"${process.env.LA_ID}",ck:"${process.env.LA_CK}"})`
            }} />
            </body>
        </Html>
    )
}
