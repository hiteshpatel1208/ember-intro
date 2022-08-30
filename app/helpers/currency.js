import Helper from '@ember/component/helper';

export default class currency extends Helper {
  compute(positional, named = {}) {
    const [num] = positional;

    const { sign = '$' } = named;

    const dollars = Math.floor(num);

    let cents = Math.floor((num * 100) % 100);

    if (cents.toString().length === 1) {
      cents = `0${cents}`;
    }

    return `${sign}${dollars}.${cents}`;
  }
}
