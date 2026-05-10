import { WalletCards } from "lucide-react";
import type { ReactNode } from "react";
import type { NavigationItem, PageId } from "../pages/types";

interface AppShellProps {
  activePage: PageId;
  navigationItems: NavigationItem[];
  onNavigate: (page: PageId) => void;
  children: ReactNode;
}

export function AppShell({
  activePage,
  navigationItems,
  onNavigate,
  children,
}: AppShellProps) {
  const groupedNavigation = navigationItems.reduce<Record<string, NavigationItem[]>>(
    (groups, item) => ({
      ...groups,
      [item.group]: [...(groups[item.group] ?? []), item],
    }),
    {},
  );

  return (
    <div className="app-layout">
      <aside className="sidebar" aria-label="Navegação principal">
        <div className="brand">
          <span className="brand-mark">
            <WalletCards size={22} aria-hidden="true" />
          </span>
          <div>
            <strong>EduFin</strong>
            <small>Gestão financeira</small>
          </div>
        </div>

        <nav className="sidebar-nav">
          {Object.entries(groupedNavigation).map(([group, items]) => (
            <div className="nav-group" key={group}>
              <span className="nav-group-label">{group}</span>
              <div className="nav-list">
                {items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      className={item.id === activePage ? "nav-item active" : "nav-item"}
                      type="button"
                      key={item.id}
                      onClick={() => onNavigate(item.id)}
                    >
                      <Icon size={18} aria-hidden="true" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      <div className="workspace">
        <header className="mobile-topbar">
          <div className="brand compact">
            <span className="brand-mark">
              <WalletCards size={20} aria-hidden="true" />
            </span>
            <strong>EduFin</strong>
          </div>
        </header>

        <nav className="mobile-nav" aria-label="Navegação móvel">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                className={item.id === activePage ? "mobile-nav-item active" : "mobile-nav-item"}
                type="button"
                key={item.id}
                onClick={() => onNavigate(item.id)}
              >
                <Icon size={17} aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <main className="page-shell">{children}</main>
      </div>
    </div>
  );
}
