import { useMemo } from 'react';
// routes
import { paths } from '@/routes/paths';
import SvgColor from '@/components/svg-color';
// locales

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} className="w-1 h-1" />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

// ----------------------------------------------------------------------

export function useNavData() {
  const data = [{}];

  return data;
}
