import Prismic from '@prismicio/client';
const apiEndpoint = 'https://apapacho.cdn.prismic.io/api/v2';

const PRISMIC_TOKEN = "MC5ZSnJNWVJFQUFDQUFPQTg0.77-9Du-_ve-_vXBBb--_ve-_ve-_ve-_ve-_ve-_vVoSH--_vSQFTO-_ve-_vUPvv73vv73vv73vv71OcX5hHA"
export async function get() {
    const api = await Prismic.getApi(apiEndpoint, {
        accessToken: PRISMIC_TOKEN
    })
    const response = await api.query(
        Prismic.Predicates.at('document.type', 'blog_posts')
    )

    return {
        body: {
            posts: response
        }
    }

}