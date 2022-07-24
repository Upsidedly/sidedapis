import axios from 'axios'

export const kanyequote = {
    async get() {
        const { data } = await axios.get('https://api.kanye.rest')
        return data as {
            /**
             * The quote of Kanye West.
             */
            quote: string
        }
    }
}

export default { kanyequote}