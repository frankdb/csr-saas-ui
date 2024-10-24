import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, User, Settings } from "lucide-react";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-secondary text-secondary-foreground w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8 text-primary">Job Board</h1>
      <nav>
        <ul className="space-y-2">
          {[
            { path: "/dashboard", icon: Home, label: "Dashboard" },
            { path: "/dashboard/jobs", icon: Briefcase, label: "Jobs" },
            { path: "/dashboard/profile", icon: User, label: "Profile" },
            { path: "/dashboard/settings", icon: Settings, label: "Settings" },
          ].map(({ path, icon: Icon, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`flex items-center p-2 rounded transition-colors ${
                  isActive(path)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-primary/10"
                }`}
              >
                <Icon className="mr-2" size={20} />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
