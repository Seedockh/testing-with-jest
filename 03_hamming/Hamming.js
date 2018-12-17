// const hamming = function(sequence1,sequence2) : Int
export const hamming = (seq1,seq2) => {
  seq1 = seq1.toUpperCase();
  seq2 = seq2.toUpperCase();
  // Errors handler :
  if (seq1==='' && seq2==='') return 0;

  if (seq1.length!==seq2.length)
    throw new Error('Sequence should be same size');

  if (typeof(seq1)!=="string" || typeof(seq2)!=="string")
    throw new Error('Sequences are not Strings.');

  if (!/^[CGTA]+$/.test(seq1) || !/^[CGTA]+$/.test(seq2))
    throw new Error('Letters should be A, T, C or G');

  // Calculating differences
  let cpt = 0;
  for (let i=0;i<seq1.length;i++) if (seq1[i]!==seq2[i]) cpt++;
  return cpt;
}
