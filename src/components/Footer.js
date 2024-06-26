import Menu from './ui/Menu'
import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";


export default function Footer() {
  const menus = [
    {
      title:'Getir\'i Keşfedin',
      items:[
        {
          title:'Hakkımızda'
        },
        {
          title:'Kariyer'
        },
        {
          title:'İletişim'
        },
        {
          title:'Covid-19 Duyuru'
        },
        {
          title:'Sosyal Sorumluluk Projeleri'
        }
      ]
    },
    {
      title:'Yardıma mı ihtiyacınız var?',
      items:[
        {
          title:'Sıkça Sorulan Sorular'
        },
        {
          title:'Kişisel Verilerin Korunması'
        },
        {
          title:'Gizlilik Politikası'
        },
        {
          title:'Kullanım Koşulları'
        },
        {
          title:'Çerez Politikası'
        }
      ]
    },
    {
      title:'İş ortağımız olun',
      items:[
        {
          title:'Bayimiz olun'
        },
        {
          title:'Deponuzu Kiralayın'
        },
        {
          title:'GetirYemek Restoranı Olun'
        },
        {
          title:'GetirÇarşı İşletmesi Olun'
        }
      ]
    }
  ]
  return (
    <div className="bg-white mt-10" >
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid gap-y-6 md:grid-cols-2 lg:grid-cols-4 pt-5 md:pt-10">
          <section>
            <ul className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-1">
            <h6 className="text-lg text-primary-brand-color mb-4">Getir'i indirin!</h6>
            <li>
								<a href="#">
									<img
										src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
										alt=""/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
										alt=""/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
										alt=""/>
								</a>
							</li>
            </ul>
          </section>
          {menus.map((menu,index) => <Menu key={index} {...menu} />)}
        </div>
        <div className=' flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-100 mt-6 py-6'>
        <div className='text-xs text-gray-700 flex gap-x-8'>
        &copy; 2021 Getir
        <a href='#' className='text-primary-brand-color hover:underline'>
          Bilgi Toplumu Hizmetleri
        </a>
        </div>
        <nav className='flex gap-x-3'>
          <a href='#' className='w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center'>
          <FaFacebook size={21} />
          </a>
          <a href='#' className='w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center'>
          <FaTwitter size={21} />
          </a>
          <a href='#' className='w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center'>
          <FaInstagram size={21} />
          </a>
          <a href='#' className='h-8 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color hover:border-transparent flex items-center px-2 border text-xs gap-x-2 text-gray-500 rounded border-gray-100'>
          <BiGlobe size={18}/>
          Türkçe (TR)
          </a>
        </nav>
      </div>
      </div>
      </div>
      
  )
}
