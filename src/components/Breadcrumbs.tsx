import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

export function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumb-bar" aria-label="Breadcrumb">
      <div className="container breadcrumb-inner">
        {crumbs.map((crumb, i) => (
          <span key={i} className="breadcrumb-item">
            {i > 0 && <ChevronRight aria-hidden="true" />}
            {crumb.to ? (
              <Link to={crumb.to}>{crumb.label}</Link>
            ) : (
              <span aria-current="page">{crumb.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
