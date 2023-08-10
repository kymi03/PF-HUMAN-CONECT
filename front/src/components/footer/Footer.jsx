import React from 'react'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function FooterMoreInfo() {
  return (
    

<footer className=" bg-black dark:bg-gray-900">
    <div className="mx-auto  w-full max-w-screen-xl p-4 py-6 lg:py-8">
    
      <div className="sm:flex h-1 sm:items-center sm:justify-between">

          {/* <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <div href="http://localhost:5173/" className="hover:underline">Human Conet</div>. Todos los derechos reservados
          </span> */}
          <p className=" text-center pt-3 mt-3 font-gilroy text-gray-500 text-sm">
                <Link to={"/home"} className=" text-gray-500 hover:text-corn text-sm underline">
                  Human Conet
                </Link>
          {" || Todos los derechos reservados"}© 2023{" "}
              </p> 
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              {/* <div   className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </div>
              <div   className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span className="sr-only">Discord community</span>
              </div>
              <div   className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </div> */}
              <div className="flex space-x-5 pt-5 justify-center">
            <Link to="https://www.instagram.com/humanconet.es/?hl=fr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-corn dark:hover:text-white">
              <AiFillInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram page</span>
            </Link>

            <Link to="https://twitter.com/Human_Conet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-corn dark:hover:text-white">
              <BsTwitter className="w-5 h-5" />
              <span className="sr-only">Twitter page</span>
           </Link>

           <Link to="https://www.youtube.com/channel/UCUSeWaaZ5-T3NIEIFBiccwA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-corn dark:hover:text-white">
              <AiFillYoutube className="w-5 h-5" />
              <span className="sr-only">YouTube page</span>
           </Link>
          </div>

          </div>
      </div>
    </div>
</footer>

  )
}

export default FooterMoreInfo