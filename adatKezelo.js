export function tablazatRendezChar(lista) {
  lista.sort(function (a, b) {
    let nev1_char=0
    let nev2_char=b.nev.charCodeAt(0)
    let uj_nev_LISTA=[]
    if (a.nev.charCodeAt(0) == 193){
      nev1_char=65
      console.log(nev1_char)

    }
    else if (a.nev.charCodeAt(0) == 201){
      nev1_char=69
      console.log(nev1_char)

    }
    else{
      nev1_char=a.nev.charCodeAt(0)

    }
    if (nev1_char > nev2_char) {
      return 1;
    } else {
      return -1;
    } 

  });

  return lista;
}

/* szorgalmi hf: lehessen rendezni kor szerint is! *** tetszőleges mező szerint */

function atalakit(szoveg) {
  /*  szorgalmi házi feladat: 
  Á- A É- E 
  replaceAll()
*/
}

export function szuresNevSzerint(lista, szurtSzoveg) {
  /* szurtLista - a szűrőbe írt szó alaján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezőjében az adott szó.  */
  const SZURTLiSTA = lista.filter(function (elem) {
    return elem.nev.includes(szurtSzoveg);
  });
  console.log(SZURTLiSTA);
  return SZURTLiSTA;
}

export function sorTorles(lista, index) {
  /* - minden sor végén legyen egy kuka, a sor indexével, erre a kukára kattintva töröljük az adott sort a listából, és újra megjelenítjük a táblázatot a módosult listával.   */
  lista.splice(index, 1);
  return lista;
}
