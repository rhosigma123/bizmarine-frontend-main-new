import React from 'react'
import AboutBanner from '@/components/marine-components/About/AboutBanner'
import MarineBreadCrumb from '@/components/marine-components/MarineBreadCrumb'
import CommonBanner from '@/components/marine-components/Common/CommonBanner'
import WishlistSection from './WishlistSection'
import MarineShopbanner from '@/components/marine-components/Home/MarineShopbanner'
function page() {
  return (
    <>
            <CommonBanner title={'Bizmarine Wishlist'} image={'/Wishlist-image.png'}  />
            <MarineBreadCrumb/>
            <WishlistSection/>
            <MarineShopbanner/>

            
    </>
  )
}

export default page