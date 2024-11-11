import { createServer, Model } from "miragejs";
import uuid from "react-uuid";

export default function server({ environment = "development" } = {}) {
    let server = createServer({
        environment,
        models: {
            ItemList: Model,
            testList: Model,
            support: Model,
            supportPro: Model,
            appleCare: Model,
            footer: Model,
            gridPhoto: Model,
            detail: Model,
            browserProduct: Model,
            browserCategory: Model,
            mac: Model,
            iPad: Model,
            watch: Model,
            airpod: Model,
            tvhome: Model,
            iphone: Model,
        },

        seeds(server) {
            server.create('ItemList', {
                id: "1",
                url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-iphone_2x.png",
                title: "iPhone",
                href: "https://support.apple.com/en-in/iphone"
            }),
                server.create('ItemList', {
                    id: "2",
                    url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-mac_2x.png",
                    title: "Mac",
                    href: "https://support.apple.com/en-in/mac"
                }),
                server.create('ItemList', {
                    id: "3",
                    url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-ipad_2x.png",
                    title: "iPad",
                    href: "https://support.apple.com/en-in/ipad"
                }),
                server.create('ItemList', {
                    id: "4",
                    url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-watch-_2x.png",
                    title: "Watch",
                    href: "https://support.apple.com/en-in/watch"
                }),
                server.create('ItemList', {
                    id: "5",
                    url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-airpods_2x.png",
                    title: "AirPods",
                    href: "https://support.apple.com/en-in/airpods"
                }),
                server.create('ItemList', {
                    id: "6",
                    url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-music_2x.png",
                    title: "Music",
                    href: "https://support.apple.com/en-in/music"
                }),
                server.create('ItemList', {
                    id: "7",
                    url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-tv_2x.png",
                    title: "TV",
                    href: "https://support.apple.com/en-in/tv"
                })
                server.create('testList', {
                    id: "1",
                    url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/tile-topic-password_2x.svg",
                    title: "Forgotten Apple ID password"
                }),
                server.create('testList', {
                    id: "2",
                    url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/tile-topic-repair_2x.svg",
                    title: "Apple Repair"
                }),
                server.create('testList', {
                    id: "3",
                    url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/tile-topic-billing_2x.svg",
                    title: "Billing and Subscriptions"
                })
            server.create('support', {
                id: "1",
                title: "Apple Support on YouTube",
                para: "Check out our official YouTube channel to help you get the most from your Apple devices and services.",
                linkSub: "Visit Apple Support on YouTube",
                link: "https://www.youtube.com/applesupport",
                url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-AppleSupport-YouTube-promo.image.large_2x.png"
            })
            server.create('support', {
                id: "2",
                title: "Join free sessions at your Apple Store",
                para: "Find out about the latest features and how to go further with your Apple devices..",
                linkSub: "Sign up",
                link: "https://www.apple.com/in/today/calendar/?topics=daily-sessions&sessions=skills&cid=rem-in-taa-support-fundm-cal",
                url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-taa-fundamentals.image.large_2x.png"
            })
            server.create('supportPro', {
                id: "1",
                title: "Get Support",
                para: "Give us a few details and we’ll offer the best solution. Connect by phone, chat, email and more.",
                linkSub: "Start Now",
                link: "https://getsupport.apple.com/?caller=home&PRKEYS=",
                url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-split-getsupport.image.large_2x.png"
            })
            server.create('supportPro', {
                id: "2",
                title: "Apple Support app",
                para: "Get help for all of your Apple products in one place, or connect with an expert.",
                linkSub: "Download",
                link: "https://apps.apple.com/in/app/apple-support/id1130498044?pt=2003&ct=support.home&mt=8&l=en",
                url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-split-supportapp.image.large_2x.png"
            })
            server.create('appleCare', {
                id: "1",
                title: "My Support",
                para: "Get up-to-date information about your Apple products including cover, repairs and much more.",
                linkSub: "Sign in to My Support",
                link: "https://support.apple.com/en-in/my-support"
            })
            server.create('appleCare', {
                id: "2",
                title: "AppleCare+",
                para: "Get unlimited repairs for accidental damage protection, priority access to Apple experts, and more..",
                linkSub: "Learn more",
                link: "https://www.apple.com/in/support/products/?cid=aaa-ols-home-acpp-psp-0922",
                url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-applecare-plus.image.large_2x.png"
            })
            server.create('appleCare', {
                id: "3",
                title: "Beware of counterfeit parts",
                para: "Some counterfeit and third-party power adapters and batteries may not be designed properly and could result in safety issues. To ensure you receive a genuine Apple battery during a battery replacement, we recommend visiting an Apple Authorised Service Provider. If you need a replacement adapter to charge your Apple device, we recommend getting an Apple power adapter.Also non-genuine replacement displays may have compromised visual quality and may fail to work correctly. Apple-certified screen repairs are performed by trusted experts who use genuine Apple parts.",
            })
            server.create('footer', {
                id: "1",
                title: "Product Support",
                content: [
                    {
                        id: "1",
                        subtitle: "iPhone"
                    },
                    { 
                        id: "2",
                        subtitle: "Mac"
                    },
                    {
                        id: "1",
                        subtitle: "iPad"
                    },
                    {
                        id: "1",
                        subtitle: "iPhone"
                    },
                    {
                        id: "1",
                        subtitle: "iPhone"
                    },
                    {
                        id: "1",
                        subtitle: "iPhone"
                    }
                ]
            })
            server.create('footer', {
                id: "2",
                title: "Service and Repair",
                content: [
                    {
                        id: "1",
                        subtitle: "Apple Repair Options"
                    },
                    {
                        id: "2",
                        subtitle: "Service and Repair Information"
                    },
                    {
                        id: "1",
                        subtitle: "AppleCare Products"
                    },
                    {
                        id: "1",
                        subtitle: "Hardware Warranties"
                    },
                    {
                        id: "1",
                        subtitle: "Software License Agreements"
                    },
                    {
                        id: "1",
                        subtitle: "Complimentary Support"
                    }
                ]
            })
            server.create('footer', {
                id: "3",
                title: "Resources",
                content: [
                    {
                        id: "1",
                        subtitle: "My Support"
                    },
                    {
                        id: "2",
                        subtitle: "Product Documentation"
                    },
                    {
                        id: "3",
                        subtitle: "Apple Support Videos"
                    },
                    {
                        id: "4",
                        subtitle: "Accessibility"
                    }
                ]
            })
            server.create('footer', {
                id: "4",
                title: "Connect",
                content: [
                    {
                        id: "1",
                        subtitle: "Contact Us"
                    },
                    {
                        id: "2",
                        subtitle: "Phone Numbers"
                    },
                    {
                        id: "",
                        subtitle: "Support app"
                    },
                    {
                        id: "1",
                        subtitle: "Apple Communities"
                    },
                    {
                        id: "1",
                        subtitle: "@AppleSupport"
                    },
                ]
            })
            server.create('gridPhoto', {
                                id: '1',
                                url: 'https://www.apple.com/v/home/br/images/promos/airpods-4/promo_airpods_4_announce__dvb5tea0uyye_medium_2x.jpg',
                                headLine: 'AirPods 4',
                                subhead: 'Iconic.Now supersonic. Available with Active Noise Cancellation.',
                                callout: 'Available starting 9.20',
                                btn: ['Learn more', 'Pre-order'],
                                color: 'white'
            }),
            server.create('gridPhoto', {
                        id: '2',
                        url: 'https://www.apple.com/v/home/br/images/promos/airpods-pro-2/promo_airpods_pro_2_announce__egsgrnnmo3ee_medium_2x.jpg',
                        headLine: 'AirPods Pro 2',
                        subhead: 'Hearing Aid and Hearing Test features coming with a free software update this fall.',
                        callout: 'Available starting 9.20',
                        btn: ['Learn more', 'Buy'],
                        color: 'white'
            }),
                    server.create('gridPhoto', {
                        id: '3',
                        url: 'https://www.apple.com/v/home/br/images/promos/airpods-max/promo_airpodsmax_announce__2srayzjz3iay_medium_2x.jpg',
                        headLine: 'AirPods Max',
                        subhead: 'Symphonic boom.',
                        callout: 'Available starting 9.20',
                        btn: ['Learn more', 'Pre-order'],
                        color: 'black'
                    }),
                    server.create('gridPhoto', {
                        id: '4',
                        url: 'https://www.apple.com/v/home/br/images/promos/carriers/promo_carrier__e0izvxwqosgi_medium_2x.jpg',
                        headLine: 'Carrier deals at Apple',
                        subhead: 'Get up to $1000 in credit on a new iPhone. Trade-in may be required.',
                        callout: 'Available starting 9.20',
                        btn: ['Learn more', 'Find your deal'],
                        color: 'black'
                    }),
                    server.create('detail', {
                        id: '1',
                        title: '1. Available for Qualified Purchasers only. Qualified Purchasers receive an Apple Gift Card when they purchase an Eligible Product at a Qualifying Location through September 30, 2024. Gift card values may vary by Eligible Product. Only one Apple Gift Card per Eligible Product per Qualified Purchaser. Offer subject to availability. While supplies last. Qualified Purchasers shall receive a discount equal to the value of the Apple Gift Card off the price of the Eligible Product, but will be charged for all items in their cart, including the Apple Gift Card. Important notice regarding the checkout receipt and monthly statement for Apple Card Monthly Installments (ACMI) purchases with this promotion: Qualified Purchasers selecting ACMI (a 0% APR payment option available only in the U.S.) as payment type at checkout shall receive a discount equal to the value of the Apple Gift Card off the price of the Eligible Product. This will result in one ACMI installment plan over 12 months for the Eligible Product discounted by the instant credit, and a second ACMI installment plan over 12 months for the full price of the Apple Gift Card. The total combined amount charged over the two separate ACMI installment plans will reflect the original full retail price of the Eligible Product. Separately, Qualified Purchasers will receive and be charged for the Apple Gift Card in the amount of the applicable discount off the Eligible Product. Apple Card Monthly Installments (ACMI) is a 0% APR payment option that is only available if you select it at checkout in the U.S. for eligible products purchased at Apple Store locations, apple.com, the Apple Store app, or by calling 1-800-MY-APPLE, and is subject to credit approval and credit limit. See support.apple.com/kb/HT211204 for more information about eligible products. APR ranges may vary based on when you accepted an Apple Card. Cardholders who accept an Apple Card on and or after August 1, 2024: Variable APRs for Apple Card, other than ACMI, range from 19.24% to 29.49% based on creditworthiness. Rates as of August 1, 2024. Existing cardholders: See your Customer Agreement for applicable rates and fee. If you buy an ACMI-eligible product by choosing to pay in full with Apple Card (instead of using ACMI), that purchase is subject to the Apple Card variable APR, not 0% APR. Taxes and shipping on ACMI purchases are subject to the variable APR, not 0% APR. When you buy an iPhone with ACMI, you’ll need to select AT&T, Boost Mobile, T-Mobile, or Verizon as your carrier when you check out. An iPhone purchased with ACMI is always unlocked, so you can switch carriers at any time. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government and Veterans and Military Purchase Programs; or on refurbished devices. The last month’s payment for each product will be the product’s purchase price, less all other payments at the monthly payment amount. ACMI financing is subject to change at any time for any reason, including but not limited to installment term lengths and eligible products. See support.apple.com/kb/HT211204 for information about upcoming changes to ACMI financing. See the Apple Card Customer Agreement for more information about ACMI financing. Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch. Available for qualifying applicants in the United States. If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about accessing this offer or applying for Apple Card. This offer cannot be combined with the Apple Employee Purchase Plan or business loyalty pricing. Additional restrictions apply. View full terms and conditions of offer here.'
                    }),
                    server.create('detail', {
                        id: '2',
                        title: '2. Apple Intelligence will be available in beta on all iPhone 16 models, iPhone 15 Pro, and iPhone 15 Pro Max with Siri and device language set to U.S. English, as an iOS 18 update this fall. Some features and additional language will be coming over the course of the next year.'
                    }),
                    server.create('detail', {
                        id: '3',
                        title: '3. Apple Intelligence will be available in beta on all iPhone 16 models, iPhone 15 Pro, and iPhone 15 Pro Max with Siri and device language set to U.S. English, as an iOS 18 update this fall. Some features and additional language will be coming over the course of the next year.'
                    }),
                    server.create('detail', {
                        id: '4',
                        title: '4. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation.'
                    }),
                    server.create('detail', {
                        id: '5',
                        title: '5. Hearing Test and Hearing Aid features expected fall 2024. They will be supported on AirPods Pro 2 with the latest firmware paired with a compatible iPhone or iPad with iOS 18 or iPadOS 18 and later, and are intended for people 18 years old or older. The Hearing Aid feature will be intended for people with perceived mild to moderate hearing loss and is pending FDA review.'
                    }),
                    server.create('browserProduct', {
                        id: "1",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-mac?wid=225&hei=225&fmt=png-alpha&.v=1700067558508",
                        title: "Mac"
                    }),
                    server.create('browserProduct', {
                        id: "2",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-ipad?wid=225&hei=225&fmt=png-alpha&.v=1699474605227",
                        title: "iPad"
                    }),
                    server.create('browserProduct', {
                        id: "3",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-iphone?wid=225&hei=225&fmt=png-alpha&.v=1699474605231",
                        title: "iPhone"
                    }),
                    server.create('browserProduct', {
                        id: "4",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-watch?wid=225&hei=225&fmt=png-alpha&.v=1699474605232",
                        title: "Watch"
                    }),
                    server.create('browserProduct', {
                        id: "5",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-category-new-arrivals?wid=150&hei=150&fmt=png-alpha&.v=1699572503991",
                        title: "TV & Home"
                    }),
                    server.create('browserCategory', {
                        id: "1",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-tv?wid=225&hei=225&fmt=png-alpha&.v=1699474605227",
                        title: "New Arrivals"
                    }),
                    server.create('browserCategory', {
                        id: "2",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-category-cases-protection?wid=150&hei=150&fmt=png-alpha&.v=1699561941827",
                        title: "Cases & Protection"
                    }),
                    server.create('browserCategory', {
                        id: "3",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-category-charging-essentials?wid=150&hei=150&fmt=png-alpha&.v=1699561941713",
                        title: "Charging Essentials"
                    }),
                    server.create('browserCategory', {
                        id: "4",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-category-magsafe?wid=150&hei=150&fmt=png-alpha&.v=1699572503981",
                        title: "MagSafe"
                    }),
                    server.create('browserCategory', {
                        id: "5",
                        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-category-audio-music?wid=150&hei=150&fmt=png-alpha&.v=1699561939556",
                        title: "Headphones & Speakers"
                    }),
                    server.create('mac', {
                        nav: [
                            { url: "https://www.apple.com/v/mac/home/ca/images/chapternav/macbookair_light__dfypt7o3xfgy_large.svg", title: "MacBook Air" },
                            { url: "https://www.apple.com/v/mac/home/ca/images/chapternav/macbook_pro_light__bvnmtmeikj1e_large.svg", title: "MacBook Pro" },
                            { url: "https://www.apple.com/v/mac/home/ca/images/chapternav/macbook_pro_light__bvnmtmeikj1e_large.svg", title: "iMac" },
                            { url: "https://www.apple.com/v/mac/home/ca/images/chapternav/mac_mini_light__e7ojhup2ezau_large.svg", title: "Mac mini" },
                            { url: "https://www.apple.com/v/mac/home/ca/images/chapternav/mac_studio_light__fcr3455qk0i2_large.svg", title: "Mac Studio" },
                            { url: "https://www.apple.com/v/mac/home/ca/images/chapternav/mac_pro_light__bly2b0ua4seq_large.svg", title: "Mac Pro" },
                            { url: "https://www.apple.com/v/mac/home/ca/images/chapternav/mac_compare_light__capy8s4wrbhy_large.svg", title: "Compare" },
                            { url: "https://www.apple.com/v/mac/home/ca/images/chapternav/displays_light__d67yrnk0qsa6_large.svg", title: "Display" },
                            { url: "https://www.apple.com/v/mac/home/ca/images/chapternav/mac_accessories_light__esnwbnk4bxqq_large.svg", title: "Accessories" },
                            { url: "https://www.apple.com/v/mac/home/ca/images/chapternav/mac_accessories_light__esnwbnk4bxqq_large.svg", title: "Sequoia" },
                            { url: "https://www.apple.com/v/mac/home/ca/images/chapternav/mac_accessories_light__esnwbnk4bxqq_large.svg", title: "Shop Mac" }
                        ],
                        ribbon: [
                            { id: uuid(), subTitle: 'Last chance to get a gift card up to $150 when you buy an eligible Mac or iPad with education savings. Offer ends 9/30. Δ Shop' }
                        ],
                        welcome: [{
                            first: [
                                {
                                    id: uuid(),
                                    title: 'Mac',
                                    subTitle: 'If you can dream it, Mac can do it.'
                                }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/small_2x.mp4#t=7.56548',
                                    title: 'hello',
                                    type: 'video'
                                }
                            ]
                        }],
                        gallery: [{
                            first: [
                                {
                                    id: '1',
                                    title: 'Get to know Mac',
                                }
                            ],
                            second: [
                                {
                                    id: '1',
                                    url: 'https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_ease__bvgkz2zdltxy_medium_2x.jpg',
                                    subTitle: 'Cutting-Edge Cameras',
                                    title: 'Picture your best',
                                    title1: 'photos and videos',
                                    color: 'white',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'Getting Started',
                                            name:'Easy to use. Easy to love.',
                                            titles:[
                                                {id:'1' , title:'Familiar as iPhone. You’ll feel right at home on Mac, with many of the same apps as iPhone — like Messages, Photos, Notes, and FaceTime.',url:'https://apple.com/v/mac/home/ca/images/overview/consider/boc_ease_01__fubebwkx80q6_large.jpg'},
                                                {id :'2' , title:'Fully loaded. Get started with apps you’ll use every day, like Mail, Calendar, and Safari for surfing the web. And if you want to create documents, spreadsheets, or presentations, there are powerful built-in productivity apps like Pages, Numbers, and Keynote.' , url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_ease_02__5a1r49adu0y6_large.jpg'},
                                                {id:'3' , title:'Simple setup. Migration Assistant makes it easy to transfer your data — including documents, photos, settings, and user accounts — from your previous Mac or PC..' , url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_ease_03__dknq8zpxcogi_large.jpg'}
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: '2',
                                    url: 'https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_iphone__gh1tblkt6bqm_medium_2x.jpg',
                                    subTitle: 'Cutting-Edge Cameras',
                                    title: 'Picture your best',
                                    title1: 'photos and videos',
                                    color: 'white',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'Performance and Battery Life',
                                            name:'Go fast. Go far.',
                                            titles:[
                                                {id:'1' , title:'Supercharged by Apple silicon. Apple silicon brings game-changing power and speed to Mac. It integrates the CPU, GPU, and Neural Engine onto a single power-efficient chip, accelerating everything you do.',url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_performance_01__slniatu7x8yi_large.jpg'},
                                                {id :'2' , title:'Seize the day on a single charge. Thanks to the efficiency of Apple silicon, Mac laptops deliver up to 22 hours of battery life with incredible performance whether you’re plugged in or not.1' , url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_performance_02__b1m37qedkb6q_large.jpg'},
                                                {id:'3' , title:'Work smart. And fast. From designing a stunning presentation to making an epic spreadsheet, Mac lets you get more done faster — whether you’re running to class or running a business.' , url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_performance_03__eapkd2ag65oy_large.jpg'},
                                                {id:'4' , title:'Create at the speed of your imagination. From recording a podcast to editing your first feature film, you can do, make, and create in all-new ways with the speed and power of the ultracapable Mac.' , url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_performance_04__gkxbhujaspme_large.jpg'}
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: '3',
                                    url: 'https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_performance__dh5hyac1zf8m_medium_2x.jpg',
                                    subTitle: 'Cutting-Edge Cameras',
                                    title: 'Picture your best',
                                    title1: 'photos and videos',
                                    color: 'white',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'Mac and iPhone',
                                            name:'Dream team.',
                                            titles:[
                                                {id:'1' , title:'Mac answers the call. You can answer calls or messages from your iPhone directly on your Mac. All the messages that appear on your iPhone appear on your Mac, too.3',url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_mac_iphone_01__d31agqfjcxiu_large.jpg'},
                                                {id :'2' , title:'Shoot on iPhone. See it on Mac. Use your iPhone to take a picture or scan a document and have it automatically appear on your Mac.' , url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_mac_iphone_02__bwopmn2e8rhy_large.jpg'},
                                                {id:'3' , title:'Start here. Finish there. Start an email on your iPhone and finish it on your Mac. With Handoff, when your Mac and iPhone are near each other, you can seamlessly pass what you’re doing from one device to the other.' , url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_mac_iphone_03__fayx0vk3pe2q_large.jpg'}
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: '4',
                                    url: 'https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_compatibility__cu59oukz81ci_medium_2x.jpg',
                                    subTitle: 'Apple Intelligence',
                                    title: 'AI‑opening possibilities.',
                                    color: 'black',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'Compatibility',
                                            name:'Mac runs your favorite apps.',
                                            titles:[
                                                {id:'1' , title:'The apps you love. Right on your Mac. From Microsoft 365 to Adobe Creative Cloud to Zoom,2 all your go-to apps are superfast and snappy on Mac.',url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_compatibility_01__dxaxtbfxpoia_large.jpg'},
                                                {id :'2' , title:'Well connected. Mac comes with all the ports you need to use your favorite accessories, like external displays, hard drives, cameras, and printers.' , url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_compatibility_02__cl2otknevx1e_large.jpg'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: '5',
                                    url: 'https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_durability__epiwcuk7zkeq_medium_2x.jpg',
                                    subTitle: 'Cutting-Edge Cameras',
                                    title: 'Picture your best',
                                    title1: 'photos and videos',
                                    color: 'black',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'Privacy and Security',
                                            name:'Your business is nobody else’s.',
                                            titles:[
                                                {id:'1' , title:'You are your own password. Touch ID keeps all your passwords at the tip of your finger. So you can use it to unlock your Mac, access passkeys, and make payments.',url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_security_01__bi7nitjtbhxy_large.jpg'},
                                                {id :'2' , title:'One app to find it all. If you can’t find your Mac or other Apple devices, the Find My app makes it easy to pinpoint where they are. You can even play a sound to help you locate them.' , url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_security_02__f0q4rcv2huq2_large.jpg'},
                                                {id:'3' , title:'Designed to help protect your privacy. Mac gives you the freedom to choose what you share and how you share it, so you can use apps more securely, protect your data, and keep yourself safer on the web.' , url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_security_03__e67v26fulxg2_large.jpg'}
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id:'6',
                                    url: 'https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_security__gfwda10khdym_medium_2x.jpg',
                                    subTitle: 'Cutting-Edge Cameras',
                                    title: 'Picture your best',
                                    title1: 'photos and videos',
                                    color: 'white',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'Durability',
                                            name:'Built to stand the test of time.',
                                            titles:[
                                                {id:'1' , title:'Super-duper durable. We design our products with durability in mind. Made with recycled aluminum enclosures, Mac computers are exceptionally well built and ready for pretty much anything.',url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_durability_01__ecn2so52g342_large.jpg'},
                                                {id :'2' , title:'Reliably up to date. Our free macOS updates deliver the latest features and help keep Mac running smoothly and securely.' , url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_durability_02__cvo3enplo8cy_large.jpg'}
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: '7',
                                    url: 'https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_values__c9gck9qi4kia_medium_2x.jpg',
                                    subTitle: 'Cutting-Edge Cameras',
                                    title: 'Picture your best',
                                    title1: 'photos and videos',
                                    color: 'black',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'Apple Values',
                                            name:'Our values drive everything we do.',
                                            titles:[
                                                {id:'1' , title:'For a better future. We’re transforming how we make, assemble, and recycle Mac. We now use 100% recycled aluminum in the enclosures of Mac mini, MacBook Air, and MacBook Pro. Because the earth won’t wait. And neither will we.',url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_values_01__bcgexiqnh1n6_large.jpg'},
                                                {id :'2' , title:'Good for you. Good for the planet. With Apple Trade In, you can get a great value for your current Mac and apply it toward a new device. If your Mac isn’t eligible for credit, we’ll recycle it for free.5' , url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_values_02__5x3csdgu94i2_large.jpg'},
                                                {id:'3' , title:'Accessibility for all. With customizable Display Settings, Personal Voice, Live Captions, and more, Mac has industry-leading built-in accessibility features that help you connect, create, and do what you love — in the ways that work best for you.' , url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_values_03__gg2onmibavyy_large.jpg'}
                                            ],
                                        }
                                    ]
                                }
                            ]
                        }],
                        banner: [{
                            first: [
                                { title: 'Help me choose.' }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/mac/home/ca/images/overview/help-me-choose/help_me_choose__0cunyw534bmm_large_2x.jpg',
                                    title: 'find the best Mac for you',
                                    subTitle: 'Whatever You Want',
                                    btn: 'Get started',
                                    color: 'black',
                                    backgroundColor: '#006EDB'

                                }
                            ]
                        }],
                        essentials: [{
                            first: [
                                { title: 'Mac essentials.' }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/mac/home/ca/images/overview/essentials/essentials_accessories__dglhsic54owi_small_2x.jpg',
                                    title: 'Mac accessories',
                                    subTitle: 'Explore keyboards, mice, and other essentials.',
                                    link: 'Shop Mac accessories'
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/mac/home/ca/images/overview/essentials/essentials_display__bk3i351qm0c2_small_2x.jpg',
                                    title: 'Studio Display',
                                    subTitle: 'The 27-inch 5K Retina display pairs beautifully with any Mac.',
                                    link: 'Learn more'
                                }
                            ]
                        }]
                    }),

                    server.create('watch', {
                        nav: [
                            { url: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_s10_link_light__fws1u5oodpm6_large.svg", title: "Apple Watch Series 10" },
                            { url: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_ultra_light__dnosu8kc2tme_large.svg", title: "Apple Watch Ultra 2" },
                            { url: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_se_light__ch5dbdx2ybo2_large.svg", title: "Apple Watch SE" },
                            { url: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_nike_light__c36zk943xfo2_large.svg", title: "Apple Watch Nike" },
                            { url: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_hermes_light__q9veqdmv73ey_large.svg", title: "Apple Watch Hermès" },
                            { url: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_studio_light__dzd9rwk2242u_large.svg", title: "Apple Watch Studio" },
                            { url: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_compare__cdkbsrx8arw2_large.svg", title: "Compare" },
                            { url: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_bands__b9c37m8hpgya_large.svg", title: "Bands" },
                            { url: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_airpods__e9283t02ry2y_large.svg", title: "AirPods" },
                            { url: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_accessories__glsax9gul7ue_large.svg", title: "Accessories" },
                            // { url: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_shop_watch_light__f4fr5gzdhjyy_large.svg", title: "Shop Watch" }
                        ],
                        ribbon: [
                            {
                                id: uuid(),
                                subTitle: 'Get 3 months of Apple Fitness+ when you buy any Apple Watch.'
                            }
                        ],
                        welcome: [{
                            first: [
                                {
                                    id: uuid(),
                                    title: 'Apple Watch',
                                    subTitle: 'The ultimate device ,  for a healthy life.'
                                }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/105/media/us/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/medium_2x.mp4#t=3.321861',
                                    type: 'video'
                                }
                            ]
                        }],
                        gallery: [{
                            first: [
                                {
                                    id: uuid(),
                                    title: 'Get to know Apple Watch.',
                                }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/watch/bo/images/overview/consider/feature_health__b8l8jg8aa0b6_medium_2x.jpg',
                                    subTitle: 'Health',
                                    title: 'Knows you by heart.',
                                    title1: '',
                                    color: 'white',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/watch/bo/images/overview/consider/feature_fitness__bqrhzxk45liu_medium_2x.jpg',
                                    subTitle: 'Fitness',
                                    title: 'Every move counts.',
                                    title1: '',
                                    color: 'black',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/watch/bo/images/overview/consider/feature_connectivity__k68bkgj3a6ie_medium_2x.jpg',
                                    subTitle: 'Connectivity',
                                    title: 'The right call for staying in touch.',
                                    title1: '',
                                    color: 'black',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/watch/bo/images/overview/consider/feature_safety__c5gr3nzfh20y_large_2x.jpg',
                                    subTitle: 'Safety',
                                    title: 'Good help is easy to find.',
                                    color: 'black',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/watch/bo/images/overview/consider/feature_watch_and_iphone__co3lxacgl3qu_medium_2x.jpg',
                                    subTitle: 'Apple Watch + iPhone',
                                    title: 'Dynamic duo',
                                    title1: '',
                                    color: 'black',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/watch/bo/images/overview/consider/feature_personalization__fdz9dgc5afma_medium_2x.jpg',
                                    subTitle: 'Personalization',
                                    title: 'Make it you-nique',
                                    title1: '',
                                    color: 'black',
                                    type:'gridScroll'
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/watch/bo/images/overview/consider/feature_adventure__dswfr09jo8q6_medium_2x.jpg',
                                    subTitle: 'Apple Watch Ultra 2',
                                    title: 'The ultimate sports and adventure watch.',
                                    title1: '',
                                    color: 'white',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/watch/bo/images/overview/consider/feature_family_setup__ghz0t0it1hay_medium_2x.jpg',
                                    subTitle: 'Apple Watch For Your Kids',
                                    title: 'Independence for them. Peace of mind for you.',
                                    title1: '',
                                    color: 'black',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                }
                            ]
                        }],
                        banner: [{
                            first: [
                                { title: 'Help me choose.' }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/watch/bo/images/overview/banner/banner_watch_studio__bj5ig77p2j2a_large_2x.jpg',
                                    title: 'Mix.Match.Make it yours.',
                                    subTitle: 'Choose a case. Pick a band.',
                                    btn: 'Create your style',
                                    color: 'black',
                                    backgroundColor: ''

                                }
                            ]
                        }],
                        essentials: [{
                            first: [
                                { title: 'Apple Watch essentials.' }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/watch/bo/images/overview/essentials/banner_bands__fa2yj1435ia2_small_2x.jpg',
                                    title: 'Show your true colors.',
                                    subTitle: '',
                                    link: 'Shop Apple Watch bands'
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/watch/bo/images/overview/essentials/banner_airpods__bobqeod4vk1y_small_2x.jpg',
                                    title: 'Magic runs in the family.',
                                    subTitle: 'Explore all AirPods models and find the best ones for you.',
                                    link: 'Learn more'
                                }
                            ]
                        }]
                    }),


                    server.create('iPad', {
                        nav: [
                            { url: "https://www.apple.com/v/ipad/home/ck/images/chapternav/ipadpro_light__bbws9fokxn3m_large.svg", title: "iPad Pro" },
                            { url: "https://www.apple.com/v/ipad/home/ck/images/chapternav/pa_ipadair13_gen6_ipadair11_gen6_light__des6pp5gjg2u_large.svg", title: "IPad Air" },
                            { url: "https://www.apple.com/v/ipad/home/ck/images/chapternav/pa_ipadair_gen5_light__cboe3o98m36u_large.svg", title: "iPad" },
                            { url: "https://www.apple.com/v/ipad/home/ck/images/chapternav/ipadmini_light__chl9hj51b9qq_large.svg", title: "iPad mini" },
                            { url: "https://www.apple.com/v/ipad/home/ck/images/chapternav/ipad_compare_light__29tc9jjpoeqe_large.svg", title: "Campare" },
                            { url: "https://www.apple.com/v/ipad/home/ck/images/chapternav/apple_pencil_light__kv36e49avuq2_large.svg", title: "Apple Pencil" },
                            { url: "https://www.apple.com/v/ipad/home/ck/images/chapternav/keyboard_light__f5t6yntcyq2q_large.svg", title: "Keyboards" },
                            { url: "https://www.apple.com/v/ipad/home/ck/images/chapternav/keyboard_light__f5t6yntcyq2q_large.svg", title: "Accessories" },
                            { url: "https://www.apple.com/v/ipad/home/ck/images/chapternav/ipados_light__ebqgefp11ogi_large.svg", title: "IPadOS 18" },
                            { url: "https://www.apple.com/v/ipad/home/ck/images/chapternav/ipados_light__ebqgefp11ogi_large.svg", title: "Shop iPad" },
                        ],
                        ribbon: [
                            {
                                id: uuid(),
                                subTitle: 'Last chance to get a gift card up to $150 when you buy an eligible iPad or Mac with education savings. Offer ends 9/30. Δ Shop.'
                            }
                        ],
                        welcome: [{
                            first: [
                                {
                                    id: uuid(),
                                    title: 'iPad',
                                    subTitle: 'Touch, draw, and type on one magical device.'
                                }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/small_2x.mp4#t=10.97059',
                                    type: 'video'
                                }
                            ]
                        }],
                        gallery: [{
                            first: [
                                {
                                    id: uuid(),
                                    title: 'Get to know iPad.',
                                }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_productivity__d55aee5so6ky_small_2x.jpg',
                                    subTitle: 'Productivity',
                                    title: 'Your workplace can be any place.',
                                    title1: '',
                                    color: 'white',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_creativity__gcfv7x90x42u_small_2x.jpg',
                                    subTitle: 'Creativity',
                                    title: 'Take your inner artist',
                                    title1: '',
                                    color: 'White',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_learning__es1tt702bf6u_small_2x.jpg',
                                    subTitle: 'Learing',
                                    title: 'Your classroom can be anywhere.',
                                    title1: '',
                                    color: 'white',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_entertainment__dcynvyyoe7iq_small_2x.jpg',
                                    subTitle: 'Entertainment',
                                    title: 'Kick back. Tune in. Game on.',
                                    color: 'white',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_pencil__coz76i7lwsuq_small_2x.jpg',
                                    subTitle: 'Apple Pencil',
                                    title: 'Dream it up. Jot it down.',
                                    title1: '',
                                    color: 'white',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_ipados__urrua12bwaqy_small_2x.jpg',
                                    subTitle: 'iPadOS + Apps',
                                    title: 'Everyday superpowers. Built right in.',
                                    title1: '',
                                    color: 'white',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                }
                            ]
                        }],
                        banner: [{
                            first: [
                                { title: 'Help me choose.' }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/ipad/home/ck/images/overview/augment/ia_ipad_iphone__cycr5ovszwmu_small_2x.jpg',
                                    title: 'Mix.Match.Make it yours.',
                                    subTitle: 'Choose a case. Pick a band.',
                                    btn: 'Create your own style',
                                    color: 'white',
                                    backgroundColor: ''

                                }
                            ]
                        }],
                        essentials: [{
                            first: [
                                { title: 'iPad essentials.' }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/ipad/home/ck/images/overview/essentials/bc_pencil__b1ze600aojyq_small_2x.png',
                                    title: 'Apple Pencil.',
                                    subTitle: 'Dream it up. Jot it down.',
                                    link: 'Learn more >'
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/ipad/home/ck/images/overview/essentials/bc_keyboard__b2j4vh67cw76_small_2x.png',
                                    title: 'Keyboards for iPad.',
                                    subTitle: 'Type it out. Take it with you.',
                                    link: 'Learn more >'
                                }
                            ]
                        }]
                    }),


                    server.create('airpod', {
                        nav: [
                            { url: "https://www.apple.com/v/airpods/x/images/chapternav/airpods_4__fqax1brwh46e_large.svg", title: "AirPods" },
                            { url: "https://www.apple.com/v/airpods/x/images/chapternav/airpods_pro_light__ets5a19rt3au_large.svg", title: "AirPods" },
                            { url: "https://www.apple.com/v/airpods/x/images/chapternav/airpods_max_light__cvaaddhgazqu_large.svg", title: "AirPods Max" },
                            { url: "https://www.apple.com/v/airpods/x/images/chapternav/airpods_compare_light__cmuvdvbxj1w2_large.svg", title: "Compare" },
                            { url: "https://www.apple.com/v/airpods/x/images/chapternav/apple_music_light__fexraacz3dme_large.svg", title: "Apple Music" }
                        ],
                        ribbon: [
                            {
                                id: uuid(),
                                subTitle: 'AirPods Pro 2 will soon feature a scientifically validated Hearing Test and a clinical-grade Hearing Aid capability.1'
                            }
                        ],
                        welcome: [{
                            first: [
                                {
                                    id: uuid(),
                                    title: '',
                                    subTitle: ''
                                }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/105/media/us/airpods/2024/b4e8e99e-af2c-413e-84d4-50a9a5ee4fe3/anim/airpods/medium_2x.mp4',
                                    title: 'AirPods 4',
                                    type: 'video'

                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/105/media/us/airpods/2024/b4e8e99e-af2c-413e-84d4-50a9a5ee4fe3/anim/pro/medium_2x.mp4',
                                    type: 'video'
                                }
                            ]
                        }],
                        gallery: [{
                            first: [
                                {
                                    id: uuid(),
                                    title: 'Get to know AirPods.',
                                }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://apple.com/v/airpods/x/images/overview/consider/card_noise_cancellation__bcl69t06noci_large.jpg',
                                    subTitle: 'Active Noise Cancellation',
                                    title: 'Control what you hear. And what you don’t.',
                                    title1: '',
                                    color: 'white',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: uuid(),
                                    url: 'https://apple.com/v/airpods/x/images/overview/consider/card_spatial_audio__uga42js3h4ya_large.jpg',
                                    subTitle: 'Personalized Spatial Audio',
                                    title: 'Immersive sound. Fine‑tuned to you.',
                                    title1: '',
                                    color: 'White',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: uuid(),
                                    url: 'https://apple.com/v/airpods/x/images/overview/consider/card_hearing_health__ss2uxyv3j5m6_large.jpg',
                                    subTitle: 'Hearing Health',
                                    title: 'Check, aid, and help protect your hearing.1.',
                                    title1: '',
                                    color: 'white',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/airpods/x/images/overview/consider/card_iphone__c7gcuw15pxiu_large_2x.jpg',
                                    subTitle: 'Magical Experience',
                                    title: 'Simply effortless.',
                                    title1: '',
                                    color: 'white',
                                    type:'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                }
                            ]
                        }],
                        banner: [{
                            first: [
                                { title: 'Help me choose.' }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/airpods/x/images/overview/music/music_album_stack__bi4gk5n0vwb6_large_2x.png',
                                    title: '',
                                    subTitle: 'Get Music free with your AirPods.',
                                    btn: 'Create Style',
                                    color: '#BA62FC'
                                }
                            ]
                        }],
                        essentials: [{
                            first: [
                                { title: 'EarPods essentials.' }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/airpods/x/images/overview/hero__gb4d3fd8jnu6_small.jpg',
                                    title: 'White EarPods',
                                    subTitle: 'Personalised Spatial Audio',
                                    link: 'Learn more'
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/airpods/x/images/overview/pro_endframe__e2wscfy18pme_small_2x.jpg',
                                    title: 'White EarPods',
                                    subTitle: 'Active Noise Cancellation',
                                    link: 'Learn more'
                                }
                            ]
                        }]
                    }),

                    server.create('tvhome', {
                        type: 'gridImg',
                        nav: [
                            { url: "https://www.apple.com/v/tv-home/n/images/chapternav/light/apple_tv4k_fill_light__b2wtl9srjwb6_large.svg", title: "Apple TV 4K" },
                            { url: "https://www.apple.com/v/tv-home/n/images/chapternav/light/apple_tv_app_light__f6s7yq5zej2a_large.svg", title: "Apple TV app" },
                            { url: "https://www.apple.com/v/tv-home/n/images/chapternav/light/apple_tv_plus_light__fjwmgqxuwomu_large.svg", title: "Apple TV+" },
                            { url: "https://www.apple.com/v/tv-home/n/images/chapternav/light/homepod_light__b9tveb5xovhy_large.svg", title: "HomePod" },
                            { url: "https://www.apple.com/v/tv-home/n/images/chapternav/light/homepodmini_light__genrqjukfl26_large.svg", title: "HomePod mini" },
                            { url: "https://www.apple.com/v/tv-home/n/images/chapternav/light/homekit_light__bu42vvqsjaj6_large.svg", title: "Home app" },
                            { url: "https://www.apple.com/v/tv-home/n/images/chapternav/light/home_accessories_light__eu5v1y6592eu_large.svg", title: "Accessories" }
                        ],
                        ribbon: [
                            {
                                id: uuid(),
                                subTitle: 'AirPods Pro 2 will soon feature a scientifically validated Hearing Test and a clinical-grade Hearing Aid capability.1'
                            }
                        ],
                        welcome: [{
                            first: [
                                {
                                    id: uuid(),
                                    title: '',
                                    subTitle: ''
                                }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://apple.com/v/tv-home/n/images/overview/hero__dbphk49ymi2q_large.jpg',
                                    title: 'The future hits home.',
                                    subTitle: 'Simply connect your favorite devices and transform your house into a remarkably smart, convenient, and entertaining home. Elevate movie night with theater-like picture and sound. Play any song, in any room, from anywhere. And control lights, locks, and thermostats using Siri. All with the security and privacy of Apple.',
                                    type: 'img'
                                }
                            ]
                        }],
                        gallery: [{
                            first: [
                                {
                                    id: uuid(),
                                    title: 'Get to know AirPods.',
                                }
                            ],
                            second: [
                                {
                                    id: 1,
                                    url: 'https://www.apple.com/v/tv-home/n/images/overview/homepod__eam53jjm772a_small_2x.jpg',
                                    subTitle: 'HomePod',
                                    title: 'Profound sound.',
                                    price: '$299',
                                    btn: 'Buy',
                                    link: 'Learn more >',
                                    color: 'white',
                                    backgroundColor: 'black',
                                },
                                {
                                    id: 2,
                                    url: 'https://www.apple.com/v/tv-home/n/images/overview/room_filling_sound__zagu3551kwyi_small_2x.jpg',
                                    subTitle: 'HomePod mini',
                                    title: 'Surprising sound for its size.',
                                    price: '$99',
                                    btn: 'Buy',
                                    link: 'Learn more >',
                                    color: 'black',
                                    backgroundColor: 'white',
                                },
                                {
                                    id: 3,
                                    url: 'https://www.apple.com/v/tv-home/n/images/overview/apple_tv_4k__b30wcqp0pdle_small_2x.jpg',
                                    subTitle: 'apple tv 4k',
                                    title: 'The Apple experience. Cinematic in every sense.',
                                    price: 'Starting at $129',
                                    btn: 'Buy',
                                    link: 'Learn more >',
                                    color: 'black',
                                    backgroundColor: 'white',
                                },
                                {
                                    id: 4,
                                    url: 'https://www.apple.com/v/tv-home/n/images/overview/homeapp__cpc1k972xys2_small_2x.jpg',
                                    subTitle: 'Home app',
                                    title: 'The foundation for a smarter home.',
                                    price: '',
                                    btn: '',
                                    link: 'Learn more >',
                                    color: 'black',
                                    backgroundColor: 'white',
                                },
                            ]
                        }],
                        banner: [{
                            first: [
                                { title: 'Help me choose.' }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/airpods/x/images/overview/music/music_album_stack__bi4gk5n0vwb6_large_2x.png',
                                    title: '',
                                    subTitle: 'Get Music free with your AirPods.',
                                    btn: 'Create Style',
                                    color: '#BA62FC'
                                }
                            ]
                        }],
                        essentials: [{
                            first: [
                                { title: '' }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/airpods/x/images/overview/hero__gb4d3fd8jnu6_small.jpg',
                                    title: '',
                                    subTitle: '',
                                    link: ''
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/airpods/x/images/overview/pro_endframe__e2wscfy18pme_small_2x.jpg',
                                    title: '',
                                    subTitle: '',
                                    link: ''
                                }
                            ]
                        }]
                    }),

                    server.create('iphone', {
                        nav: [
                            {
                                title: "iPhone 16 Pro",
                                url: "https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_16_pro_light__sh8e76empwyq_large.svg",
                                id: uuid()
                            },
                            {
                                title: "iPhone 16",
                                url: "https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_16_light__1g0j6j3ygciy_large.svg",
                                id: uuid()
                            },
                            {
                                title: "iPhone 15",
                                url: "https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_15_light__fj1tpga410a6_large.svg",
                                id: uuid()
                            },
                            {
                                title: "iPhone 14",
                                url: "https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_14_light__cazn2nyanwuq_large.svg",
                                id: uuid()
                            },
                            {
                                title: "iPhoneSE",
                                url: "https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_se_light__cdjrao3pq2he_large.svg",
                                id: uuid()
                            },
                            {
                                title: "compare",
                                url: "https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_compare_light__f01dnbvbb62y_large.svg",
                                id: uuid()
                            },
                            {
                                title: "AirPods",
                                url: "https://www.apple.com/v/iphone/home/bw/images/chapternav/airpods_light__cd9exnztczjm_large.svg",
                                id: uuid()
                            },
                            {
                                title: "AirTag",
                                url: "https://www.apple.com/v/iphone/home/bw/images/chapternav/airtag_light__c19z9f5le0ia_large.svg",
                                id: uuid()
                            },
                            {
                                title: "Accessories",
                                url: "https://www.apple.com/v/iphone/home/bw/images/chapternav/accessories_light__e917u1i857e6_large.svg",
                                id: uuid()
                            },
                            {
                                title: "iOS 18",
                                url: "https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_ios_light__b0jhieo01t0i_large.svg",
                                id: uuid()
                            },
                            {
                                title: "Shop iPhone",
                                url: "https://www.apple.com/v/iphone/home/bw/images/chapternav/shop_iphone_light__e4dlk2n6h26a_large.svg",
                                id: uuid()
                            }
                        ],
                        ribbon: [
                            {
                                id: uuid(),
                                subTitle: 'Pre-order iPhone 16 and iPhone 16 Pro today. Already have an iPhone saved for pre-order? Check out now >'
                            }
                        ],
                        welcome: [{
                            first: [
                                {
                                    id: uuid(),
                                    title: 'iPhone',
                                    subTitle: 'Designed to be loved'
                                }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://apple.com/105/media/us/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/small_2x.mp4#t=6.695677.mp4',
                                    title: 'AirPods 4',
                                    type: 'video'

                                }
                            ]
                        }],
                        gallery: [{
                            first: [
                                {
                                    id: uuid(),
                                    title: 'Get to know iPhone.',
                                }
                            ],
                            second: [
                                {
                                    id: 1,
                                    url: 'https://www.apple.com/v/iphone/home/bw/images/overview/consider/apple_intelligence__gbh77cvflkia_medium_2x.jpg',
                                    subTitle: 'Apple Intelligence',
                                    title: 'AI‑opening possibilities.',
                                    color: 'white',
                                    type: 'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'Apple Intelligence',
                                            name:'AI-opening possibilities.',
                                            titles:[
                                                {id:'1' , title:'Now that’s smart. Our latest iPhone models are built for Apple Intelligence, the personal intelligence system that helps you write, express yourself, and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple.1',url:'https://www.apple.com'},
                                                {id:'2' , title:'Find just the right words. Writing Tools can proofread your text and rewrite different versions until the tone is just right, and summarize selected text with a simple tap. Theyre available nearly everywhere you write, including third-party apps.',url:'https://www.apple.com'},
                                                {id:'3' , title:'Express yourself visually. Make a Genmoji right in the keyboard to match any conversation. Want to create a rainbow cactus? You got it. Just provide a description to see a preview.',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'Express yourself visually. Make a Genmoji right in the keyboard to match any conversation. Want to create a rainbow cactus? You got it. Just provide a description to see a preview.',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},

                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: 2,
                                    url: 'https://www.apple.com/v/iphone/home/bw/images/overview/consider/camera__exi2qfijti0y_medium_2x.jpg',
                                    subTitle: 'Cutting-Edge Cameras',
                                    title: 'Picture your best',
                                    title1: 'photes and videos',
                                    color: 'white',
                                    type: 'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: 3,
                                    url: 'https://www.apple.com/v/iphone/home/bw/images/overview/consider/battery__2v7w6kmztvm2_medium_2x.jpg',
                                    subTitle: 'Chip and Battery Life',
                                    title: 'Fast that lasts.',
                                    color: 'white',
                                    type: 'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: 4,
                                    url: 'https://www.apple.com/v/iphone/home/bw/images/overview/consider/innovation__os9bmmo3mjee_medium_2x.jpg',
                                    subTitle: 'Innovation',
                                    title: 'Beautiful and durable,',
                                    title1: 'by Design',
                                    color: 'black',
                                    type: 'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: 5,
                                    url: 'https://www.apple.com/v/iphone/home/bw/images/overview/consider/environment__e3v3gj88dl6q_medium_2x.jpg',
                                    subTitle: 'Environment',
                                    title: 'Recycle.Reuse.Repeat.',
                                    color: 'black',
                                    type: 'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: 6,
                                    url: 'https://www.apple.com/v/iphone/home/bw/images/overview/consider/privacy__ckc0wa30o55y_medium_2x.jpg',
                                    subTitle: 'Privacy',
                                    title: 'Your Data',
                                    title1: 'Just where you want it',
                                    color: 'white',
                                    type: 'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: 7,
                                    url: 'https://www.apple.com/v/iphone/home/bw/images/overview/consider/personalize__dwg8srggrbo2_medium_2x.jpg',
                                    subTitle: 'Customize Your iPhone',
                                    title: 'Make it you.',
                                    title1: 'Thought and through',
                                    color: 'white',
                                    type: 'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                },
                                {
                                    id: 8,
                                    url: 'https://www.apple.com/v/iphone/home/bw/images/overview/consider/safety__bwp7rsowtjiu_medium_2x.jpg',
                                    subTitle: 'Peace of Mind',
                                    title: 'Helpful safety features.',
                                    title1: 'Just in case.',
                                    color: 'white',
                                    type: 'gridScroll',
                                    popUp:[
                                        {
                                            id:'1',
                                            subTitle:'',
                                            name:'',
                                            titles:[
                                                {id:'1' , title:'',url:'https://www.apple.com'},
                                                {id:'2' , title:'',url:'https://www.apple.com'},
                                                {id:'3' , title:'',url:'https://www.apple.com'},
                                                {id:'4' , title:'',url:'https://www.apple.com'},
                                            ],
                                        }
                                    ]
                                }
                            ]
                        }],
                        banner: [{
                            first: [
                                { title: 'Take a closer look at our latest models.' }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/iphone/home/bw/images/overview/banner/guided_tour__dna6wcz8ieie_small_2x.jpg',
                                    title: 'A Guided Tour of iPhone 16 & iPhone 16 Pro',
                                    subTitle: '',
                                    btn: 'Watch the film',
                                    color: 'white'
                                }
                            ]
                        }],
                        essentials: [{
                            first: [
                                { title: 'iPhone essentials.' }
                            ],
                            second: [
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/iphone/home/bw/images/overview/essentials/magsafe__dac2joyve8wi_large.jpg',
                                    title: 'MagSafe',
                                    subTitle: 'A magnetic case, wallet or both.And get fast, efficient wireless charging.',
                                    link: 'Shop MagSafe accessories'
                                },
                                {
                                    id: uuid(),
                                    url: 'https://www.apple.com/v/iphone/home/bw/images/overview/essentials/airtag__furx99ax8rm2_small.jpg',
                                    title: 'AirTag',
                                    subTitle: 'Attach one to your keys. Put another in your backpack.If they’re misplaced, just use the Find My app.',
                                    link: 'Buy'
                                }
                            ]
                        }]
                    })
        },

        routes() {
            this.namespace = "api/apple"
            this.namespace = 'api';
            this.get('/ItemLists', (schema) => {
                return schema.itemLists.all()
            })
            this.get('/testLists', (schema) => {
                return schema.testLists.all()
            })
            this.get('/supports', (schema) => {
                return schema.supports.all()
            })
            this.get('/supportPros', (schema) => {
                return schema.supportPros.all()
            })
            this.get('/appleCares', (schema) => {
                return schema.appleCares.all()
            })
            this.get('/footers', (schema) => {
                return schema.footers.all()
            })
            this.get('/gridPhotos', (schema) => {
                return schema.gridPhotos.all();
            })

            this.get('/details', (schema) => {
                return schema.details.all();
            })

            this.get('/iPhoneessentials', (schema) => {
                return schema.iPhoneessentials.all();
            })

            this.get('/browserProducts', (schema) => {
                return schema.browserProducts.all();
            })

            this.get('/browserCategories', (schema) => {
                return schema.browserCategories.all();
            })

            this.get('/macs', (schema) => {
                return schema.macs.all();
            })

            this.get('/iPads', (schema) => {
                return schema.iPads.all();
            })

            this.get('/watches', (schema) => {
                return schema.watches.all();
            })

            this.get('/airpods', (schema) => {
                return schema.airpods.all();
            })

            this.get('/tvhomes', (schema) => {
                console.log("tv", schema);
                return schema.tvhomes.all();
            })

            this.get('/iphones', (schema) => {
                console.log("iphones", schema);
                return schema.iphones.all();
            })

        }
    })
    return server;
}

// popUp:[
//     {
//         id:'1',
//         subTitle:'',
//         name:'',
//         titles:[
//             {id:'1' , title:'',url:''},
//             {id :'2' , title:'' , url:''},
//             {id:'3' , title:'' , url:''}
//         ],
//     }
// ]


// https://www.apple.com