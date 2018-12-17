export const isLeap = (year) => {
  if (year%400===0 || (year%4===0 && year%100!==0)) {
    return true;
  } else return false;
}

/*
 4 !100 400 -> Leap
 !4 100 !400 200 -> Common
*/
