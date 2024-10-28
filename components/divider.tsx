import clsx from 'clsx';

const Divider = ({ className = '' }) => {
  return <div className={clsx(' h-[1px] w-full bg-current', className)} />;
};

export default Divider;
