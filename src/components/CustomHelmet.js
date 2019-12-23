import React from 'react'
import Helmet from 'react-helmet';
import { Location } from '@reach/router'

const CustomHelmet = ({ location, page, image }) => (
    <Helmet>
        <title>{page.title}</title>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta
            name="go-import"
            content={`${location.host}${location.pathname} git https://github.com/fossildev${location.pathname}`}
        />
        <meta name="twitter:site" content="@sosc" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SOSC" />
        <link
            rel="canonical"
            href={page.siteUrl}
        />
        {image && (
            <meta
                property="og:image"
                content={image}
            />
        )}
        <html lang="en" />
    </Helmet>
)

const WithLocation = ComponentToWrap => props => (
    <Location>
        {({ location }) => (
            <ComponentToWrap
                {...props}
                location={location}
            />
        )}
    </Location>
)

export default WithLocation(CustomHelmet)