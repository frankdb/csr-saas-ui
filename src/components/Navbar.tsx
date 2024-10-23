import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold">Logo</span>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              to="/"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-secondary"
            >
              Home
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-secondary"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-secondary"
            >
              Login
            </Link>
            <a
              href="#"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-secondary"
            >
              About
            </a>
            <a
              href="#"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-secondary"
            >
              Contact
            </a>
          </div>
          <div className="sm:hidden flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Home</DropdownMenuItem>
                <DropdownMenuItem>About</DropdownMenuItem>
                <DropdownMenuItem>Services</DropdownMenuItem>
                <DropdownMenuItem>Contact</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
