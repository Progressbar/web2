export const name = `Progressbar`
export const title = `${name}`
export const description = `${name}`
export const domain = `progressbar.sk`
export const url = `https://${domain}`

export const emailEvents = `events@${domain}`
export const emailInfo = `info@${domain}`

export const org = {
  "@context": "http://schema.org",
  "@type": "Organization",
  name: "Progressbar",
  url: `${url}`,
  logo: `${url}/static/images/social.png`,
  sameAs: [
    "https://github.com/Progressbar",
    "https://www.instagram.com/progressbar_sk",
    "https://www.facebook.com/progressbar",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: `info@${domain}`,
      contactType: "Support",
      url: `${url}`,
    },
  ],
}
