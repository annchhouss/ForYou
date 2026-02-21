import {watch} from 'vue'
import {useRoute} from 'vue-router'
import {getSeoByPath} from '@models/seoData'

export const useSeo = () => {
    const route = useRoute()

    const applySeo = (seo) => {
        if (!seo) return

        if (seo.title) document.title = seo.title

        if (seo.description) {
            setMeta('name', 'description', seo.description)
        }

        if (seo.url) {
            setCanonical(seo.url)
        }

        if (seo.title) setMeta('property', 'og:title', seo.title)
        if (seo.description) setMeta('property', 'og:description', seo.description)
        if (seo.image) {
            const imageUrl = seo.image.startsWith('http') ? seo.image : `https://ForYou.com${seo.image}`
            setMeta('property', 'og:image', imageUrl)
        }
        if (seo.url) setMeta('property', 'og:url', seo.url)
        if (seo.type) setMeta('property', 'og:type', seo.type)
        setMeta('property', 'og:site_name', 'Для Тебя')

        if (seo.favicon) setFavicon(seo.favicon)
    }

    const setMeta = (attr, value, content) => {
        let tag = document.querySelector(`meta[${attr}="${value}"]`)
        if (!tag) {
            tag = document.createElement('meta')
            tag.setAttribute(attr, value)
            document.head.appendChild(tag)
        }
        tag.setAttribute('content', content)
    }

    const setCanonical = (url) => {
        let link = document.querySelector("link[rel='canonical']")
        if (!link) {
            link = document.createElement('link')
            link.rel = 'canonical'
            document.head.appendChild(link)
        }
        link.href = url
    }

    const setFavicon = (path) => {
        let link = document.querySelector("link[rel*='icon']")
        if (!link) {
            link = document.createElement('link')
            link.rel = 'icon'
            link.type = 'image/svg+xml'
            document.head.appendChild(link)
        }
        link.href = path
    }

    const init = () => {
        const seo = getSeoByPath(route.path)
        applySeo(seo)
    }

    watch(() => route.path, () => {
        init()
    })

    return { init }
}