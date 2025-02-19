import React from 'react'
import HelpBanner from '@/components/marine-components/HelpCenter/HelpBanner'
import MarineBreadCrumb from '@/components/marine-components/MarineBreadCrumb'
import HelpContentSection from '@/components/marine-components/HelpCenter/HelpContentSection'
import { Metadata } from 'next';
import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata ( {
  title: "Help Center - Biz Marine | Assistance & Support",
  description: "Visit Biz Marine's Help Center for answers to common questions, troubleshooting, and support for your marine parts and orders.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Help Center - Biz Marine | Assistance & Support",
    description: "Get the help you need at Biz Marine's Help Center. Find FAQs, troubleshooting guides, and support for all your marine parts inquiries.",
    url: "/help-center",
    locale: "en_us",
    siteName: "Biz Marine",
  },
  alternates: {
    canonical: `/help-center`,
  },
});
function page() {
  return (
    <>
        <HelpBanner image='/Drone-image.png' title='Help Center' />
        <MarineBreadCrumb />
        <HelpContentSection/>
    </>
  )
}

export default page