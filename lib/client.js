import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
    projectId: "yucq2p4s",
    dataset: 'production',
    apiVersion: '2023-01-19',
    useCdn:true,
    token: "skvcVBhFneVBodB1wyHlLGMm2lcA1m0az3kIRzMEUj69OklXa3xavYcF8iNagftI9ROTDEOsojLsdBXqIIZyGlwUdZFEesGgzc7DKls23hvBdkwHqG6Y2C5ynb5MpCi8P4lhXcOkHXYkmUkTJB7n0OOgESgnSzLpzLHOFNknIKm4wMyqtdDZ"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)
