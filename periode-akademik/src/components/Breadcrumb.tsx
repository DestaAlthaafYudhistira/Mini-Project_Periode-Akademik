import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
              {item.href ? (
                <a
                  href={item.href}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-gray-600 text-sm">{item.label}</span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
