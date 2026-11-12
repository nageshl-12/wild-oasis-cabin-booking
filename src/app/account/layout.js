import SideNavigation from '@/components/SideNavigation';

export default function Layout({ children }) {
  return (
    <div className="grid min-h-0 grid-rows-[1fr_1rem] gap-2 md:grid-cols-[16rem_1fr] md:grid-rows-1 md:gap-12 relative md:px-10 md:py-10 px-3 py-3 justify-center">
      <div className="row-start-1 min-h-0 min-w-0 py-1 md:col-start-2 overflow-y-auto px-2">
        {children}
      </div>

      <div className="md:static w-full fixed -translate-x-2 -bottom-0.5 z-50 bg-primary-950 row-start-2 md:col-start-1 py md:row-start-1 md:border-t-0 justify-center border-t border-primary-800">
        <SideNavigation />
      </div>
    </div>
  );
}
