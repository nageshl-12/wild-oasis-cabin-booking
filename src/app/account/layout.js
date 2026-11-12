import SideNavigation from '@/components/SideNavigation';

export default function Layout({ children }) {
  return (
    <div className="relative grid min-h-0 grid-rows-[1fr_1rem] gap-2 px-3 py-3 md:grid-cols-[16rem_1fr] md:grid-rows-1 md:gap-12 md:px-10 md:py-10">
      <div className="row-start-1 min-h-0 min-w-0 overflow-y-auto px-2 py-1 md:col-start-2">
        {children}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary-800 bg-primary-950 md:static md:col-start-1 md:row-start-1 md:w-full md:border-t-0">
        <SideNavigation />
      </div>
    </div>
  );
}
