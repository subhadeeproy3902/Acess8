import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Sidebar = () => {
  const location = useLocation();
  const isUrlShortenerPage = location.pathname === "/dashboard/url-shortener";
  const isQrGeneratorPage = location.pathname === "/dashboard/qr-generator";
  const { currentUser, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsMenuOpen(false);
  };
  const history = useNavigate();
  async function handleLogout() {
    try {
      await logout();
      history("/login");
    } catch {
      console.log("Failed to logout");
    }
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(false);
  };

  useEffect(() => {
    return () => {
      setIsOpen(false);
      setIsMenuOpen(false);
    };
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setIsDropdownOpen(isUrlShortenerPage || isQrGeneratorPage);
  }, [location.pathname, isUrlShortenerPage, isQrGeneratorPage]);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 pb-4 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={handleMenuToggle}>
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <Link
                to="/"
                className="flex pl-4 items-center"
              >
                <img
                  src="/assets/acess_logo.webp"
                  className="h-12 pt-1"
                  loading="lazy"
                  alt="Flowbite Logo"
                />
                <span className="self-center pt-4 text-2xl font-semibold whitespace-nowrap dark:text-white">
                  cess8
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user"
                    onClick={handleToggle}>
                    <span className="sr-only">Open user menu</span>
                    <img className="w-10 h-10 rounded-full" src={currentUser.photoURL} loading="lazy" alt="" />
                  </button>
                </div>
                {isOpen &&
                  <div className="z-50 absolute top-12 right-1 lg:right-3 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                    <div className="px-4 py-3" role="none">
                      <p className="text-sm text-gray-900 dark:text-white" role="none">
                        {currentUser.displayName}
                      </p>
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                        {currentUser.email}
                      </p>
                    </div>
                    <ul className="p-4" aria-labelledby="user-menu-button">
                      <li>
                        <button
                          onClick={handleLogout}
                          className="bg-blue-500 hover:bg-blue-600 duration-75 text-white p-2 rounded-md w-full text-center"
                        >
                          Sign out
                        </button>
                      </li>
                    </ul>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside id="logo-sidebar" className={`z-10 w-64 fixed inset-y-0 left-0 pt-[4.5rem] flex-shrink-0 lg:translate-x-0 bg-white dark:bg-gray-900 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className="h-full px-3 pb-4 pt-6 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-3 font-medium">
            <CustomLink to="/dashboard">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Dashboard</span>
            </CustomLink>
            <CustomLink to="/dashboard/dbabout">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75" fill="currentColor" viewBox="0 0 50 50">
                <path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z"></path>
              </svg>
              <span className="ms-3">About</span>
            </CustomLink>
            <li>
              <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example"
                onClick={handleDropdownToggle}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Products</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul id="dropdown-example" className="pt-2 space-y-2">
                  <ProductLink to="/dashboard/url-shortener">Mynly
                  </ProductLink>
                  <ProductLink to="/dashboard/qr-generator">QR7
                  </ProductLink>
                </ul>
              )}
            </li>
            <CustomLink to="/dashboard/past-urls">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7285 3.88396C17.1629 2.44407 19.2609 2.41383 20.4224 3.57981C21.586 4.74798 21.5547 6.85922 20.1194 8.30009L17.6956 10.7333C17.4033 11.0268 17.4042 11.5017 17.6976 11.794C17.9911 12.0863 18.466 12.0854 18.7583 11.7919L21.1821 9.35869C23.0934 7.43998 23.3334 4.37665 21.4851 2.5212C19.6346 0.663551 16.5781 0.905664 14.6658 2.82536L9.81817 7.69182C7.90688 9.61053 7.66692 12.6739 9.51519 14.5293C9.80751 14.8228 10.2824 14.8237 10.5758 14.5314C10.8693 14.2391 10.8702 13.7642 10.5779 13.4707C9.41425 12.3026 9.44559 10.1913 10.8809 8.75042L15.7285 3.88396Z" fill="currentColor" />
                <path d="M14.4851 9.47074C14.1928 9.17728 13.7179 9.17636 13.4244 9.46868C13.131 9.76101 13.1301 10.2359 13.4224 10.5293C14.586 11.6975 14.5547 13.8087 13.1194 15.2496L8.27178 20.1161C6.83745 21.556 4.73937 21.5863 3.57791 20.4203C2.41424 19.2521 2.44559 17.1408 3.88089 15.6999L6.30473 13.2667C6.59706 12.9732 6.59614 12.4984 6.30268 12.206C6.00922 11.9137 5.53434 11.9146 5.24202 12.2081L2.81818 14.6413C0.906876 16.5601 0.666916 19.6234 2.51519 21.4789C4.36567 23.3365 7.42221 23.0944 9.33449 21.1747L14.1821 16.3082C16.0934 14.3895 16.3334 11.3262 14.4851 9.47074Z" fill="currentColor" />
              </svg>
              <span className="ms-3">Past URLs</span>
            </CustomLink>
            <CustomLink to="/dashboard/past-qrs">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-50 transition duration-75" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                  <path d="M10.5531 13.4469C10.1294 13.0232 9.60212 12.8505 9.01812 12.772C8.46484 12.6976 7.76789 12.6976 6.93209 12.6977L5.82717 12.6977C5.24648 12.6977 4.76184 12.6976 4.36823 12.7351C3.95674 12.7742 3.57325 12.8591 3.22152 13.0746C2.87731 13.2856 2.5879 13.575 2.37697 13.9192C2.16142 14.2709 2.07653 14.6544 2.0374 15.0659C1.99998 15.4595 1.99999 15.9442 2 16.5249V16.5932C1.99999 17.477 1.99999 18.1897 2.05454 18.7635C2.1108 19.3552 2.22996 19.8707 2.51405 20.3343C2.80168 20.8037 3.19632 21.1983 3.6657 21.486C4.12929 21.77 4.64482 21.8892 5.23653 21.9455C5.8103 22 6.52304 22 7.40683 22H7.47507C8.05577 22 8.54048 22 8.9341 21.9626C9.34559 21.9235 9.72907 21.8386 10.0808 21.623C10.425 21.4121 10.7144 21.1227 10.9254 20.7785C11.1409 20.4267 11.2258 20.0433 11.2649 19.6318C11.3024 19.2382 11.3023 18.7535 11.3023 18.1728L11.3023 17.0679C11.3024 16.2321 11.3024 15.5352 11.228 14.9819C11.1495 14.3979 10.9768 13.8706 10.5531 13.4469Z" fill="currentColor" />
                  <path d="M8.9341 2.0374C9.34559 2.07653 9.72907 2.16142 10.0808 2.37697C10.425 2.5879 10.7144 2.87731 10.9254 3.22152C11.1409 3.57325 11.2258 3.95674 11.2649 4.36823C11.3024 4.76183 11.3023 5.24658 11.3023 5.82726L11.3023 6.93212C11.3024 7.7679 11.3024 8.46484 11.228 9.01812C11.1495 9.60212 10.9768 10.1294 10.5531 10.5531C10.1294 10.9768 9.60212 11.1495 9.01812 11.228C8.46484 11.3024 7.76787 11.3024 6.93209 11.3023L5.82711 11.3023C5.24643 11.3023 4.76183 11.3024 4.36823 11.2649C3.95674 11.2258 3.57325 11.1409 3.22152 10.9254C2.87731 10.7144 2.5879 10.425 2.37697 10.0808C2.16142 9.72907 2.07653 9.34559 2.0374 8.9341C1.99998 8.54047 1.99999 8.05579 2 7.47506V7.40679C1.99999 6.52302 1.99999 5.81029 2.05454 5.23653C2.1108 4.64482 2.22996 4.12929 2.51405 3.6657C2.80168 3.19632 3.19632 2.80168 3.6657 2.51405C4.12929 2.22996 4.64482 2.1108 5.23653 2.05454C5.81029 1.99999 6.52307 1.99999 7.40684 2H7.4751C8.05583 1.99999 8.54047 1.99998 8.9341 2.0374Z" fill="currentColor" />
                  <path d="M16.5932 2H16.5249C15.9442 1.99999 15.4595 1.99998 15.0659 2.0374C14.6544 2.07653 14.2709 2.16142 13.9192 2.37697C13.575 2.5879 13.2856 2.87731 13.0746 3.22152C12.8591 3.57325 12.7742 3.95674 12.7351 4.36823C12.6976 4.76185 12.6977 5.24654 12.6977 5.82725L12.6977 6.93209C12.6976 7.76789 12.6976 8.46484 12.772 9.01812C12.8505 9.60212 13.0232 10.1294 13.4469 10.5531C13.8706 10.9768 14.3979 11.1495 14.9819 11.228C15.5352 11.3024 16.2321 11.3024 17.0679 11.3023L18.1728 11.3023C18.7535 11.3023 19.2382 11.3024 19.6318 11.2649C20.0433 11.2258 20.4267 11.1409 20.7785 10.9254C21.1227 10.7144 21.4121 10.425 21.623 10.0808C21.8386 9.72907 21.9235 9.34559 21.9626 8.9341C22 8.54048 22 8.05587 22 7.47517V7.40683C22 6.52304 22 5.8103 21.9455 5.23653C21.8892 4.64482 21.77 4.12929 21.486 3.6657C21.1983 3.19632 20.8037 2.80168 20.3343 2.51405C19.8707 2.22996 19.3552 2.1108 18.7635 2.05454C18.1897 1.99999 17.477 1.99999 16.5932 2Z" fill="currentColor" />
                </g>
                <path opacity="0.6" d="M14.0926 21.3024C14.0926 21.6877 13.7803 22.0001 13.3949 22.0001C13.0096 22.0001 12.6973 21.6877 12.6973 21.3024V18.5117H14.0926V21.3024Z" fill="currentColor" />
                <path opacity="0.6" d="M21.3022 12.6978C20.9169 12.6978 20.6045 13.0101 20.6045 13.3954V16.6512H21.9998V13.3954C21.9998 13.0101 21.6875 12.6978 21.3022 12.6978Z" fill="currentColor" />
                <path d="M16.0761 16.6173C16 16.8011 16 17.0341 16 17.5C16 17.9659 16 18.1989 16.0761 18.3827C16.1776 18.6277 16.3723 18.8224 16.6173 18.9239C16.8011 19 17.0341 19 17.5 19C17.9659 19 18.1989 19 18.3827 18.9239C18.6277 18.8224 18.8224 18.6277 18.9239 18.3827C19 18.1989 19 17.9659 19 17.5C19 17.0341 19 16.8011 18.9239 16.6173C18.8224 16.3723 18.6277 16.1776 18.3827 16.0761C18.1989 16 17.9659 16 17.5 16C17.0341 16 16.8011 16 16.6173 16.0761C16.3723 16.1776 16.1776 16.3723 16.0761 16.6173Z" fill="currentColor" />
                <path opacity="0.7" d="M21.9992 18.5352V18.5117H20.6039C20.6039 18.9547 20.6035 19.252 20.5878 19.4822C20.5725 19.7061 20.5451 19.8152 20.5154 19.8869C20.3974 20.1718 20.171 20.3982 19.8861 20.5162C19.8143 20.546 19.7053 20.5734 19.4813 20.5887C19.2511 20.6044 18.9538 20.6047 18.5109 20.6047H16.6504V22.0001H18.5344C18.9478 22.0001 19.293 22.0001 19.5763 21.9808C19.8713 21.9606 20.1499 21.9173 20.42 21.8054C21.0469 21.5457 21.5449 21.0477 21.8045 20.4209C21.9164 20.1508 21.9598 19.8722 21.9799 19.5772C21.9992 19.2938 21.9992 18.9487 21.9992 18.5352Z" fill="currentColor" />
                <path opacity="0.6" d="M12.6973 16.6156V16.6512H14.0926C14.0926 15.9835 14.0935 15.5352 14.1282 15.1934C14.1618 14.8633 14.2212 14.7108 14.2886 14.6099C14.3734 14.4829 14.4824 14.3739 14.6094 14.2891C14.7103 14.2217 14.8628 14.1623 15.1929 14.1287C15.5347 14.0939 15.983 14.0931 16.6508 14.0931H18.5112V12.6978H16.6151C15.9922 12.6977 15.4725 12.6977 15.0517 12.7405C14.6113 12.7853 14.2025 12.8827 13.8342 13.1289C13.5549 13.3155 13.315 13.5553 13.1284 13.8347C12.8823 14.203 12.7848 14.6118 12.74 15.0522C12.6972 15.473 12.6973 15.9927 12.6973 16.6156Z" fill="currentColor" />
                <path d="M5.50821 18.6903C5.72656 18.8452 6.03581 18.8452 6.6543 18.8452C7.27278 18.8452 7.58203 18.8452 7.80038 18.6903C7.87743 18.6356 7.9447 18.5683 7.99937 18.4913C8.1543 18.2729 8.1543 17.9637 8.1543 17.3452C8.1543 16.7267 8.1543 16.4175 7.99937 16.1991C7.9447 16.1221 7.87743 16.0548 7.80038 16.0001C7.58203 15.8452 7.27276 15.8452 6.65428 15.8452C6.0358 15.8452 5.72656 15.8452 5.50821 16.0001C5.43117 16.0548 5.36389 16.1221 5.30923 16.1991C5.1543 16.4175 5.1543 16.7267 5.1543 17.3452C5.1543 17.9637 5.1543 18.2729 5.30923 18.4913C5.36389 18.5683 5.43117 18.6356 5.50821 18.6903Z" fill="currentColor" />
                <path d="M6.6543 8.15479C6.03581 8.15479 5.72656 8.15479 5.50821 7.99986C5.43117 7.94519 5.36389 7.87792 5.30923 7.80087C5.1543 7.58252 5.1543 7.27327 5.1543 6.65479C5.1543 6.0363 5.1543 5.72705 5.30923 5.5087C5.36389 5.43165 5.43117 5.36438 5.50821 5.30971C5.72656 5.15479 6.03581 5.15479 6.6543 5.15479C7.27278 5.15479 7.58203 5.15479 7.80038 5.30971C7.87743 5.36438 7.9447 5.43165 7.99937 5.5087C8.1543 5.72705 8.1543 6.0363 8.1543 6.65479C8.1543 7.27327 8.1543 7.58252 7.99937 7.80087C7.9447 7.87792 7.87743 7.94519 7.80038 7.99986C7.58203 8.15479 7.27278 8.15479 6.6543 8.15479Z" fill="currentColor" />
                <path d="M16.1996 8C16.418 8.15493 16.7272 8.15493 17.3457 8.15493C17.9642 8.15493 18.2734 8.15493 18.4918 8C18.5688 7.94533 18.6361 7.87806 18.6908 7.80101C18.8457 7.58266 18.8457 7.27342 18.8457 6.65493C18.8457 6.03644 18.8457 5.7272 18.6908 5.50885C18.6361 5.4318 18.5688 5.36453 18.4918 5.30986C18.2734 5.15493 17.9642 5.15493 17.3457 5.15493C16.7272 5.15493 16.418 5.15493 16.1996 5.30986C16.1226 5.36453 16.0553 5.4318 16.0006 5.50885C15.8457 5.7272 15.8457 6.03647 15.8457 6.65494C15.8457 7.27342 15.8457 7.58266 16.0006 7.80101C16.0553 7.87806 16.1226 7.94533 16.1996 8Z" fill="currentColor" />
              </svg>
              <span className="ms-3">Past QRs</span>
            </CustomLink>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <CustomLink to="/dashboard/upgrade-to-pro">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
                <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z" />
              </svg>
              <span className="ms-3">Upgrade to Pro</span>
            </CustomLink>
            <CustomLink to="/dashboard/documentation">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
              </svg>
              <span className="ms-3">Documentation</span>
            </CustomLink>
            <CustomLink to="/dashboard/support">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 21">
                <path d="m5.4 2.736 3.429 3.429A5.046 5.046 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412c.136-.133.287-.248.45-.344A9.889 9.889 0 0 0 10.269 1c-1.87-.041-3.713.44-5.322 1.392a2.3 2.3 0 0 1 .454.344Zm11.45 1.54-.126-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.65.645.034.038.078.067.11.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.01.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.02-.013.033-.018a3.011 3.011 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.35.447L14.84 9.823c.112.428.166.869.16 1.311-.01.356-.06.709-.147 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.18.157h-.134c-.356-.01-.71-.06-1.056-.147l-3.41 3.412a2.503 2.503 0 0 1-.443.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.519 2.519 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.507 2.507 0 0 1-.35-.447 9.889 9.889 0 0 0 0 10.1c.1-.164.217-.316.35-.453Zm5.101-.758a4.957 4.957 0 0 1-.651-.645c-.033-.038-.077-.067-.11-.107L3.15 17.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.03-.018-.05-.053-.078-.076ZM6.08 7.914c.03-.037.07-.063.1-.1.183-.22.384-.423.6-.609.047-.04.082-.092.129-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707L6.08 7.914Z" />
              </svg>
              <span className="ms-3">Help</span>
            </CustomLink>
          </ul>
        </div>
      </aside>

    </>
  );
};

function ProductLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <li>
      <Link
        to={to} {...props}
        className={isActive ? "flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 bg-blue-700" : "flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"}
      >
        {children}
      </Link>
    </li>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <li>
      <Link
        to={to} {...props}
        className={isActive ? "flex items-center p-2 bg-blue-700 text-white rounded-lg group" : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
      >
        {children}
      </Link>
    </li>
  );
}

export default Sidebar;
