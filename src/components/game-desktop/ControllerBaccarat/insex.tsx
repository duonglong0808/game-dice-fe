'use client';
import { TableItemBaccarat } from '../TableItemBacarat';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export function ControllerBaccarat(): JSX.Element {
  return (
    <div
      className={cx(
        'bg-[url(/Content/images/vn/json/desktopBJ.png)] absolute left-0 right-0 bottom-[130px] bg-[49px_65px] bg-[length:94%] bg-no-repeat h-[30%] z-[20]',
        {
          'cursor-pointer': 1,
        }
      )}>
      <div className={cx('live_action')}>
        <div className={cx('absolute left-0 right-0 top-0 bottom-0 [&>div]:h-[33%]', 'd3')}>
          <TableItemBaccarat className="basis-[24%]" />
          <TableItemBaccarat className="basis-[26%]" />
          <TableItemBaccarat className="basis-[26%]" />
          <TableItemBaccarat className="basis-[24%]" />
          <TableItemBaccarat className="basis-[24%]" />
          <TableItemBaccarat className="basis-[52%]" />
          <TableItemBaccarat className="basis-[24%]" />
          <TableItemBaccarat isPlayer className="basis-[52%]" />
        </div>
      </div>
    </div>
  );
}
