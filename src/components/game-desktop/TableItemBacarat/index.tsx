import classNames from 'classnames/bind';
import { HTMLAttributes, useEffect } from 'react';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface TableItemProps extends HTMLAttributes<HTMLDivElement> {
  isPlayer?: boolean;
  children?: React.ReactElement;
  ratio?: number;
  isHighlight?: boolean;
  curChip?: number;
  positionAnswer?: number;
  betConfirmOld?: number;
  points?: number;
  name?: string;
  numberPlayer?: number;
  isLeft?: boolean;
}

export function TableItemBaccarat({ className, isPlayer = false }: TableItemProps): JSX.Element {
  useEffect(() => {
    const div = document.getElementById('myDiv');
    if (div) {
      const width = div.offsetWidth;
      const height = div.offsetHeight;

      // Tính toán các điểm của parabol
      const pathData = `M 0,${height} Q ${width / 2},${height / 4} ${width},${height}`;

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathData);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', 'blue');
      path.setAttribute('stroke-width', '2');

      svg.appendChild(path);
      div.appendChild(svg);
    }
  }, []);

  return (
    <div
      onClick={() => console.log(11)}
      className={`${className} flex justify-center items-center`}>
      {isPlayer ? (
        <div
          // id="myDiv"
          className={cx('w-[calc(100%-10px)] h-[92%] relative top-[0%]', 'parabol', {
            'hover:bg-white': 1,
          })}>
          <svg className="w-full h-full" viewBox="0 0 100% 100%">
            <path d="M0,100 Q 50,100 100,0" fill="none" stroke="#3498db" strokeWidth="1" />
          </svg>
        </div>
      ) : (
        <div
          className={`${cx(
            'border-[1px] border-[transparent] w-[calc(100%-10px)] h-[92%] relative top-[0%]',
            {
              'hover:bg-white': 1,
            }
          )}`}></div>
      )}
    </div>
  );
}
