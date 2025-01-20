import React, { useState, ReactNode } from 'react';
import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index';
import ProfileInfo from '../components/ProfileInfo';
import { useLocation } from 'react-router-dom';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isWelcomePage = location.pathname === '/';
  const isSignInPage = location.pathname === '/signin';
  const isSignUpPage = location.pathname === '/signup';
  const hiddenPage = isWelcomePage || isSignInPage || isSignUpPage;
  // !isWelcomePage && !isSignInPage && !isSignUpPage &&

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        {!hiddenPage && (
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        )}
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <div className="flex">
            <div className="flex flex-col w-full mx-auto">
              {/* <!-- ===== Header Start ===== --> */}
              {!hiddenPage && (
                <Header
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
              )}
              {/* <!-- ===== Header End ===== --> */}

              {/* <!-- ===== Main Content Start ===== --> */}
              <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                  {children}
                </div>
              </main>
              {/* <!-- ===== Main Content End ===== --> */}
            </div>
            {!hiddenPage && (
              <div className="flex flex-col mx-auto h-full max-w-screen-2xl lg:w-1/3">
                <ProfileInfo />
              </div>
            )}
          </div>
        </div>

        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default DefaultLayout;
