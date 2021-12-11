import { FC } from "react";

interface Props {
  className?: string;
}

export const AlertCircle: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-alert-circle ${className}`} {...props}></i>
);

export const ArrowLeft: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-arrow-left ${className}`} {...props}></i>
);

export const ArrowRight: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-arrow-right ${className}`} {...props}></i>
);

export const Check: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-check ${className}`} {...props}></i>
);

export const ChevronDown: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-chevron-down ${className}`} {...props}></i>
);

export const ChevronLeft: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-chevron-left ${className}`} {...props}></i>
);

export const ChevronLeftThick: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-chevron-left-thick ${className}`} {...props}></i>
);

export const Circle: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-circle ${className}`} {...props}></i>
);

export const CloseCircle: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-close-circle ${className}`} {...props}></i>
);

export const DashedLine: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-dashed-line ${className}`} {...props}></i>
);

export const Filter: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-filter ${className}`} {...props}></i>
);

export const Grid: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-grid ${className}`} {...props}></i>
);

export const InfoCircle: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-info-circle ${className}`} {...props}></i>
);

export const Insta: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-insta ${className}`} {...props}></i>
);

export const Like: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-like ${className}`} {...props}></i>
);

export const Line: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-line ${className}`} {...props}></i>
);

export const Menu: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-menu ${className}`} {...props}></i>
);

export const Mobile: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-mobile ${className}`} {...props}></i>
);

export const More: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-more ${className}`} {...props}></i>
);

export const MoreVertical: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-more-vertical ${className}`} {...props}></i>
);

export const Plus: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-plus ${className}`} {...props}></i>
);

export const PlusCircle: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-plus-circle ${className}`} {...props}></i>
);

export const Search: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-search ${className}`} {...props}></i>
);

export const Star: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-star ${className}`} {...props}></i>
);

export const Trash: FC<Props> = ({ className = "", ...props }) => (
  <i className={`daricheh-trash ${className}`} {...props}></i>
);
