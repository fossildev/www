import React from "react"
import Helmet from 'react-helmet';
import Layout from '../components/indexLayout';

const GoImport = ({ location }) => {
    let goPackageName = location.pathname.replace("/goimport", "")
    let goPackage = `${location.hostname}${goPackageName}`
    let gitRepository = `https://github.com/fossildev${goPackageName}`
    return (
        <Layout>
            <Helmet>
                <meta
                    name="go-import"
                    content={`${goPackage} git ${gitRepository}`}
                />
            </Helmet>
            <div className="page">
                <div className="container">
                    <p>Go Import for {gitRepository}</p>
                </div>
            </div>
        </Layout>
    )
}
export default GoImport