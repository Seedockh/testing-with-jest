
export const toRna = (sequence) => {
  sequence = sequence.toUpperCase();

  // Errors handler :
  if (sequence==='') throw new Error('Sequence should not be empty.');
  if (typeof(sequence)!=="string") throw new Error('Sequence is not a String.');
  if (!/^[CGTA]+$/.test(sequence)) throw new Error('Invalid input DNA.');

  let translate = '';
  for (let i=0;i<sequence.length;i++) {
    switch(sequence[i]) {
      case 'G' : translate += 'C'; break;
      case 'C' : translate += 'G'; break;
      case 'T' : translate += 'A'; break;
      case 'A' : translate += 'U'; break;
      default: break;
    }
  };

  if (sequence.length!==translate.length)
    throw new Error('Translate should be same size as Sequence.');

  return translate;
}
