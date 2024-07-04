import React, { useContext,  } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

function HomePage() {

const {state} = useContext(ProductContext);
console.log(state);
    
  return (
    <>
      {/* <h1>Danh sách sản phẩm</h1>
      <div className="row">
      {state.products.map((product)=>(
              <div className=" col-12 col-sm-6 col-md-4 col-lg-3" key={product.id} >
              <div className="card">
              
          <Link to={`/product-detail/${product.id}`}>
          <img src={product.thumbnail} alt="" width='400px' />
          </Link>
               <div className="content">
               <h2>{product.title}</h2>
                <p>{product.price} $</p>
                <p>Branch : {product.brand}</p>
                <button className="btn btn-success w-100">Add To Card</button>
               </div>
              </div>
              </div>
               
                    
              ))}
      </div> */}


<main>
    <section className="swiper-container js-swiper-slider slideshow type3 slideshow-navigation-white-sm"
      data-settings='{
        "autoplay": {
          "delay": 5000
        },
        "navigation": {
          "nextEl": ".slideshow__next",
          "prevEl": ".slideshow__prev"
        },
        "pagination": {
          "el": ".slideshow-pagination",
          "type": "bullets",
          "clickable": true
        },
        "slidesPerView": 1,
        "effect": "fade",
        "loop": true
      }'>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="overflow-hidden position-relative h-100">
            <div className="slideshow-bg" style={{backgroundColor: '#f5e6e0'}}>
              <img loading="lazy" src="../assets/img/slideshow-pattern.png" width="1903" height="560" alt="Pattern" className="slideshow-bg__img object-fit-cover" /> 
            </div>
            <div className="position-absolute left-0 right-0 bottom-0 top-0 container">
              <div className="slideshow-character position-absolute position-right-center mx-xl-5">
                <img loading="lazy" src="../assets/img/slideshow-character1.png" width="518" height="329" alt="Woman Fashion 1" className="slideshow-character__img animate animate_fade animate_btt animate_delay-9 w-auto h-auto" />
              </div>
            </div>
            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
              <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3 theme-color">Shop Our Freshest</h6>
              <h2 className="fs-50 fw-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white theme-color-secondary">Fresh Hand-Picked Vegetables</h2>
              <h2 className="fs-50 fw-bold mb-2 mb-lg-4 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white theme-color">Everyday</h2>
              <a href="shop1.html" className="btn-link btn-link_lg default-underline fw-medium text-uppercase animate animate_fade animate_btt animate_delay-7">Discover More</a>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="overflow-hidden position-relative h-100">
            <div className="slideshow-bg" style={{backgroundColor:'#f5e6e0'}}>
              <img loading="lazy" src="../assets/img/slideshow-pattern.png" width="1903" height="560" alt="Pattern" className="slideshow-bg__img object-fit-cover"/>
            </div>
            <div className="position-absolute left-0 right-0 bottom-0 top-0 container">
              <div className="slideshow-character position-absolute position-right-center mx-xl-5">
                <img loading="lazy" src="../assets/img/slideshow-character1.png" width="518" height="329" alt="Woman Fashion 1" className="slideshow-character__img animate animate_fade animate_btt animate_delay-9 w-auto h-auto"/>
              </div>
            </div>
            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
              <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3 theme-color">Shop Our Freshest</h6>
              <h2 className="fs-50 fw-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white theme-color-secondary">Fresh Hand-Picked Vegetables</h2>
              <h2 className="fs-50 fw-bold mb-2 mb-lg-4 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white theme-color">Everyday</h2>
              <a href="shop1.html" className="btn-link btn-link_lg default-underline fw-medium text-uppercase animate animate_fade animate_btt animate_delay-7">Discover More</a>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="overflow-hidden position-relative h-100">
            <div className="slideshow-bg" style={{backgroundColor:'#f5e6e0'}} >
              <img loading="lazy" src="../assets/img/slideshow-pattern.png" width="1903" height="560" alt="Pattern" className="slideshow-bg__img object-fit-cover"/>
            </div>
            <div className="position-absolute left-0 right-0 bottom-0 top-0 container">
              <div className="slideshow-character position-absolute position-right-center mx-xl-5">
                <img loading="lazy" src="../assets/img/slideshow-character1.png" width="518" height="329" alt="Woman Fashion 1" className="slideshow-character__img animate animate_fade animate_btt animate_delay-9 w-auto h-auto"/>
              </div>
            </div>
            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
              <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3 theme-color">Shop Our Freshest</h6>
              <h2 className="fs-50 fw-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white theme-color-secondary">Fresh Hand-Picked Vegetables</h2>
              <h2 className="fs-50 fw-bold mb-2 mb-lg-4 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white theme-color">Everyday</h2>
              <a href="shop1.html" className="btn-link btn-link_lg default-underline fw-medium text-uppercase animate animate_fade animate_btt animate_delay-7">Discover More</a>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="overflow-hidden position-relative h-100">
            <div className="slideshow-bg" style={{backgroundColor:'#f5e6e0'}}>
              <img loading="lazy" src="../assets/img/slideshow-pattern.png" width="1903" height="560" alt="Pattern" className="slideshow-bg__img object-fit-cover"/>
            </div>
            <div className="position-absolute left-0 right-0 bottom-0 top-0 container">
              <div className="slideshow-character position-absolute position-right-center mx-xl-5">
                <img loading="lazy" src="../assets/img/slideshow-character1.png" width="518" height="329" alt="Woman Fashion 1" className="slideshow-character__img animate animate_fade animate_btt animate_delay-9 w-auto h-auto"/>
              </div>
            </div>
            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
              <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3 theme-color">Shop Our Freshest</h6>
              <h2 className="fs-50 fw-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white theme-color-secondary">Fresh Hand-Picked Vegetables</h2>
              <h2 className="fs-50 fw-bold mb-2 mb-lg-4 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white theme-color">Everyday</h2>
              <a href="shop1.html" className="btn-link btn-link_lg default-underline fw-medium text-uppercase animate animate_fade animate_btt animate_delay-7">Discover More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="slideshow__prev position-absolute top-50 d-flex align-items-center justify-content-center">
        <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm" /></svg>
      </div>
      <div className="slideshow__next position-absolute top-50 d-flex align-items-center justify-content-center">
        <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm" /></svg>
      </div>

      <div className="container">
        <div className="slideshow-pagination d-flex align-items-center position-absolute bottom-0 mb-5"></div>
       
      </div>
    </section>

    <section className="service-promotion horizontal bg-grey-f7f5ee">
      <div className="container">
        <div className="pb-2"></div>
        <div className="row">
          <div className="col-md-6 col-xl-3 mb-5 mb-xl-0 d-flex align-items-center justify-content-xl-center gap-3">
            <div className="service-promotion__icon">
              <svg className="theme-color" width="45" height="45" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_shipping" /></svg>
            </div>
            <div className="service-promotion__content-wrap">
              <h3 className="service-promotion__title h6 text-uppercase mb-1">Fast And Free Delivery</h3>
              <p className="service-promotion__content text-secondary mb-0">Free delivery for all orders over $140</p>
            </div>
          </div>

          <div className="col-md-6 col-xl-3 mb-5 mb-xl-0 d-flex align-items-center justify-content-xl-center gap-3">
            <div className="service-promotion__icon">
              <svg className="theme-color" width="45" height="45" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_headphone" /></svg>
            </div>
            <div className="service-promotion__content-wrap">
              <h3 className="service-promotion__title h6 text-uppercase mb-1">24/7 Customer Support</h3>
              <p className="service-promotion__content text-secondary mb-0">Friendly 24/7 customer support</p>
            </div>
          </div>

          <div className="col-md-6 col-xl-3 mb-5 mb-xl-0 d-flex align-items-center justify-content-xl-center gap-3">
            <div className="service-promotion__icon">
              <svg className="theme-color" width="45" height="45" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_shield" /></svg>
            </div>
            <div className="service-promotion__content-wrap">
              <h3 className="service-promotion__title h6 text-uppercase mb-1">Money Back Guarantee</h3>
              <p className="service-promotion__content text-secondary mb-0">We return money within 30 days</p>
            </div>
          </div>

          <div className="col-md-6 col-xl-3 mb-5 mb-xl-0 d-flex align-items-center justify-content-xl-center gap-3">
            <div className="service-promotion__icon">
              <svg className="theme-color" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_gift" /></svg>
            </div>
            <div className="service-promotion__content-wrap">
              <h3 className="service-promotion__title h6 text-uppercase mb-1">Member Gifts</h3>
              <p className="service-promotion__content text-secondary mb-0">Discount coupons weekends</p>
            </div>
          </div>
        </div>
        <div className="pb-2"></div>
      </div>
    </section>

    <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>

    <section className="products-grid">
      <div className="container">
        
{/*  */}
        <div className="tab-content pt-2" >
          <div className="tab-pane fade show active" id="collections-tab-1" role="tabpanel" aria-labelledby="collections-tab-1-trigger">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5">


             {state.products.map((p)=>(
               <div className="product-card-wrapper mb-2" key={p.id}>
               <div className="product-card product-card_style9 border rounded-3 mb-3 mb-md-4 ">
                 <div className="position-relative pb-3">
                   <div className="pc__img-wrapper pc__img-wrapper_wide3">
                     
                    <Link  to={`/product-detail/${p.id}`}>
                    <img loading="lazy" src={p.thumbnail} width="256" height="201" alt="Cropped Faux leather Jacket" className="pc__img"/></Link>
                   
                   </div>
                   <div className="anim_appear-bottom position-absolute w-100 text-center">
                     <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">
                       <svg className="d-inline-block" width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                     </button>
                     <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">
                       <svg className="d-inline-block" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><use href="#icon_view" /></svg>
                     </button>
                     <button className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist" title="Add To Wishlist">
                       <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                     </button>
                   </div>
                 </div>
   
                 <div className="pc__info position-relative">
                   <p className="pc__category">{p.brand}</p>
                   <h6 className="pc__title"><a href="product1_simple.html">{p.title}</a></h6>
                   <div className="product-card__review d-sm-flex align-items-center">
                     <div className="reviews-group d-flex">
                       <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                       <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                       <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                       <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                       <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                     </div>
                     <span className="reviews-note text-lowercase text-secondary ms-sm-1">{p.rating}</span>
                   </div>
                   <div className="product-card__price d-flex">
                     <span className="money price fs-5">Price : {p.price} $</span>
                   </div>
                 </div>
               </div>
             </div>
           
             ))}
            
            
           
        
            </div>
          </div>
       
        </div>
      </div>
    </section>

    <div className="mb-3 mb-xl-4 pb-3 pt-1 pb-xl-5"></div>
{/* 
    <section className="category-carousel bg-grey-f7f5ee">
      <div className="container">
        <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>

        <div className="d-flex align-items-center justify-content-between flex-wrap mb-3 pb-xl-2 mb-xl-4 gap-md-4">
          <h2 className="section-title fw-normal">Shop By Category</h2>
          <a className="btn-link btn-link_md default-underline text-uppercase fw-medium" href="shop12.html">Shop All Categories</a>
        </div>

        <div id="category_carousel" className="position-relative">
          <div className="swiper-container js-swiper-slider"
            data-settings='{
              "autoplay": {
                "delay": 5000
              },
              "slidesPerView": 8,
              "slidesPerGroup": 1,
              "effect": "none",
              "loop": true,
              "breakpoints": {
                "320": {
                  "slidesPerView": 2,
                  "slidesPerGroup": 2,
                  "spaceBetween": 16
                },
                "768": {
                  "slidesPerView": 3,
                  "slidesPerGroup": 4,
                  "spaceBetween": 20
                },
                "992": {
                  "slidesPerView": 4,
                  "slidesPerGroup": 2,
                  "spaceBetween": 24
                },
                "1200": {
                  "slidesPerView": 5,
                  "slidesPerGroup": 2,
                  "spaceBetween": 28
                }
              }
            }'>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img loading="lazy" className="w-100 h-auto mb-3" src="../images/home/demo12/category-1.jpg" width="260" height="220" alt=""/>
                <div className="text-center">
                  <a href="#" className="menu-link fw-medium pb-0">Fruit</a>
                </div>
              </div>
              <div className="swiper-slide">
                <img loading="lazy" className="w-100 h-auto mb-3" src="../images/home/demo12/category-2.jpg" width="260" height="220" alt=""/>
                <div className="text-center">
                  <a href="#" className="menu-link fw-medium pb-0">Bakery</a>
                  <p className="mb-0 text-secondary">20 Products</p>
                </div>
              </div>
              <div className="swiper-slide">
                <img loading="lazy" className="w-100 h-auto mb-3" src="../images/home/demo12/category-3.jpg" width="260" height="220" alt=""/>
                <div className="text-center">
                  <a href="#" className="menu-link fw-medium pb-0">Fish</a>
                </div>
              </div>
              <div className="swiper-slide">
                <img loading="lazy" className="w-100 h-auto mb-3" src="../images/home/demo12/category-4.jpg" width="260" height="220" alt=""/>
                <div className="text-center">
                  <a href="#" className="menu-link fw-medium pb-0">Milk</a>
                </div>
              </div>
              <div className="swiper-slide">
                <img loading="lazy" className="w-100 h-auto mb-3" src="../images/home/demo12/category-5.jpg" width="260" height="220" alt=""/>
                <div className="text-center">
                  <a href="#" className="menu-link fw-medium pb-0">Vegetables</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-3 mt-xl-5 pb-3 pt-1 pb-xl-5"></div>
      </div>
    </section> */}

    <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>

    <section className="product-carousel container">
      <div className="d-flex align-items-center justify-content-between flex-wrap mb-3 pb-xl-2 mb-xl-4 gap-md-4">
        <h2 className="section-title fw-normal">Top Selling Products</h2>
        <a className="btn-link btn-link_md default-underline text-uppercase fw-medium" href="shop1.html">See All Products</a>
      </div>

      <div id="top_selling_carousel" className="position-relative">
        <div className="swiper-container js-swiper-slider"
          data-settings='{
            "autoplay": {
              "delay": 5000
            },
            "slidesPerView": 8,
            "slidesPerGroup": 1,
            "effect": "none",
            "loop": false,
            "pagination": {
              "el": "#top_selling_carousel .slideshow-pagination",
              "type": "bullets",
              "clickable": true
            },
            "breakpoints": {
              "320": {
                "slidesPerView": 2,
                "slidesPerGroup": 2,
                "spaceBetween": 16
              },
              "768": {
                "slidesPerView": 3,
                "slidesPerGroup": 1,
                "spaceBetween": 22
              },
              "992": {
                "slidesPerView": 4,
                "slidesPerGroup": 1,
                "spaceBetween": 28
              },
              "1200": {
                "slidesPerView": 5,
                "slidesPerGroup": 1,
                "spaceBetween": 34
              }
            }
          }'>
          <div className="swiper-wrapper">
            <div className="swiper-slide product-card product-card_style9 border rounded-3">
              <div className="position-relative pb-3">
                <div className="pc__img-wrapper pc__img-wrapper_wide3">
                  <a href="product1_simple.html">
                    <img loading="lazy" src="../images/home/demo12/product-11.jpg" width="253" height="198" alt="Cropped Faux leather Jacket" className="pc__img"/>
                  </a>
                </div>
                <div className="anim_appear-bottom position-absolute w-100 text-center">
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">
                    <svg className="d-inline-block" width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">
                    <svg className="d-inline-block" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><use href="#icon_view" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist" title="Add To Wishlist">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                  </button>
                </div>
              </div>

              <div className="pc__info position-relative">
                <p className="pc__category">Fruits</p>
                <h6 className="pc__title"><a href="product1_simple.html">Organic Bartlett Pear</a></h6>
                <div className="product-card__review d-sm-flex align-items-center">
                  <div className="reviews-group d-flex">
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                  </div>
                  <span className="reviews-note text-lowercase text-secondary ms-sm-1">321,975</span>
                </div>
                <div className="product-card__price d-flex">
                  <span className="money price fs-5">$35.90</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card product-card_style9 border rounded-3">
              <div className="position-relative pb-3">
                <div className="pc__img-wrapper pc__img-wrapper_wide3">
                  <a href="product1_simple.html">
                    <img loading="lazy" src="../images/home/demo12/product-12.jpg" width="253" height="198" alt="Cropped Faux leather Jacket" className="pc__img"/>
                  </a>
                </div>
                <div className="anim_appear-bottom position-absolute w-100 text-center">
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">
                    <svg className="d-inline-block" width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">
                    <svg className="d-inline-block" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><use href="#icon_view" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist" title="Add To Wishlist">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                  </button>
                </div>
              </div>

              <div className="pc__info position-relative">
                <p className="pc__category">Fruits</p>
                <h6 className="pc__title"><a href="product1_simple.html">Organic Strawberries, 1 lb</a></h6>
                <div className="product-card__review d-sm-flex align-items-center">
                  <div className="reviews-group d-flex">
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                  </div>
                  <span className="reviews-note text-lowercase text-secondary ms-sm-1">321,975</span>
                </div>
                <div className="product-card__price d-flex">
                  <span className="money price fs-5">$79.99</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card product-card_style9 border rounded-3">
              <div className="position-relative pb-3">
                <div className="pc__img-wrapper pc__img-wrapper_wide3">
                  <a href="product1_simple.html">
                    <img loading="lazy" src="../images/home/demo12/product-13.jpg" width="253" height="198" alt="Cropped Faux leather Jacket" className="pc__img"/>
                  </a>
                </div>
                <div className="anim_appear-bottom position-absolute w-100 text-center">
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">
                    <svg className="d-inline-block" width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">
                    <svg className="d-inline-block" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><use href="#icon_view" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist" title="Add To Wishlist">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                  </button>
                </div>
              </div>

              <div className="pc__info position-relative">
                <p className="pc__category">Fruits</p>
                <h6 className="pc__title"><a href="product1_simple.html">Blueberry Organic, 6 Ounce</a></h6>
                <div className="product-card__review d-sm-flex align-items-center">
                  <div className="reviews-group d-flex">
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                  </div>
                  <span className="reviews-note text-lowercase text-secondary ms-sm-1">321,975</span>
                </div>
                <div className="product-card__price d-flex">
                  <span className="money price fs-5">$929.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card product-card_style9 border rounded-3">
              <div className="position-relative pb-3">
                <div className="pc__img-wrapper pc__img-wrapper_wide3">
                  <a href="product1_simple.html">
                    <img loading="lazy" src="../images/home/demo12/product-14.jpg" width="253" height="198" alt="Cropped Faux leather Jacket" className="pc__img"/>
                  </a>
                </div>
                <div className="anim_appear-bottom position-absolute w-100 text-center">
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">
                    <svg className="d-inline-block" width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">
                    <svg className="d-inline-block" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><use href="#icon_view" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist" title="Add To Wishlist">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                  </button>
                </div>
              </div>

              <div className="pc__info position-relative">
                <p className="pc__category">Fruits</p>
                <h6 className="pc__title"><a href="product1_simple.html">Kiwi Organic, 1 Each</a></h6>
                <div className="product-card__review d-sm-flex align-items-center">
                  <div className="reviews-group d-flex">
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                  </div>
                  <span className="reviews-note text-lowercase text-secondary ms-sm-1">321,975</span>
                </div>
                <div className="product-card__price d-flex">
                  <span className="money price fs-5">$729.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card product-card_style9 border rounded-3">
              <div className="position-relative pb-3">
                <div className="pc__img-wrapper pc__img-wrapper_wide3">
                  <a href="product1_simple.html">
                    <img loading="lazy" src="../images/home/demo12/product-15.jpg" width="253" height="198" alt="Cropped Faux leather Jacket" className="pc__img"/>
                  </a>
                </div>
                <div className="anim_appear-bottom position-absolute w-100 text-center">
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">
                    <svg className="d-inline-block" width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">
                    <svg className="d-inline-block" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><use href="#icon_view" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist" title="Add To Wishlist">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                  </button>
                </div>
              </div>

              <div className="pc__info position-relative">
                <p className="pc__category">Fruits</p>
                <h6 className="pc__title"><a href="product1_simple.html">Organic Banana</a></h6>
                <div className="product-card__review d-sm-flex align-items-center">
                  <div className="reviews-group d-flex">
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                  </div>
                  <span className="reviews-note text-lowercase text-secondary ms-sm-1">321,975</span>
                </div>
                <div className="product-card__price d-flex">
                  <span className="money price fs-5">$399.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card product-card_style9 border rounded-3">
              <div className="position-relative pb-3">
                <div className="pc__img-wrapper pc__img-wrapper_wide3">
                  <a href="product1_simple.html">
                    <img loading="lazy" src="../images/home/demo12/product-11.jpg" width="253" height="198" alt="Cropped Faux leather Jacket" className="pc__img"/>
                  </a>
                </div>
                <div className="anim_appear-bottom position-absolute w-100 text-center">
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">
                    <svg className="d-inline-block" width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">
                    <svg className="d-inline-block" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><use href="#icon_view" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist" title="Add To Wishlist">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                  </button>
                </div>
              </div>

              <div className="pc__info position-relative">
                <p className="pc__category">Fruits</p>
                <h6 className="pc__title"><a href="product1_simple.html">Organic Bartlett Pear</a></h6>
                <div className="product-card__review d-sm-flex align-items-center">
                  <div className="reviews-group d-flex">
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                  </div>
                  <span className="reviews-note text-lowercase text-secondary ms-sm-1">321,975</span>
                </div>
                <div className="product-card__price d-flex">
                  <span className="money price fs-5">$35.90</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card product-card_style9 border rounded-3">
              <div className="position-relative pb-3">
                <div className="pc__img-wrapper pc__img-wrapper_wide3">
                  <a href="product1_simple.html">
                    <img loading="lazy" src="../images/home/demo12/product-12.jpg" width="253" height="198" alt="Cropped Faux leather Jacket" className="pc__img"/>
                  </a>
                </div>
                <div className="anim_appear-bottom position-absolute w-100 text-center">
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">
                    <svg className="d-inline-block" width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">
                    <svg className="d-inline-block" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><use href="#icon_view" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist" title="Add To Wishlist">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                  </button>
                </div>
              </div>

              <div className="pc__info position-relative">
                <p className="pc__category">Fruits</p>
                <h6 className="pc__title"><a href="product1_simple.html">Organic Strawberries, 1 lb</a></h6>
                <div className="product-card__review d-sm-flex align-items-center">
                  <div className="reviews-group d-flex">
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                  </div>
                  <span className="reviews-note text-lowercase text-secondary ms-sm-1">321,975</span>
                </div>
                <div className="product-card__price d-flex">
                  <span className="money price fs-5">$79.99</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card product-card_style9 border rounded-3">
              <div className="position-relative pb-3">
                <div className="pc__img-wrapper pc__img-wrapper_wide3">
                  <a href="product1_simple.html">
                    <img loading="lazy" src="../images/home/demo12/product-13.jpg" width="253" height="198" alt="Cropped Faux leather Jacket" className="pc__img"/>
                  </a>
                </div>
                <div className="anim_appear-bottom position-absolute w-100 text-center">
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">
                    <svg className="d-inline-block" width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">
                    <svg className="d-inline-block" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><use href="#icon_view" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist" title="Add To Wishlist">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                  </button>
                </div>
              </div>

              <div className="pc__info position-relative">
                <p className="pc__category">Fruits</p>
                <h6 className="pc__title"><a href="product1_simple.html">Blueberry Organic, 6 Ounce</a></h6>
                <div className="product-card__review d-sm-flex align-items-center">
                  <div className="reviews-group d-flex">
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                  </div>
                  <span className="reviews-note text-lowercase text-secondary ms-sm-1">321,975</span>
                </div>
                <div className="product-card__price d-flex">
                  <span className="money price fs-5">$929.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card product-card_style9 border rounded-3">
              <div className="position-relative pb-3">
                <div className="pc__img-wrapper pc__img-wrapper_wide3">
                  <a href="product1_simple.html">
                    <img loading="lazy" src="../images/home/demo12/product-14.jpg" width="253" height="198" alt="Cropped Faux leather Jacket" className="pc__img"/>
                  </a>
                </div>
                <div className="anim_appear-bottom position-absolute w-100 text-center">
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">
                    <svg className="d-inline-block" width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">
                    <svg className="d-inline-block" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><use href="#icon_view" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist" title="Add To Wishlist">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                  </button>
                </div>
              </div>

              <div className="pc__info position-relative">
                <p className="pc__category">Fruits</p>
                <h6 className="pc__title"><a href="product1_simple.html">Kiwi Organic, 1 Each</a></h6>
                <div className="product-card__review d-sm-flex align-items-center">
                  <div className="reviews-group d-flex">
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                  </div>
                  <span className="reviews-note text-lowercase text-secondary ms-sm-1">321,975</span>
                </div>
                <div className="product-card__price d-flex">
                  <span className="money price fs-5">$729.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide product-card product-card_style9 border rounded-3">
              <div className="position-relative pb-3">
                <div className="pc__img-wrapper pc__img-wrapper_wide3">
                  <a href="product1_simple.html">
                    <img loading="lazy" src="../images/home/demo12/product-15.jpg" width="253" height="198" alt="Cropped Faux leather Jacket" className="pc__img" />
                  </a>
                </div>
                <div className="anim_appear-bottom position-absolute w-100 text-center">
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-add-cart js-open-aside" data-aside="cartDrawer" title="Add To Cart">
                    <svg className="d-inline-block" width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-quick-view" data-bs-toggle="modal" data-bs-target="#quickView" title="Quick view">
                    <svg className="d-inline-block" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><use href="#icon_view" /></svg>
                  </button>
                  <button className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist" title="Add To Wishlist">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
                  </button>
                </div>
              </div>

              <div className="pc__info position-relative">
                <p className="pc__category">Fruits</p>
                <h6 className="pc__title"><a href="product1_simple.html">Organic Banana</a></h6>
                <div className="product-card__review d-sm-flex align-items-center">
                  <div className="reviews-group d-flex">
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                    <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M4.0172 0.313075L2.91869 2.64013L0.460942 3.0145C0.0201949 3.08129 -0.15644 3.64899 0.163185 3.97415L1.94131 5.78447L1.52075 8.34177C1.44505 8.80402 1.91103 9.15026 2.30131 8.93408L4.5 7.72661L6.69869 8.93408C7.08897 9.14851 7.55495 8.80402 7.47925 8.34177L7.05869 5.78447L8.83682 3.97415C9.15644 3.64899 8.97981 3.08129 8.53906 3.0145L6.08131 2.64013L4.9828 0.313075C4.78598 -0.101718 4.2157 -0.10699 4.0172 0.313075Z"></path></svg>
                  </div>
                  <span className="reviews-note text-lowercase text-secondary ms-sm-1">321,975</span>
                </div>
                <div className="product-card__price d-flex">
                  <span className="money price fs-5">$399.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="slideshow-pagination mt-4 d-flex align-items-center justify-content-center"></div>
      
      </div>
    </section>

    <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>


    <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>  

 

    <section className="theme-bg-color">
      <div className="container">
        <div className="mb-3 mb-xl-4 pb-4"></div>

        <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
          <div className="d-flex align-items-center gap-3">
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.7812 7.98438C49.7031 12.9062 52.75 19.3516 52.75 26.3828C52.75 40.6797 40.7969 52.3984 26.3828 52.3984C22.0469 52.3984 17.8281 51.2266 13.9609 49.2344L0.25 52.75L3.88281 39.2734C1.65625 35.4062 0.367188 30.9531 0.367188 26.2656C0.367188 11.9688 12.0859 0.25 26.3828 0.25C33.4141 0.25 39.9766 3.0625 44.7812 7.98438ZM26.3828 47.9453C38.3359 47.9453 48.2969 38.2188 48.2969 26.3828C48.2969 20.5234 45.8359 15.1328 41.7344 11.0312C37.6328 6.92969 32.2422 4.70312 26.5 4.70312C14.5469 4.70312 4.82031 14.4297 4.82031 26.2656C4.82031 30.3672 5.99219 34.3516 8.10156 37.8672L8.6875 38.6875L6.46094 46.6562L14.6641 44.4297L15.3672 44.8984C18.7656 46.8906 22.5156 47.9453 26.3828 47.9453ZM38.3359 31.7734C38.9219 32.125 39.3906 32.2422 39.5078 32.5938C39.7422 32.8281 39.7422 34.1172 39.1562 35.6406C38.5703 37.1641 35.9922 38.5703 34.8203 38.6875C32.7109 39.0391 31.0703 38.9219 26.9688 37.0469C20.4062 34.2344 16.1875 27.6719 15.8359 27.3203C15.4844 26.8516 13.2578 23.8047 13.2578 20.5234C13.2578 17.3594 14.8984 15.8359 15.4844 15.1328C16.0703 14.4297 16.7734 14.3125 17.2422 14.3125C17.5938 14.3125 18.0625 14.3125 18.4141 14.3125C18.8828 14.3125 19.3516 14.1953 19.9375 15.4844C20.4062 16.7734 21.8125 19.9375 21.9297 20.2891C22.0469 20.6406 22.1641 20.9922 21.9297 21.4609C20.7578 23.9219 19.3516 23.8047 20.0547 24.9766C22.6328 29.3125 25.0938 30.8359 28.9609 32.7109C29.5469 33.0625 29.8984 32.9453 30.3672 32.5938C30.7188 32.125 32.0078 30.6016 32.3594 30.0156C32.8281 29.3125 33.2969 29.4297 33.8828 29.6641C34.4688 29.8984 37.6328 31.4219 38.3359 31.7734Z" fill="white"/>
            </svg>
            <h3 className="mb-0 text-white fw-normal">Whatsapp Ordering Service</h3>
          </div>
          <h3 className="mb-0 text-white fw-normal">
            <span>Place Your Orders At  </span>
            <span className="theme-color-secondary">+1 246-345-0695</span>
          </h3>
        </div>

        <div className="mt-3 mt-xl-4 pb-4"></div>
      </div>
    </section>
  </main>

    </>
  )
}

export default HomePage
