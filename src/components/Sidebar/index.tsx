import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import SidebarLinkGroup from './SidebarLinkGroup';
import Logo from '../../images/logo/logo.png';

import { RxDashboard } from 'react-icons/rx';
import { IoCalendar } from 'react-icons/io5';
import { LuUsers, LuUser } from 'react-icons/lu';
import { PiChatDots } from 'react-icons/pi';
import { FaArrowLeft } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Separator = () => {
  return <div className="h-px bg-gray-600 my-3" />;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  // const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  // const [sidebarExpanded, setSidebarExpanded] = useState(
  //   storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  // );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // useEffect(() => {
  //   localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
  //   if (sidebarExpanded) {
  //     document.querySelector('body')?.classList.add('sidebar-expanded');
  //   } else {
  //     document.querySelector('body')?.classList.remove('sidebar-expanded');
  //   }
  // }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-60 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:pt-5.5 pb-2 bg-white">
        <NavLink to="/" className="flex-grow text-center">
          <img src={Logo} alt="Logo" className="mx-auto max-w-20" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <FaArrowLeft />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-1 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      isActive ? 'bg-white text-bodydark2 dark:bg-meta-4' : ''
                    }`
                  }
                >
                  <RxDashboard />
                  Dashboard
                </NavLink>
              </li>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Modul --> */}
              <li>
                <NavLink
                  to="#"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('#') &&
                    'bg-white text-bodydark2 dark:bg-meta-4'
                  }`}
                >
                  <IoCalendar />
                  Modul
                </NavLink>
              </li>
              {/* <!-- Menu Item Modul --> */}

              {/* <!-- Menu Item Peserta --> */}
              <li>
                <NavLink
                  to="/profile"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('profile') &&
                    'bg-white text-bodydark2 dark:bg-meta-4'
                  }`}
                >
                  <LuUsers />
                  Peserta
                </NavLink>
              </li>
              {/* <!-- Menu Item Peserta --> */}

              {/* <!-- Menu Item Group Chat --> */}
              <li>
                <NavLink
                  to="/tables"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('tables') &&
                    'bg-white text-bodydark2 dark:bg-meta-4'
                  }`}
                >
                  <PiChatDots />
                  Group Chat
                </NavLink>
              </li>
              {/* <!-- Menu Item Group Chat --> */}

              {/* <!-- Menu Item Pemateri --> */}
              <li>
                <NavLink
                  to="/#"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('#') &&
                    'bg-white text-bodydark2 dark:bg-meta-4'
                  }`}
                >
                  <LuUser />
                  Pemateri
                </NavLink>
              </li>
              {/* <!-- Menu Item Pemateri --> */}
            </ul>
          </div>

          <Separator />

          {/* <!-- Profile Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark1">
              PROFILE
            </h3>

            <ul className=" flex flex-col gap-1.5">
              {/* <!-- Menu Item Settings --> */}
              <li>
                <NavLink
                  to="/settings"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('settings') &&
                    'bg-white text-bodydark2 dark:bg-meta-4'
                  }`}
                >
                  <IoSettingsOutline />
                  Settings
                </NavLink>
              </li>
              {/* <!-- Menu Item Settings --> */}

              {/* <!-- Menu Item Kalender --> */}
              <li>
                <NavLink
                  to="/calendar"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('calendar') &&
                    'bg-white text-bodydark2 dark:bg-meta-4'
                  }`}
                >
                  <FaRegCalendarAlt />
                  Kalender
                </NavLink>
              </li>
              {/* <!-- Menu Item Kalender --> */}
            </ul>
          </div>

          <Separator />

          {/* <!-- Profile Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Logout --> */}
              <li>
                <NavLink
                  to="#"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('#') &&
                    'bg-white text-bodydark2 dark:bg-meta-4'
                  }`}
                >
                  <AiOutlineLogout />
                  Logout
                </NavLink>
              </li>
              {/* <!-- Menu Item Logout --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
