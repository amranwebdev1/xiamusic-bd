import {clsx,type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';
const Cn = (...input:ClassValue[]) => {
  
  return twMerge(clsx(input))
}
export default Cn;